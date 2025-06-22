// src/api/api.js

// Load mock data from localStorage
const loadUsers = () =>
  JSON.parse(localStorage.getItem('mockUserStore')) || {
    'test@example.com': { password: 'password123' },
  };
const saveUsers = users => localStorage.setItem('mockUserStore', JSON.stringify(users));

const loadOtps = () => JSON.parse(localStorage.getItem('mockOtpStore')) || {};
const saveOtps = otps => localStorage.setItem('mockOtpStore', JSON.stringify(otps));

let mockUserStore = loadUsers();
let mockOtpStore = loadOtps();

// Mock Sign In
export const mockSignIn = ({ email, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUserStore[email];
      if (user && user.password === password) {
        resolve({ status: 200, message: 'Login successful', token: 'fake-jwt-token' });
      } else {
        reject({ status: 401, message: 'Invalid email or password' });
      }
    }, 1000);
  });

// Mock Sign Up
export const mockSignUp = async ({ email, password }) => {
  await new Promise(res => setTimeout(res, 1000));

  if (mockUserStore[email]) {
    throw new Error('Email already registered');
  }

  mockUserStore[email] = { password };
  saveUsers(mockUserStore);

  mockOtpStore[email] = '123456';
  saveOtps(mockOtpStore);

  return { message: 'Signup successful. OTP sent to email.' };
};

// Mock Forgot Password
export const mockForgotPassword = async ({ email }) => {
  await new Promise(res => setTimeout(res, 1000));

  if (!mockUserStore[email]) {
    throw new Error('Email not found');
  }

  mockOtpStore[email] = '123456';
  saveOtps(mockOtpStore);

  return { message: 'OTP sent to your email' };
};

// OTP Verification
export const verifyOtp = async ({ email, otp }) => {
  await new Promise(res => setTimeout(res, 500));

  if (mockOtpStore[email] === otp) {
    delete mockOtpStore[email];
    saveOtps(mockOtpStore);
    return { success: true, message: 'OTP verified successfully' };
  } else {
    throw new Error('Invalid OTP');
  }
};

// Update Password (after OTP)
export const mockUpdatePassword = async ({ email, password }) => {
  await new Promise(res => setTimeout(res, 1000));

  if (!mockUserStore[email]) {
    throw new Error('User not found');
  }

  mockUserStore[email].password = password;
  saveUsers(mockUserStore);

  return { message: 'Password updated successfully' };
};
