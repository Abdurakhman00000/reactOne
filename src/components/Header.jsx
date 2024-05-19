import logoImg from '../image/dron.png'
import React from 'react';

const Header = () => {
    return (
        <div>
            <header id='header'>
                <div className="container">
                    <div className="header">

                        <div className="header-logo">
                            <img src={logoImg} alt="" />
                            <p>Zone.</p>
                        </div>

                        <div className="nav-links">
                            <h4>Home</h4>
                            <h4>About Us</h4>
                            <h4>Service</h4>
                            <h4>Pricing</h4>
                            <h4>Blog</h4>
                            <button>Contact us</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;