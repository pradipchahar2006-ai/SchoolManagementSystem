import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <h2>CONTACT US</h2>

                <div className="contactAddress">
                    <div>🗺️</div>
                    <p> schlab public School
                        Sector 12, Near City Park
                        Bhopal, Madhya Pradesh  462016
                        India
                    </p>

                </div>
                <div className="contactNo">
                    <div> 📞 +91 98765 43210</div>
                </div>
                <div className="contactEmail">
                    ✉️ schlab@school.edu.in
                </div>
            </div>
            <div className="follow">
                <h3>FOLLOW US</h3>

                <div className="social">

                    <a href="http://"><div className="icon fb"><FaFacebookF /></div></a>
                    <a href="http://"><div className="icon tw"><FaTwitter /></div></a>
                    <a href="http://"><div className="icon ig"><FaInstagram /></div></a>
                    <a href="http://"><div className="icon li"><FaLinkedinIn /></div></a>



                </div>
            </div>
        </div>
    )
}

export default footer