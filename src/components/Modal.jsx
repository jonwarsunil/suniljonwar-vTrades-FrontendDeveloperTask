import React from 'react';
import Button from './Button';
import { EmailIcon, CheckedIcon } from '../components/Icon';

const Modal = ({ title, message, onOkay, icon }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)] backdrop-blur-sm'>
      <div className='bg-[#1F2129] backdrop-blur-md p-10 rounded-2xl w-[90%] max-w-[500px] text-center shadow-xl '>
        <div className='flex justify-center'>
          {icon === 'mail' ? <EmailIcon className='!mx-auto' /> : <CheckedIcon className='!mx-auto' />}
        </div>
        <h2 className='text-white text-lg font-semibold mt-7 mb-3'>{title}</h2>
        <p className='text-gray-400 mb-6'>{message}</p>
        <div className='flex justify-end'>
          <Button onClick={onOkay} className='px-8 text-md !w-auto'>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
