import sectionImg from '../image/Saly-19.png'
import sectionText from '../image/Virtual Reality Business Solutions.png'
import sectionWatch from '../image/Vector (1).png'
import React from 'react';

const Section = () => {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="section-text">
                        
                        <div className="text-h1">
                            <img src={sectionText} alt="" />
                        </div>

                        <div className="text-p">
                            <p>We have over 15 year exprience in business consultting arena. We have over</p>
                            <p>15 year exprience in business consultting arena and artficial intelligence.</p>
                        </div>

                        <div className="text-btns">
                            <button className='btn1'>Join Us</button>
                            <div className="btn-comp">
                                <img src={sectionWatch} alt="" />
                            <button className='btn2'>Watch Video</button>
                            </div>
                        </div>
                    </div>

                    <div className="section-img">
                        <img src={sectionImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;