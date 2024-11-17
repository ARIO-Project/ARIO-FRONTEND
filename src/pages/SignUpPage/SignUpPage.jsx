import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import { SERVER_URL } from '../../Constants/Server';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../Contexts/AuthContext';
import axios from 'axios';
import Slider1 from "../../assets/login-pic.jpeg";
import Slider2 from "../../assets/login-pic2.jpeg";
import Slider3 from "../../assets/login-pic3.jpeg";
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './SignUpPage.css'

const SignUpPage = () => {
  const { signUp, isLoading, message } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  // function to submit the sign up form
  const submitSignUp = async(event) => {
    event.preventDefault();
    // initially check if confirm password matches initial password
    if (password === confirmPassword) {
      signUp(firstName, lastName, email, phoneNumber, password);
    } else if (password !== confirmPassword) {
      // if passwords do not match, display error toast
      console.log("Passwords do not match")
      toast.error('Passwords do not match', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else if (firstName === "" || lastName === "" || email === "" || phoneNumber === "") {
      // if any fields are empty, display error toast
      toast.error('Please fill in all fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  

  // function to handle various text input
  const handleTextInput = (event) => {
    const { name, value } = event.target;
    if (name === "first-name") {
      setFirstName(value)
    } else if (name === "last-name") {
      setLastName(value)
    } else if (name === "e-mail") {
      setEmail(value)
    } else if (name === "phone-number") {
      setPhoneNumber(value)
    } else if (name === "password") {
      setPassword(value)
    } else if (name === "confirm-password") {
      setConfirmPassword(value)
    }
  }



  return (
    <div className='signup-container'>
      <div className="signup-left-section">
        <h1 className="signup-left-section-text1">ARIO</h1>
        <h1 className="signup-left-section-text2">Sign-Up</h1>
        <p className="signup-left-section-text3">Welcome!</p>
        <form onSubmit={submitSignUp} className="signup-form">
          <div className='signup-form-input1-container' >
            <label htmlFor="first-name" className='signup-form-input-text'>First Name</label>
            <input type="text" value={firstName} onChange={handleTextInput}  name='first-name' className="signup-form-input1" placeholder='Enter your first name' />
          </div>
          <div className='signup-form-input1-container' >
            <label htmlFor="last-name" className='signup-form-input-text'>Last Name</label>
            <input type="text" name='last-name' value={lastName} onChange={handleTextInput} className="signup-form-input1" placeholder='Enter your last name' />
          </div>
          <div className='signup-form-input1-container' >
            <label htmlFor="e-mail" className='signup-form-input-text'>Email</label>
            <input type="text" name='e-mail' value={email} onChange={handleTextInput} className="signup-form-input1" placeholder='Enter your e-mail address' />
          </div>
          <div className='signup-form-input1-container' >
            <label htmlFor="phone-number" className='signup-form-input-text'>Phone Number</label>
            <input type="text" name='phone-number' value={phoneNumber} onChange={handleTextInput} className="signup-form-input1" placeholder='Enter your phone number' />
          </div>
          <div className='signup-form-input2-container' >
            <label htmlFor="password" className='signup-form-input-text'>Password</label>
            <input type={showPassword ? "text" : "password"} name='password' value={password} onChange={handleTextInput} className="signup-form-input2" placeholder='Enter your password' />
            <p onClick={() => setShowPassword(!showPassword)} className="signup-show-password-icon">{showPassword ? "🙈" : "👁️"} </p>
          </div>
          <div className='signup-form-input2-container' >
            <label htmlFor="confirm-password" className='signup-form-input-text'>Confirm Password</label>
            <input type={showConfirmPassword ? "text" : "password"} name='confirm-password' value={confirmPassword} onChange={handleTextInput} className="signup-form-input2" placeholder='Confirm your password' />
            <p onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="signup-show-password-icon">{showConfirmPassword ? "🙈" : "👁️"} </p>
          </div>
          <button type='submit' className="signup-form-button" disabled={isLoading}>{isLoading ? "Loading..." : "Continue"}</button>
        </form>
      </div>
      <div className="signup-right-section">
        <Swiper pagination={false} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          modules={[Pagination, Autoplay]}  spaceBetween={200} className="mySwiper">
            <SwiperSlide className="signup-right-section-slide" >
              <div className="signup-right-section-swiper-slide-item">
                <h3 className="signup-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                <img src={Slider1} alt="slider1" className="signup-right-section-swiper-slide-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="signup-right-section-slide" >
              <div className="signup-right-section-swiper-slide-item">
                <h3 className="signup-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                <img src={Slider2} alt="slider2" className="signup-right-section-swiper-slide-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="signup-right-section-slide" >
              <div className="signup-right-section-swiper-slide-item">
                <h3 className="signup-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                <img src={Slider3} alt="slider3" className="signup-right-section-swiper-slide-image" />
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SignUpPage