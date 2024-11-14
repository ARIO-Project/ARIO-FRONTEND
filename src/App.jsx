import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import OurWorksPage from "./pages/OurWorksPage/OurWorksPage";
import ContactUsPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/HomePageComponents/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollTool from './components/ScrollTool';
import { AuthProvider } from './Contexts/AuthContext';
import './App.css';

const Layout = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <>
      {showNavBar && <NavBar />}
      <ScrollTool />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="works" element={<OurWorksPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
      {showNavBar && <Footer/>}
    </>
  );
};

const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
