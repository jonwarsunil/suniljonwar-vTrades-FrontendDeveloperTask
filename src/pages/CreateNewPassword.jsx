import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../components/Input';
import Button from '../components/Button';
import AuthLayout from '../layout/AuthLayout';
import Modal from '../components/Modal';
import { mockUpdatePassword } from '../api/api';

const CreateNewPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string().min(6, 'Password must be 6+ characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await mockUpdatePassword({ email, password: values.password });
      setIsModalOpen(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <AuthLayout title='Create New Password' subtext='Enter your new password below.'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className='w-full max-w-[385px] space-y-4'>
              <Input name='password' label='Password' type='password' placeholder='Enter new password' />
              <Input
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                placeholder='Re-enter new password'
              />
              <Button type='submit' disabled={isSubmitting} className='mt-6'>
                {isSubmitting ? 'Updating...' : 'Submit'}
              </Button>
            </Form>
          )}
        </Formik>
      </AuthLayout>

      {isModalOpen && <Modal title='Success' message='Your password has been updated!' onOkay={handleOk} />}
    </>
  );
};

export default CreateNewPassword;
