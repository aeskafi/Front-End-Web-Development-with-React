import React from 'react';
import {Link} from 'react-router-dom';

function Footer ( props ) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <Link to="mailto:confusion@food.net">
                                confusion@food.net</Link>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <Link className="btn btn-social-icon btn-google" to="http://google.com/+"><i className="fa fa-google-plus"></i></Link>
                            <Link className="btn btn-social-icon btn-facebook" to="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></Link>
                            <Link className="btn btn-social-icon btn-linkedin" to="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></Link>
                            <Link className="btn btn-social-icon btn-twitter" to="http://twitter.com/"><i className="fa fa-twitter"></i></Link>
                            <Link className="btn btn-social-icon btn-google" to="http://youtube.com/"><i className="fa fa-youtube"></i></Link>
                            <Link className="btn btn-social-icon" to="mailto:"><i className="fa fa-envelope-o"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;