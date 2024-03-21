import React from "react";
import "./About.css";
import shaileeImage from "./shailee.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to HappyTeeths, where we are dedicated to providing the best dental care
          possible. Our team of experienced dentists and hygienists are committed to your
          oral health and well-being.
        </p>
        <div className="about-doctor">
          <img src={shaileeImage} alt="Dr. Shailee Chandak" className="about-photo" />
          <div className="about-doctor-info">
            <h2 className="about-doctor-name">Dr. Shailee Chandak</h2>
            <p className="about-doctor-title">Dentist</p>
            <p className="about-doctor-bio">
              Dr. Shailee Chandak is a highly skilled and experienced dentist with a
              passion for providing the best dental care possible. She has completed her graduation in dental surgery from SPDC Wardha. She has experience with tons of customers looking for dental treatment.
            </p>
          </div>
        </div>
        <div className="video-consultation">
          <h2 className="video-consultation-title">Schedule a Video Consultation</h2>
          <p className="video-consultation-text">
            Dr. Shailee Chandak can review your dental concerns on a video call and suggest
            you the best ways to maintain your oral health.
          </p>
          <button className="video-consultation-button">Schedule Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;