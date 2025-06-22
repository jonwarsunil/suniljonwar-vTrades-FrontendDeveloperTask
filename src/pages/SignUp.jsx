import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import Input from '../components/Input';
import AuthLayout from '../layout/AuthLayout';
import { mockSignUp } from '../api/api';

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6).required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm your password'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await mockSignUp(values);
      alert(res.message);
      navigate('/otp-varification', { state: { email: values.email, flow: 'signup' } });
    } catch (err) {
      setErrors({ email: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title='Sign Up'
      subtext='Manage your workspace seamlessly. Sign up to continue.'
      actionText='Already have an account?'
      actionLink='/signin'
    >
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className='w-full max-w-[385px] space-y-4'>
            <Input name='email' label='Email Address' type='email' placeholder='Enter your email' />
            <Input name='password' label='Password' type='password' placeholder='Create password' />
            <Input name='confirmPassword' label='Confirm Password' type='password' placeholder='Confirm password' />

            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>

            <div className='flex items-center py-8 w-full'>
              <div className='flex-grow h-px bg-[#272727]' />
              <span className='px-4 text-sm text-gray-500'>or</span>
              <div className='flex-grow h-px bg-[#272727]' />
            </div>

            <Button variant='social' icon='google' className='mb-6'>
              Sign Up with Google
            </Button>
            <Button variant='social' icon='microsoft' className='mt-2'>
              Sign Up with Microsoft
            </Button>

            <div className='text-sm text-center text-[#DADADA] mt-6'>
              Already have an account?{' '}
              <Link to='/' className='text-[#8B5CF6]'>
                Sign In
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default SignUp;
