import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from 'react18-input-otp';
import Button from '../components/Button';
import AuthLayout from '../layout/AuthLayout';
import { verifyOtp } from '../api/api';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || '';
  const flow = location.state?.flow || '';

  const handleVerify = async () => {
    setError('');
    setLoading(true);
    try {
      await verifyOtp({ email, otp });
      if (flow === 'signup') {
        alert('OTP Verified! Redirecting to dashboard...');
        navigate('/dashboard');
      } else if (flow === 'forgot-password') {
        alert('OTP Verified! Redirecting to create new password...');
        navigate('/reset-password', { state: { email } });
      } else if (flow === 'create-newpassword') {
        navigate('/create-newpassword', { state: { email } });
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title='Enter OTP' subtext={`We’ve sent a 6-digit OTP to your email: ${email}`}>
      <div className='w-full max-w-[385px] mb-6'>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle='otp-input'
          containerStyle='otp-container'
          shouldAutoFocus
        />
        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
      </div>
      <Button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify OTP'}
      </Button>
    </AuthLayout>
  );
};

export default OtpVerification;
