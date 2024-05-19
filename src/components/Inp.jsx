import telegram from '../image/telegram.png'
import React from 'react';

const Inp = () => {
    return (
        <div>
            <div className="container">
                <div className="subs">
                <h1>Subscribe to get the Latest News</h1>
                <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                <input type="text" placeholder='Enter your email addres'  />
                <button><img className='telega' src={telegram} alt="" />Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Inp;