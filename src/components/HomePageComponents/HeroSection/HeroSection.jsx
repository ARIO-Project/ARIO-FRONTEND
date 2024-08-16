import './HeroSection.css'

const HeroSection = () => {
    return (
        <header className='hero-section-container'>
            <div className="hero-section-wrapper">
                <div className="hero-left-section">
                    <h1 className="hero-left-text1">ELEGANCE IN STITCH</h1>
                    <h3 className="hero-left-text2">Experience the Art of Nigerian Traditional Wear</h3>
                    <p className="hero-left-text3">Custom-made outfits tailored to your style and measurement</p>
                    <button className="hero-left-button">Get Started</button>
                </div>
                <div className="hero-right-section">
                    <p className="hero-right-text1">Where tradition meets elegance, <span className="hero-right-text-2">ARIO</span> weaves your story in threads of timeless beauty</p>
                </div>
            </div>
        </header>
    )
}

export default HeroSection