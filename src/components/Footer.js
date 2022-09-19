/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import "./FooterStyles.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>G-36/4 Rishi Vihar Near Shiva Mandir </p>
              <p>Dehradun Uttarakhand</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} /> 7906249900</h4>
          </div>

          <div className="email">
            <a href="mailto:pawankestwal234@gmail.com"><h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />pawankestwal234@gmail.com</h4></a>
          </div>
        </div>
        <div className="right">
          <h4> About My Self </h4>
          <p>This is me Pawan Kestwal. An Electronic Engineering Student From Shivalik College of Engineering . I love to Learn and build a new project which help me to build My Career.</p>
          <div className="social">
            <a href="https://www.facebook.com/pawan.kestwal.1" rel="noopener noreferrer" target="_blank"><FaFacebook className="icon facebook" size={50} style={{ marginRight: "1rem" }} /></a>

            <a href="https://www.linkedin.com/in/pawan-kestwal-572002207/" rel="noopener noreferrer" target="_blank"><FaLinkedin className="icon linkedin" size={50} style={{ marginRight: "1rem" }} /></a>

            <a href="https://www.instagram.com/pawankestwal" rel="noopener noreferrer" target="_blank"><FaInstagram className="icon instagram" size={50} style={{ marginRight: "1rem" }} /></a>

            <a href="https://twitter.com/a_kestwal" rel="noopener" target="_blank"><FaTwitter className="icon twitter" size={50} style={{ marginRight: "1rem" }} /></a>

            <a href="https://github.com/Pawankestwal/PawanKestwal234" rel="noopener" target="_blank"><FaGithub className="icon github" size={50} style={{ marginRight: "1rem" }} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer