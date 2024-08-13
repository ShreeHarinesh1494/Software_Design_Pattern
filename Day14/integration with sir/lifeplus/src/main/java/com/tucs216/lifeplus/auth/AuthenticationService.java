package com.tucs216.lifeplus.auth;

import com.tucs216.lifeplus.config.JwtService;
import com.tucs216.lifeplus.enums.Role;
import com.tucs216.lifeplus.model.Token;
import com.tucs216.lifeplus.model.Customer;
import com.tucs216.lifeplus.repo.TokenRepo;
import com.tucs216.lifeplus.repo.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements AuthService {

    private final CustomerRepository customerRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepo tokenRepo;

    public AuthenticationResponse register(RegisterRequest request) {
        Optional<Customer> existingUser = customerRepo.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        var user = Customer.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();
        customerRepo.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .role(user.getRole())
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = customerRepo.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .role(user.getRole())
                .build();
    }

    private void saveUserToken(Customer customer, String accessToken) {
        var token = Token.builder().customer(customer).token(accessToken).expired(false).revoked(false).build();
        tokenRepo.save(token);
    }

    private void revokeAllUserTokens(Customer customer) {
        var validUserTokens = tokenRepo.findAllByCustomer_IdAndExpiredFalseAndRevokedFalse(customer.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepo.saveAll(validUserTokens);
    }

    public void logout(String username) {
        var user = customerRepo.findByEmail(username).orElseThrow();
        revokeAllUserTokens(user);
    }

    @Override
    public String createAdmin() {
        Optional<Customer> userExist = customerRepo.findByEmail("admin@gmail.com");
        if (userExist.isPresent()) {
            return "User already exists with email id - admin@gmail.com";
        }

        var user = Customer.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("1811321"))
                .role(Role.ADMIN)
                .build();
        customerRepo.save(user);
        return "Admin registered successfully.";
    }
}
