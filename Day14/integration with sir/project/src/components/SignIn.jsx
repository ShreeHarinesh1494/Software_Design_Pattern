import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 
import { authService } from "../services/auth";
import '../assets/css/Login.css'; 

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [isRotated, setIsRotated] = useState(false);
    const navigate = useNavigate(); 

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async (token) => {
        authService.setToken(token);

        try {
            const role = authService.getUserRole();

            if (role) {
                if (role === 'USER') {
                    navigate('/user/dashboard');
                } else if (role === 'ADMIN') {
                    navigate('/admin/dashboard');
                } else {
                    toast.error('Unknown role.', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                }
            } else {
                toast.error('Role not found in token.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            toast.error('Failed to decode token.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error('Please enter both email and password.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
            return;
        }

        try {
            const response = await authService.SignIn(email, password); 

            const { token } = response.data;

            toast.success('Login successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });

            setTimeout(() => {
                handleLogin(token);
            }, 2000);
        } catch (error) {
            toast.error('Login failed. Please check your credentials.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const renderForm = () => {
        return (
            <div className={`form-content ${isRotated ? 'rotated' : ''} glass-effect`}>
                <h2 className="font-bold text-3xl text-[#002D74] animate-bounce">Welcome Back!</h2>
                <p className="text-sm mt-4 text-[#002D74]">If you are already a member, easily log in</p>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input 
                        className="p-3 mt-8 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74] transition-all duration-300 text-black" 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative">
                        <input 
                            className="p-3 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#002D74] transition-all duration-300 text-black" 
                            type={passwordVisible ? "text" : "password"} 
                            name="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-eye absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300" viewBox="0 0 16 16" onClick={togglePasswordVisibility}>
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </div>
                    <button className="bg-[#002D74] rounded-xl text-white py-2 hover:bg-[#001F5C] transition-colors duration-300 transform hover:scale-105">Login</button>
                </form>
                <div className="mt-5 text-sm flex justify-between items-center text-[#002D74]">
                    <p>Don't have an account?</p>
                    <button onClick={handleRegisterClick} className="py-2 px-5 bg-white border border-[#002D74] rounded-xl hover:bg-[#002D74] hover:text-white transition-colors duration-300 transform hover:scale-110">Register</button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center login-background">
                <div className={`card ${isRotated ? 'rotate-y-180' : ''}`}>
                    {renderForm()}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SignIn;
