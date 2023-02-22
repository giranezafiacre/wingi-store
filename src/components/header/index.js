import React from 'react';
import './header.css';

const Header = () => {

    return (
        <div className='header'>
            <a className='cart' href="/checkout">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="padding_10">Cart</span>
            </a>
            <a href='/admin' className='btn d-flex login-header'>
                <span>Login</span>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 89.63 122.88"><title>log-in</title><path d="M33.27,68.66H7.15a7.23,
                    7.23,0,0,1,0-14.45H33.27l-8.48-9.46a7.25,7.25,0,0,1,.5-10.16,7.07,7.07,0,0,1,
                    10.06.5L54.62,56.61a7.25,7.25,0,0,1-.06,9.72L35.35,87.78a7.07,7.07,0,0,1-10.06.5,
                    7.25,7.25,0,0,1-.5-10.16l8.48-9.46Zm16.25,54.08a7.22,7.22,0,1,
                    1-2.83-14.17l3.39-.67c16.33-3.24,25.1-5.09,25.1-27.69V40.63c0-21-9.34-22.76-24.8-25.65l-3.63-.68A7.21,
                    7.21,0,1,1,49.46.13L53,.81c22.82,4.26,36.6,6.84,36.6,
                    39.82V80.21c0,34.43-12.84,37.11-36.74,41.85l-3.37.68Z"/>
                </svg>
            </a>
        </div>
    )
}
export default Header;