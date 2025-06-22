import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  const userEmail = localStorage.getItem('email') || 'User';

  return (
    <div className='min-h-screen bg-[#0E0E10] text-white flex flex-col'>
      <div className='container'>
        <header className='px-6 py-4 flex justify-between items-center border-b border-[#272727]'>
          <h1 className='text-xl md:text-2xl font-semibold'>Dashboard</h1>
          <Button
            onClick={handleLogout}
            className='!w-auto px-5 py-2 bg-red-600 hover:bg-red-700 transition-all duration-200 text-sm'
          >
            Logout
          </Button>
        </header>
      </div>

      <main className='flex-grow px-6 py-10 flex items-center justify-center'>
        <div className='max-w-xl text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Welcome back, <span className='text-[#8B5CF6]'>{userEmail}</span>!
          </h2>
          <p className='text-gray-400 text-base md:text-lg'>
            This is your dashboard. From here, you can manage your account and explore features of the platform.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
