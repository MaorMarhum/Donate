import React from 'react';
import './Header.css'
import headerImg from '../../assets/header.jpg'

const Header = () => {
    return (
        <div className='donate__header' id='about'>
            <div className="donate__header-content">
                <div className="donate__header-content_text">
                    <h1 className='gradient__text'>We Care About The People in Our Society</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad excepturi atque nobis non officiis perspiciatis perferendis repellat aperiam, veritatis nostrum soluta sapiente voluptates voluptatem dignissimos ex obcaecati, deserunt sequi accusantium.</p>
                </div>
                <div className="donate__header-content_img">
                    <img src={headerImg} alt="header" />
                </div>
            </div>
            <div className="donate__header-button">
                <button type='button'>Be The Change and Sign Up Today</button>
            </div>
        </div>
    );
}

export default Header;
