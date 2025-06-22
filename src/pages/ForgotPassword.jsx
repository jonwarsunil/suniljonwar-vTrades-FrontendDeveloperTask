import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import Button from '../components/Button';
import AuthLayout from '../layout/AuthLayout';
import Modal from '../components/Modal';
import { useNavigate, Link } from 'react-router-dom';
import { mockForgotPassword } from '../api/api';

const ForgotPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const initialValues = { email: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await mockForgotPassword(values);
      setUserEmail(values.email);
      setIsModalOpen(true);
    } catch (err) {
      setErrors({ email: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleModalOkay = () => {
    setIsModalOpen(false);
    navigate('/otp-varification', { state: { email: userEmail, flow: 'create-newpassword' } });
  };

  return (
    <>
      <AuthLayout
        title='Forgot Your Password?'
        subtext='Don’t worry! Enter your email address, and we’ll send you a link to reset it.'
        actionText='Remembered your password?'
        actionLink='/signin'
      >
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className='w-full max-w-[385px] space-y-6'>
              <Input name='email' label='Email Address' type='email' placeholder='Enter your email' />
              <Button type='submit' disabled={isSubmitting} className='mt-6'>
                {isSubmitting ? 'Sending OTP...' : 'Submit'}
              </Button>

              <div className='text-sm text-center text-[#DADADA] mt-6'>
                Don’t have an account?{' '}
                <Link to='/signup' className='text-[#8B5CF6]'>
                  Sign Up
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </AuthLayout>

      {isModalOpen && (
        <Modal title='OTP Sent!' message={`An OTP has been sent to ${userEmail}.`} onOkay={handleModalOkay} />
      )}
    </>
  );
};

export default ForgotPassword;
