import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import { mockSignIn } from '../api/api';

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await mockSignIn(values);
      alert(res.message);
      navigate('/dashboard');
    } catch (error) {
      setFieldError('password', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title='Sign In'
      subtext='Manage your workspace seamlessly. Sign in to continue.'
      actionText='Don&#8217;t have an account?'
      actionLink='/signup'
    >
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className='w-full max-w-[385px] space-y-4'>
            <Input name='email' label='Email Address' type='email' placeholder='Enter your email' />
            <Input name='password' label='Password' type='password' placeholder='Enter your password' />

            <div className='flex justify-between items-center text-sm text-gray-400 mb-6'>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-[#8B5CF6]' /> Remember me
              </label>
              <Link to='/forgot-password' className='text-[#8B5CF6]'>
                Forgot Password?
              </Link>
            </div>

            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>

            <div className='flex items-center py-8 w-full max-w-[385px]'>
              <div className='flex-grow h-px bg-[#272727]'></div>
              <span className='px-4 text-sm text-gray-500'>or</span>
              <div className='flex-grow h-px bg-[#272727]'></div>
            </div>

            <Button variant='social' icon='google' className='mb-6'>
              Sign In with Google
            </Button>
            <Button variant='social' icon='microsoft' className='mt-2'>
              Sign In with Microsoft
            </Button>

            <div className='text-sm text-center text-[#DADADA] mt-6'>
              Don&#8217;t have an account?{' '}
              <Link to='/signup' className='text-[#8B5CF6]'>
                Sign Up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default SignIn;
