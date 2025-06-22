# vTrades – Frontend Developer Task by Sunil Jonwar

## 📋 Task Overview

This project is developed as part of the **Frontend Developer Task** assigned by the vTrades team.

### 🔹 Task Requirements:

- Build authentication pages using **React.js** and **Tailwind CSS**
- Create **mock API** (or hardcoded response handling)
- Handle proper **error states** and **form validation**
- Implement complete user flows:
  - Sign In
  - Sign Up
  - Forgot Password
  - OTP Verification
  - Create New Password
  - Dashboard
- Use **Google/Microsoft Sign-In** (if possible)
- Ensure mobile responsiveness down to 320px
- Use reusable components for Input, Button, Modal, Layout, etc.
- Code should be well-commented and hosted publicly on GitHub and Vercel

---

## ✅ Functionality Implemented

- 🔐 **Authentication Pages**:
  - Sign In with validation and error handling
  - Sign Up with password confirmation
  - Forgot Password form with OTP trigger
  - OTP verification flow using `react-otp-input`
  - Create new password after verification
  - Dashboard with Logout functionality
  - **Mock API simulation** using `localStorage` to mimic server responses
  - **Fully responsive UI** – Mobile, Tablet, Desktop
  - **Form validation** using `Formik` and `Yup`
  - **Reusable components**: Input, Button, Spinner, Modal, Layout
  - Google/Microsoft login buttons added (auth not wired due to Firebase quota)
  - **Routing** handled using `react-router-dom`
  - Lazy loading via `React.lazy` and `Suspense`

---

## 🚀 Live Preview

- **Hosted on Vercel**: [https://suniljonwar-v-trades-frontend-devel.vercel.app/]

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Form Handling**: Formik + Yup
- **OTP Input**: react-otp-input
- **State Management**: useState, useEffect (React Hooks)
- **Mock APIs**: `localStorage` for persistence

---

## 📦 How to Run Locally

```bash
git clone https://github.com/jonwarsunil/suniljonwar-vTrades-FrontendDeveloperTask.git
cd  suniljonwar-vTrades-FrontendDeveloperTask
npm install
npm run dev
```
