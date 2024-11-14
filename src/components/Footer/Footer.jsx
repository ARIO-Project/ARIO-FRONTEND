import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import FooterIcon1 from "../../assets/footer-icon1.png";
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-container' >
            <div className="footer-content-container">
                <div className="footer-left-section">
                    <img src={FooterIcon1} alt="" className="footer-left-section-image" />
                    <h1 className="footer-left-section-text1">Before you go, check out our links</h1>
                    <div className="footer-left-section-bottom">
                        <div className="footer-left-section-bottom-section1">
                            <h4 className="footer-left-section-bottom-section1-text1">Company</h4>
                            <Link to="/#homepage-body-section5" className="footer-left-section-bottom-section1-text2">About us</Link>
                            <p className="footer-left-section-bottom-section1-text2">Support</p>
                        </div>
                        <div className="footer-left-section-bottom-section2">
                            <h4 className="footer-left-section-bottom-section1-text1">Legal</h4>
                            <p className="footer-left-section-bottom-section1-text2">Privacy Policy</p>
                            <p className="footer-left-section-bottom-section1-text2">Return Policy</p>
                            <p className="footer-left-section-bottom-section1-text2">Community Rules</p>
                        </div>
                        <div className="footer-left-section-bottom-section3">
                            <h4 className="footer-left-section-bottom-section1-text1">Job Board</h4>
                            <p className="footer-left-section-bottom-section1-text2">Join the collective</p>
                        </div>
                    </div>
                </div>
                <div className="footer-right-section">
                    <div className="footer-right-section-top">
                        <h1 className="footer-right-section-top-text">Newsletter</h1>
                        <div className="footer-right-input-container">
                            <form action="">
                                <input type="email" className="footer-input" placeholder='Enter email' />
                                <div className="footer-input-button">
                                    <p className="footer-input-button-text">Join</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-right-section-bottom">
                        <a href="" target='_blank' rel='noopener noreferrer' className="footer-instagram-icon">
                            <Icon icon="bi:instagram" height={33.74} className='icon-source' />
                        </a>
                        <a href="" target='_blank' rel='noopener noreferrer' className="footer-instagram-icon">
                            <Icon icon="ri:twitter-x-line" height={29} className='icon-source' />
                        </a>
                        <a href="" target='_blank' rel='noopener noreferrer' className="footer-instagram-icon">
                            <Icon icon="bi:linkedin" height={29.42} className='icon-source' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer