import React from 'react';
import { homeWorksPics, howItWorksSteps, features, reviews } from "../../../data.js";
import { Link } from "react-router-dom";
import HowItWorks from "../../../assets/how-it-works.png";
import "./Body.css"

const Body = () => {

    return (
        <main className='homepage-body'>
            <section id="homepage-body-section1" className="homepage-body-section1">
                <div className="homepage-body-section1-text-wrapper">
                    <h3 className="homepage-body-section1-text-title">Where tradition meets elegance, <span className="homepage-body-section1-text-title-span">ARIO</span> weaves your story in threads of timeless beauty</h3>
                </div>
            </section>
            <section id="homepage-body-section2" className="homepage-body-section2">
                <div className="homepage-body-section2-text-wrapper">
                    <h1 className="homepage-body-section2-text-title">How it works</h1>
                    <img src={HowItWorks} loading="lazy" alt="how it works" className="homepage-body-section2-image" />
                </div>
                <div className="homepage-body-section2-assets-wrapper">
                    {
                        howItWorksSteps.map((item, index) => (
                            <img src={item.image} loading="lazy" alt="how it works" className="homepage-body-section2-asset" key={index} />
                        ))
                    }
                </div>
            </section>
            <section id="homepage-body-section3" className="homepage-body-section3">
                <div className="homepage-body-section3-image-wrapper">
                    {
                        homeWorksPics.map((item, index) => (
                            <img src={item.image} loading="lazy" alt="how it works" className="homepage-body-section3-asset" key={index} />
                        ))
                    }
                </div>
                <div className="homepage-body-section3-button-wrapper">
                    <Link className="homepage-body-section3-button">Explore Our Collection</Link>
                    <Link className="homepage-body-section3-button">Upload Your Style</Link>
                </div>
            </section>
            <section id="homepage-body-section4" className="homepage-body-section4">
                <div className="homepage-body-section4-text-wrapper">
                    <h1 className="homepage-body-section4-text-title">Features</h1>
                    <img src={HowItWorks} loading="lazy" alt="features" className="homepage-body-section4-image" />
                </div>
                <div className="homepage-body-section4-assets-container">
                    {
                        features.map((item, index) => (
                            <div className="homepage-body-section4-asset-wrapper" key={index}>
                                <img src={item.image} loading="lazy" alt="features" className="homepage-body-section4-asset" />
                                <h3 className="homepage-body-section4-asset-title">{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section id="homepage-body-section5" className="homepage-body-section5">
                <div className="homepage-body-section5-left-container">
                    <h1 className="homepage-body-section5-left-text1">Our Work</h1>
                    <h4 className="homepage-body-section5-left-text2">Our Craft, Your Elegance</h4>
                </div>
                <div className="homepage-body-section5-right-container">
                    <p className="homepage-body-section5-right-text">Our work is a testament to the rich heritage and timeless traditions of Nigerian culture, woven into each garment with precision and care. From intricate embroidery to luxurious fabrics, our designs reflect the beauty and diversity of our roots</p>
                </div>
            </section>
            <section className="reviews-container">
                <div className="reviews-text-wrapper">
                    <h1 className="reviews-text1">What Our Customers Are Saying</h1>
                    <img src={HowItWorks} alt="how-it-works" className="reviews-image1" />
                </div>
                <div className="reviews-card-wrapper">
                    {
                        reviews.map(({ profileImage, profileName, icon, star, location, content }, index) => {
                            return (
                                <div className="review-card" key={index}>
                                    <img src={icon} alt="review-card-icon" className="review-card-icon" />
                                    <p className="review-card-content">{content}</p>
                                    <div className="review-card-section2">
                                        <div className="review-card-section2-left">
                                            <img src={profileImage} alt="profile-image" className="review-card-section2-left-image" />
                                            <div>
                                                <p className="review-card-section2-left-text1">{profileName}</p>
                                                <p className="review-card-section2-left-text2">{location}</p>
                                            </div>
                                        </div>
                                        <img src={star} alt="ratings" className="review-card-section2-right-image" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Body