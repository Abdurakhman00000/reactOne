import people1 from '../image/people1.svg'
import people2 from '../image/people2.svg'
import people3 from '../image/people3.svg'
import people4 from '../image/people4.svg'
import social from '../image/social-media.png'
import React from 'react';

const Team = () => {
    return (
        <div>
            <div id="team">
                <div className="container">
                    <div className="team">
                    <div className="team-text">
                    <h1>Met Our Team</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br /> accumsan nisi Ut ut felis congue nisl hendrerit commodo</p>
                    </div>


                    <div className="main-people">

                    <div className="people">
                            <img className='img' src={people1} alt="" />
                            <h2>Sunny Khan</h2>
                            <h3>Executive officer</h3>
                            <img src={social} alt="" />
                        </div>

                        <div className="people">
                            <img className='img' src={people2} alt="" />
                            <h2>Alina Jesia</h2>
                            <h3>UX/UI DESIGNER</h3>
                            <img src={social} alt="" />
                        </div>

                        <div className="people">
                            <img className='img' src={people3} alt="" />
                            <h2>Alex Sohag</h2>
                            <h3>BUSINESS DEVELOPMENT</h3>
                            <img src={social} alt="" />
                        </div>

                        <div className="people">
                            <img className='img' src={people4} alt="" />
                            <h2>Afroza Mou</h2>
                            <h3>Head of marketing</h3>
                            <img src={social} alt="" />
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;