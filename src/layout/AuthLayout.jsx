import React from 'react';
import SigninBanner from '../assets/images/signin-banner.svg';

const AuthLayout = ({ title, children, subtext }) => {
  return (
    <div className='container'>
      <div className='flex flex-col md:flex-row bg-[#17181E] text-white'>
        {/* Left Side with background image */}
        <div
          className='md:w-1/2 w-full mt-6 md:mt-10 md:ml-10 rounded-2xl flex flex-col justify-end items-center p-6 sm:p-8 md:p-10 bg-black bg-cover bg-center min-h-[500px] sm:min-h-[600px] md:min-h-[90vh]'
          style={{
            backgroundImage: `url(${SigninBanner})`,
          }}
        >
          <div className='bg-opacity-60 w-full max-w-[635px]'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-left'>Welcome to WORKHIVE!</h2>
            <ul className='text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-2 text-left'>
              <li>Employee Management: View detailed profiles, track performance, and manage attendance.</li>
              <li>Performance Insights: Analyze team goals, progress, and achievements.</li>
              <li>Attendance & Leaves: Track attendance patterns and manage leave requests effortlessly.</li>
            </ul>
          </div>
        </div>

        {/* Right Side Auth Form */}
        <div className='md:w-1/2 w-full flex justify-center items-center py-10 md:pt-0 sm:p-8 md:p-12'>
          <div className='w-full max-w-[385px]'>
            <h2 className='text-2xl sm:text-3xl md:text-[32px] font-bold leading-snug md:leading-[48px] mb-2'>
              {title}
            </h2>
            <p className='text-sm text-[#DADADA] mb-6 sm:mb-8'>{subtext}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
