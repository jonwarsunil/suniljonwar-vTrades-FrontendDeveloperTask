import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-6xl font-bold text-white mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-white mb-2'>Page Not Found</h2>
      <p className='text-gray-600 mb-6'>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link
        to='/'
        className='bg-white text-[#121417] hover:bg-[#cde0ec] font-bold cursor-pointer px-4 py-2 rounded-[12px] '
      >
        Go Home
      </Link>
    </div>
  );
}
