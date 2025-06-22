import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
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

  const baseInputStyle = {
    width: '48px',
    height: '48px',
    margin: '0 8px',
    borderRadius: '8px',
    backgroundColor: '#1D1E26',
    border: '1px solid #30303D',
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
  };

  // Optional: responsive tweak for small screens
  const responsiveInputStyle =
    window.innerWidth <= 768
      ? {
          width: '38px',
          height: '38px',
          margin: '4px',
          fontSize: '16px',
        }
      : {};

  return (
    <AuthLayout title='Enter OTP' subtext={`We’ve sent a 6-digit OTP to your email: ${email}`}>
      <div className='w-full max-w-[385px] mb-6'>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus
            renderInput={props => <input {...props} style={{ ...baseInputStyle, ...responsiveInputStyle }} />}
          />
        </div>
        {error && <p className='text-red-500 text-sm mt-2 text-center'>{error}</p>}
      </div>

      <Button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify OTP'}
      </Button>
    </AuthLayout>
  );
};

export default OtpVerification;
