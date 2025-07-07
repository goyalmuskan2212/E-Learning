import React from 'react';
import "./footer.css";
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2025 Your E-Learning Platform. All rights reserved. <br /> Made with ❤️ <a href="https://github.com/goyalmuskan2212">Muskan Goyal</a>
            </p>
            <div className="social-links">
                <a href="">
                    <AiFillFacebook />
                </a>
                <a href="">
                    <AiOutlineTwitter />
                </a>
                <a href="">
                    <AiFillInstagram />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer