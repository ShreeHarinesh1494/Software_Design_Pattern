import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserLeftbar from '@/components/User/UserLeftbar';
import UserTopbar from '@/components/User/UserTopbar';
import { authService } from '../services/auth';


const UserLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isLoggedIn() || authService.getUserRole() !== 'USER') {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className='h-screen w-screen flex overflow-hidden'>
      <UserLeftbar />
      <div className='flex flex-col w-5/6 ml-[16.666%]'>
        <UserTopbar/>
        <div className='h-[92vh] overflow-y-auto'>
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
