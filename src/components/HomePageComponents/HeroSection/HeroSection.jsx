import React from 'react'
import useBackgroundImageOptimized from '../../../Hooks/useBackgroundImageOptimized'
import BackgroundImage1 from '../../../assets/hero-pic1.png';
import BackgroundImage2 from '../../../assets/hero-pic-2.png';
import './HeroSection.css'

const HeroSection = () => {
    const [elementRef, isLoaded] = useBackgroundImageOptimized(BackgroundImage1, BackgroundImage2)

    return (
        <header ref={elementRef} style={isLoaded ? { backgroundImage: `url(${BackgroundImage1})`} : {}} className='hero-section-container'  >
            <div ref={elementRef} style={isLoaded ? { backgroundImage: `url(${BackgroundImage2})`} : {}} className="hero-section-wrapper">
                <h1 className="hero-section-text1">SEW AND GET IN <span className="hero-section-text1-span">3</span> DAYS</h1>
                <h4 className="hero-section-text2">Experience the Art of Nigerian Traditional Wear</h4>
                <p className="hero-section-text3">Custom-made outfits tailored to your style and measurements.</p>
                <button className="hero-section-button">Get Started</button>
            </div>
        </header>
    )
}

export default HeroSection