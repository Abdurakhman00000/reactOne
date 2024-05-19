import dron from '../image/dron.png'
import point from '../image/point.png'
import phone from '../image/phone.png'
import message from '../image/Message.png'
import social from '../image/social-media.png'
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="box">
                        <div className="footer-logo">
                            <img src={dron} alt="" />
                            <p>Zone.</p>
                        </div>
                        <ul>
                            <li><img src={point} alt="" />Dhaka, Bangladesh</li>
                            <li><img src={phone} alt="" />0943833399</li>
                            <li><img src={message} alt="" />support@zone.com</li>
                        </ul>
                        <img src={social} alt="" />
                        </div>


                        <div className="box">
                            <h3>Service</h3>

                            <ul>
                                <li>Order Management</li>
                                <li>Social Assistend</li>
                                <li>Crypto Platform</li>
                                <li>Analyzer of the News</li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>Company</h3>

                            <ul>
                                <li>About Us</li>
                                <li>News</li>
                                <li>Our Trusted Parther</li>
                                <li>New users FAQ</li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>Support</h3>

                            <ul>
                                <li>Help center</li>
                                <li>Feedback</li>
                                <li>Contact us</li>
                                <li>Terms conditins</li>
                            </ul>
                        </div>

                        <div className="box">
                            <h3>Resoursec</h3>

                            <ul>
                                <li>Download app</li>
                                <li>Blog</li>
                                <li>What's new</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>


                    <div className="un_footer">
                        <div className="un-span">
                            <span>2021 Zone. - All rights reserved.</span>
                        </div>

                        <div className="navos">
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Terms</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;