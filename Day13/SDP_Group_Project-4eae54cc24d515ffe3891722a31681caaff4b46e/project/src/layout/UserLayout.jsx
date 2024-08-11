import UserLeftbar from '@/components/User/UserLeftbar';
import UserTopbar from '@/components/User/UserTopbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className='h-screen w-screen flex overflow-hidden'>
      <UserLeftbar />
      <div className='flex flex-col w-5/6 ml-[16.666%]'>
        <UserTopbar />
        <div className='h-[92vh] overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
