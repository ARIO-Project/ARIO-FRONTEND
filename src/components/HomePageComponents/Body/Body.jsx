import React from 'react';
import { homeWorksPics } from "../../../data.js";
import { Link } from "react-router-dom";
import { howItWorksSteps, reviews } from "../../../data.js";
import HowItWorks from "../../../assets/how-it-works.png";
import FeaturesPic1 from "../../../assets/features-pic1.png";
import FeaturesPic2 from "../../../assets/features-pic2.png";
import FeaturesPic3 from "../../../assets/feautures-pic3.png";
import "./Body.css"

const Body = () => {
    const [firstStep, secondStep, thirdStep] = howItWorksSteps

    return (
        <main className='homepage-body'>
            <section className='home-works-container'>
                <h1 className="home-works-text1">Our Work</h1>
                <h3 className="home-works-text2">Our Craft, Your Elegance</h3>
                <p className="home-works-text3">Our work is a testament to the rich heritage and timeless traditions of Nigerian culture, woven into each garment with precision and care. From intricate embroidery to luxurious fabrics, our designs reflect the beauty and diversity of our roots</p>
                <div className="home-works-image-wrapper">
                    {
                        homeWorksPics.map(({ image }, index) => {
                            return <img src={image} alt="works-image" className="home-works-image" key={index} />
                        })
                    }
                </div>
                <Link to="/services" className='home-works-button' >Explore our collection</Link>
            </section>
            <section className="features-container">
                <h1 className="hiw-text1">Features</h1>
                <img src={HowItWorks} alt="how-it-works" className="hiw-image1" />
                <div className="features-wrapper">
                    <div className="features-image-container">
                        <img src={FeaturesPic1} alt="features-pic" className="features-image" />
                        <p className="features-image-text">Custom-Made Clothing</p>
                    </div>
                    <div className="features-image-container2">
                        <p className="features-image-text2">User Experience and Support</p>
                        <img src={FeaturesPic2} alt="features-pic2" className="features-image2" />
                    </div>
                    <div className="features-image-container3">
                        <p className="features-image-text3">Community and Culture</p>
                        <img src={FeaturesPic3} alt="features-pic3" className="features-image3" />
                    </div>
                </div>
            </section>
            <section className="how-it-works-container">
                <h1 className="hiw-text1">How it works</h1>
                <img src={HowItWorks} alt="how-it-works" className="hiw-image1" />
                <div className="hiw-steps-image-container">
                    <img src={firstStep.image} alt="" className="hiw-steps-image" />
                    <div className="hiw-steps-image-text-wrapper">
                        <h3 className="hiw-steps-image-text">{firstStep.step}</h3>
                        <p className="hiw-steps-image-text2">{firstStep.content1}</p>
                        <p className="hiw-steps-image-text3">{firstStep.content2}</p>
                    </div>
                </div>
                <div className="hiw-steps-image-container">
                    <img src={secondStep.image} alt="" className="hiw-steps-image" />
                    <div className="hiw-steps-image-text-wrapper2">
                        <h3 className="hiw-steps-image-text">{secondStep.step}</h3>
                        <p className="hiw-steps-image-text2">{secondStep.content1}</p>
                        <p className="hiw-steps-image-text3">{secondStep.content2}</p>
                    </div>
                </div>
                <div className="hiw-steps-image-container">
                    <img src={thirdStep.image} alt="" className="hiw-steps-image" />
                    <div className="hiw-steps-image-text-wrapper3">
                        <h3 className="hiw-steps-image-text">{thirdStep.step}</h3>
                        <p className="hiw-steps-image-text2">{thirdStep.content1}</p>
                        <p className="hiw-steps-image-text3">{thirdStep.content2}</p>
                    </div>
                </div>
            </section>
            <section className="reviews-container">
                <h1 className="hiw-text1">What Our Customers Are Saying</h1>
                <img src={HowItWorks} alt="how-it-works" className="hiw-image1" />
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