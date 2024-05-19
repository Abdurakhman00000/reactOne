import box1 from '../image/box1.png'
import box2 from '../image/box2.png'
import box3 from '../image/box3.png'
import box4 from '../image/box4.png'
import box5 from '../image/box5.png'
import box6 from '../image/box6.png'
import right from '../image/Right.png'
import React from 'react';

const Block1 = () => {
    return (
        <div>
            <div id="block1">
                <div className="container">
                    <div className="block1">
                        <h1>Our Service</h1>
                        <p>We turn information into actionable insights We work to understand your issues </p>
                        <p>and are driven to ask better questions in the pursuit of making work.</p>


                        <div className="main-block">

                            <div className="box1">
                                <img src={box1} alt="" />
                                <h2>Order Management</h2>
                                <div className="box-p">
                                    <span>Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl hendrerit commodo.</span>
                                </div>
                                <div className="box-btn">
                                    <button>Learn More</button>
                                    <img src={right} alt="" />
                                </div>
                            </div>


                            <div className="box2">
                                <img src={box2} alt="" />
                                <h2>Social Assistant</h2>
                                <div className="box-p">
                                    <span>Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl hendrerit commodo.</span>
                                </div>
                                <div className="box-btn">
                                    <button>Learn More</button>
                                    <img src={right} alt="" />
                                </div>
                            </div>


                            <div className="box3">
                                <img src={box3} alt="" />
                                <h2>Crypto Platform</h2>
                                <div className="box-p">
                                    <span>Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl hendrerit commodo.</span>
                                </div>
                                <div className="box-btn">
                                    <button>Learn More</button>
                                    <img src={right} alt="" />
                                </div>
                            </div>
                        </div>



                        <div className="main-block2">

                            <div className="box4">
                                <img src={box4} alt="" />
                                <h2>Smart Trading Modules</h2>
                                <div className="box-p">
                                    <span>Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl hendrerit commodo.</span>
                                </div>
                                <div className="box-btn">
                                    <button>Learn More</button>
                                    <img src={right} alt="" />
                                </div>
                            </div>


                            <div className="box5">
                                <img src={box5} alt="" />
                                <h2>Analyzer of the News</h2>
                                <div className="box-p">
                                    <span>Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl hendrerit commodo.</span>
                                </div>
                                <div className="box-btn">
                                    <button>Learn More</button>
                                    <img src={right} alt="" />
                                </div>
                            </div>


                            <div className="box6">
                                <img src={box6} alt="" />
                                <h2>Module of Price Notification</h2>
                                <div className="box-p">
                                    <span>Lorem ipsum dolor sit amet, consectetur <br /> the adipiscing elit. Sed quis accumsan nisi <br /> Ut ut felis congue nisl hendrerit commodo.</span>
                                </div>
                                <div className="box-btn">
                                    <button>Learn More</button>
                                    <img src={right} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block1;