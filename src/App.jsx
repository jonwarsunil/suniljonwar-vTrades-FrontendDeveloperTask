import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NotFound from './components/404';
import Spinner from './components/Spinner';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const OtpVerification = lazy(() => import('./pages/OtpVerification'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CreateNewPassword = lazy(() => import('./pages/CreateNewPassword'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/otp-varification' element={<OtpVerification />} />
        <Route path='/create-newpassword' element={<CreateNewPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
export default App;
