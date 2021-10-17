import React from 'react';
import './Footer.css'
import fImg from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className = 'footer pt-5'>
            <div className="row">
                <div className="col-md-6 text-start ps-5">
                    <img className = 'footer-logo' src={fImg} alt="" />
                </div>
                <div className="col-md-3">
                    <p>About online food</p>
                    <p>Read our blog</p>
                    <p>Signup to delivery</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-md-3">
                    <p>Get help</p>
                    <p>Read FAQ's</p>
                    <p>View all cities</p>
                    <p>Restaurant near me</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-start ps-5">
                    <p className = 'text-secondary'>Copyright &copy; 2021 Online Food</p>
                </div>
                <div className="col-md-6 footer-policy">
                    <p>Private Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;