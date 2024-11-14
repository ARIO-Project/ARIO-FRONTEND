import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <header className='hero-section-container'>
            <div className="hero-section-wrapper">
                <h1 className="hero-section-text1">SEW AND GET IN <span className="hero-section-text1-span">3</span> DAYS</h1>
                <h4 className="hero-section-text2">Experience the Art of Nigerian Traditional Wear</h4>
                <p className="hero-section-text3">Custom-made outfits tailored to your style and measurements.</p>
                <button className="hero-section-button">Get Started</button>
            </div>
        </header>
    )
}

export default HeroSection