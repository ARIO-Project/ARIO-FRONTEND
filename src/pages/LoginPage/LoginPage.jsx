import React, { useState } from 'react'
import Slider1 from "../../assets/login-pic.jpeg";
import Slider2 from "../../assets/login-pic2.jpeg";
import Slider3 from "../../assets/login-pic3.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './LoginPage.css'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const submitLogin = (event) => {
    event.preventDefault();
  }

  return (
    <div className='login-container'>
      <div className="login-left-section">
        <h1 className="login-left-section-text1">ARIO</h1>
        <h1 className="login-left-section-text2">Sign-in</h1>
        <p className="login-left-section-text3">Welcome!</p>
        <form onSubmit={submitLogin} className="login-form">
          <div className='login-form-input1-container' >
            {/* <label htmlFor="e-mail" className='login-form-input-text'>Email</label> */}
            <input type="text" name='e-mail' className="login-form-input1" placeholder='Enter your e-mail address' />
          </div>
          <div className='login-form-input2-container' >
            {/* <label htmlFor="password" className='login-form-input-text'>Password</label> */}
            <input type={showPassword ? "text" : "password"} name='password' className="login-form-input2" placeholder='Enter your password' />
            <p onClick={() => setShowPassword(!showPassword)} className="login-show-password-icon">{showPassword ? "🙈" : "👁️"} </p>
          </div>
          <div className="login-forgot-password-container">
            <div style={{ display: "flex", alignItems: "center" }} >
              <input type="checkbox" name="remember-me" className="login-remember-me-checkbox" />
              <label htmlFor="remember-me" className="login-remember-me-text">Remember me</label>
            </div>
            <p className="login-forgot-password-text">Forgot password?</p>
          </div>
          <button type='submit' className="login-form-button">Log In</button>
        </form>
      </div>
      <div className="login-right-section">
        <Swiper pagination={true} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          modules={[Pagination, Autoplay]} spaceBetween={150} className="mySwiper">
            <SwiperSlide className="login-right-section-slide" >
              <div className="login-right-section-swiper-slide-item">
                <h3 className="login-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                <img src={Slider1} alt="slider1" className="login-right-section-swiper-slide-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="login-right-section-slide" >
              <div className="login-right-section-swiper-slide-item">
                <h3 className="login-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                <img src={Slider2} alt="slider2" className="login-right-section-swiper-slide-image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="login-right-section-slide" >
              <div className="login-right-section-swiper-slide-item">
                <h3 className="login-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                <img src={Slider3} alt="slider3" className="login-right-section-swiper-slide-image" />
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default LoginPage