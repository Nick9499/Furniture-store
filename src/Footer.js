import React from 'react'
import logo from './images/logo.svg'
import StarIcon from '@material-ui/icons/Star'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Facebook, Twitter } from '@material-ui/icons'
import './Footer.css'
const Footer = () => {
    return (
        <div style={{ padding: '5%' }}>
            <div className="footer">
                <div className="footer_about">
                    <h4>About Us</h4>
                    <p>Our Company</p>
                    <p>Our Designers</p>
                    <p>Customer Reviews</p>
                    <p>What the process says</p>
                    <p>Careers</p>
                </div>
                <div className="footer_help">
                    <h4>Helps</h4>
                    <p>Tracking your order</p>
                    <p>Help & FAQs</p>
                    <p>Deliveries</p>
                    <p>Returns & Funds</p>
                    <p>Care & Maintainance</p>
                    <p>Buying Guide</p>
                    <p>Furniture Financing</p>
                </div>
                <div className="footer_services">
                    <h4>Furniture Services</h4>
                    <p>Interior Lab</p>
                    <p>Custom Made</p>
                    <p>Care and Maintainance</p>
                </div>
                <div className="footer_icons">
                    <img src={logo} alt="" className="logo" />
                    <div className="stars">
                        <p>
                            <StarIcon style={{ color: '#E6BA66' }} />
                        </p>
                        <p>
                            <StarIcon style={{ color: '#E6BA66' }} />
                        </p>
                        <p>
                            <StarIcon style={{ color: '#E6BA66' }} />
                        </p>
                        <p>
                            <StarIcon style={{ color: '#E6BA66' }} />
                        </p>
                        <p>
                            <StarHalfIcon style={{ color: '#E6BA66' }} />
                        </p>
                    </div>
                    <div className="footer_social">
                        <p>
                            youtube/furniture <YouTubeIcon />
                        </p>
                        <p>
                            instagram/@furniture <InstagramIcon />
                        </p>
                        <p>
                            facebook/furniture
                            <Facebook />
                        </p>
                        <p>
                            twitter/@furniture
                            <Twitter />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
