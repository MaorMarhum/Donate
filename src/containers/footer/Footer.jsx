import React from 'react';
import './Footer.css'

const footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <footer className='donate__footer'>
            <div className="donate__footer-text">
                <h1 className='gradient__text'>Subscribe to Our Newsletter</h1>
            </div>
            <div className="donate__footer-input">
                <input type="email" placeholder='Your Email Address' />
                <button type='button'>Subscribe</button>
            </div>
            <div className="donate__footer-copyright">
                <p>© 2023 Donate. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default footer;
