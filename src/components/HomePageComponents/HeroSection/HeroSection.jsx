import React from 'react'
import BackgroundImage1 from '../../../assets/hero-pic1.png';
import BackgroundImage2 from '../../../assets/hero-pic-2.png';
import './HeroSection.css'

const HeroSection = () => {

    return (
        <header className='hero-section-container'  >
            <img src={BackgroundImage1} alt="hero-section" className='hero-section-image1' />
            <div className="hero-section-wrapper">
                <img src={BackgroundImage2} alt="hero-section" className='hero-section-image2' />
                <div className="hero-section-text-wrapper">
                    <h1 className="hero-section-text1">SEW AND GET IN <span className="hero-section-text1-span">3</span> DAYS</h1>
                    <h4 className="hero-section-text2">Experience the Art of Nigerian Traditional Wear</h4>
                    <p className="hero-section-text3">Custom-made outfits tailored to your style and measurements.</p>
                    <button className="hero-section-button">Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default HeroSection