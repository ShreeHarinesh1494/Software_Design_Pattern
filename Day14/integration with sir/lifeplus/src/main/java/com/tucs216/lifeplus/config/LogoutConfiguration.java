package com.tucs216.lifeplus.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import com.tucs216.lifeplus.auth.CustomLogoutHandler;
import com.tucs216.lifeplus.auth.CustomLogoutSuccessHandler;
import com.tucs216.lifeplus.repo.TokenRepo;

@Configuration
public class LogoutConfiguration {

    @Bean
    public CustomLogoutHandler logoutHandler(TokenRepo tokenRepo, JwtService jwtService) {
        return new CustomLogoutHandler(tokenRepo, jwtService);
    }

    @Bean
    public LogoutSuccessHandler logoutSuccessHandler() {
        return new CustomLogoutSuccessHandler();
    }
}
