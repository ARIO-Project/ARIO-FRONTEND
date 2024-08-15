import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactUsPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App