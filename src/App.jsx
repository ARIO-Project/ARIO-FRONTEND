import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactUsPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/HomePageComponents/NavBar/NavBar";
import './App.css'



const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
        
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App