import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from './Contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import HomePage from "./pages/HomePage/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import OurWorksPage from "./pages/OurWorksPage/OurWorksPage";
import ContactUsPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/HomePageComponents/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollTool from './components/ScrollTool';
import OtpVerificationPage from './pages/OtpVerificationPage/OtpVerificationPage';
import ChoicePage from './pages/ChoicePage/ChoicePage';
import CustomPricing from './pages/CustomPricing/CustomPricing';
import './App.css';

const Layout = () => {
  const location = useLocation();
  const onLoginPage = location.pathname === '/login';
  const onSignUpPage = location.pathname === '/signup';
  const onOtpPage = location.pathname === '/otp';
  const showNavBar = !onLoginPage && !onSignUpPage && !onOtpPage;

  return (
    <>

      <ScrollTool />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="works" element={<OurWorksPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="otp" element={<OtpVerificationPage />} />
        <Route path="choice" element={<ChoicePage />} />
        <Route path="custom-pricing" element={<CustomPricing />} />
      </Routes>

    </>
  );
};

const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <AuthProvider>
          <Layout />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
