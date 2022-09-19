/* eslint-disable jsx-a11y/alt-text */
import Profile from "../assets/profile-img.jpeg"
import React from 'react'
import "./IntroStyles.css";
function Intro() {
    return (
        <div className="intro-container">
            <div className="about-me">
                <h2 className="about-me-heading">ABOUT ME</h2>
            </div>
            <div className="intro-img-container">
                <img className="intro-description-img" src={Profile} />
            </div>
            <div className="intro-content-container">
                <div className="intro-content">
                    <p className="content">Hello! My Name is Pawan A Kestwal and I am a third year Btech-(ECE) Student from Shivalik College Of Engineering. I loves to create and design new things. I believe in collaborating with other people to learn and grow with them.Currently I am learning Web Development and Internet of Things.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro