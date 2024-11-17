import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import Slider1 from "../../assets/login-pic.jpeg";
import Slider2 from "../../assets/login-pic2.jpeg";
import Slider3 from "../../assets/login-pic3.jpeg";
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './OtpVerificationPage.css'

const OtpVerificationPage = () => {
    const navigate = useNavigate();
    const { sendOtp, isLoading, resendOtp, isOtpVerified } = useAuth();
    const [otp, setOtp] = useState("");

    const otpHandler = () => {
        sendOtp(otp)
    }

    useEffect(() => {
        if (isOtpVerified) {
            setTimeout(() => {
                navigate("/login")
            }, 7000)
        }
    }, [isOtpVerified, navigate]);

    return (
        <div className='otp-container'>
            <div className="otp-left-section">
                <h1 className="otp-left-section-text1">ARIO</h1>
                <h1 className="otp-left-section-text2">Sign-Up</h1>
                <p className="otp-left-section-text3">E-mail Verification</p>
                {
                    isOtpVerified ? (
                        <>
                            <h3 className="otp-container-text1">Your E-mail has be verified successfully</h3>
                            <h3 className="otp-container-text2">You will be re-directed shortly</h3>
                        </>
                    ) : (
                        <>
                            <h3 className="otp-container-text1">An OTP (One Time Password) has been sent to your email for verification</h3>
                            <h3 className="otp-container-text2">Enter the 6-digit code from your email. OTP sent expires in 2 hours</h3>
                        </>
                    )
                }
                {
                    !isOtpVerified && (
                        <div className="otp-wrapper" >
                            <div className="otp-input-wrapper">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    shouldAutoFocus={true}
                                    renderInput={(props, index) => (
                                        <input
                                            {...props}
                                            className='otp-input-style'
                                            key={index}
                                        />
                                    )}

                                    containerStyle={{
                                        display: 'flex',
                                        marginTop: '68px',
                                        gap: '17px',
                                        flexWrap: 'wrap',
                                        
                                    }}
                                    skipDefaultStyles={true}
                                />
                            </div>
                            <div className="resend-otp-container">
                                <p className="resend-otp-text">Didn&apos;t receive the OTP? <span onClick={() => {
                                    resendOtp();
                                    setOtp("");
                                }} className="resend-otp-text-span">Resend</span></p>
                            </div>
                            <button className="submit-otp" disabled={isLoading} onClick={otpHandler}>{isLoading ? "Loading..." : "Continue"}</button>
                        </div>
                    )
                }
            </div>
            <div className="otp-right-section">
                <Swiper pagination={false} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                    modules={[Pagination, Autoplay]} spaceBetween={200} className="mySwiper">
                    <SwiperSlide className="otp-right-section-slide" >
                        <div className="otp-right-section-swiper-slide-item">
                            <h3 className="otp-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                            <img src={Slider1} alt="slider1" className="otp-right-section-swiper-slide-image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="otp-right-section-slide" >
                        <div className="otp-right-section-swiper-slide-item">
                            <h3 className="otp-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                            <img src={Slider2} alt="slider2" className="otp-right-section-swiper-slide-image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="otp-right-section-slide" >
                        <div className="otp-right-section-swiper-slide-item">
                            <h3 className="otp-right-section-swiper-slide-info">Personalize clothing items with various options</h3>
                            <img src={Slider3} alt="slider3" className="otp-right-section-swiper-slide-image" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default OtpVerificationPage
