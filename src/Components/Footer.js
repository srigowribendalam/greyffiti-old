import { React } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import bar from './images/bar.svg';
import emailicon from './images/emailicon.svg';
import curve from './images/curve.svg';
import circle1 from './images/circle1.svg';
import circle2 from './images/circle2.svg';
import circle3 from './images/circle3.svg';
import circle4 from './images/circle4.svg';
import './Footer.css';


export default function Footer() {
    return (
        <div className="footer-top">
            <img src={curve} className="curve" />
            <img src={circle1} className="circle1" />
            <div className="footer">
                <Row className="row" >
                    <Col md={4} style={{ color: "white" }}>
                        <div className="m-left footer-links">
                            <h6 className="contact-Top"><b>Contacts</b></h6>

                            <div className="line-Height">
                                <p>Have questions?<br />
      E-mail: info@greyffiti.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="links-left footer-links">
                            <h6><b>Links</b></h6><br />
                            <Row>
                                <Col md={12}>
                                    <div className="links-line-height">
                                        <Link to="/contact" style={{ color: "black" }}>
                                            <p>Contact Us</p></Link>
                                        <p>FAQ</p>
                                        <p>Support</p>
                                        <Link to="/terms" style={{ color: "black" }}>
                                            <p>Terms and conditions</p>
                                        </Link>
                                        <Link to="/privacypolicy" style={{ color: "black" }}>
                                            <p>Privacy Policy</p>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="subscribe footer-links">
                            <h6><b>Subscribe</b></h6><br />
                            <input className="form-control email-box" type="email" placeholder="Enter your email" /><img src={emailicon} className="emailicon" /><br />
                            <p>Keep up to date with all new themes and updates</p>
                        </div>
                    </Col>
                </Row>
                <img src={circle2} className="circle2" />
                <img src={circle3} className="circle3" />
                <img src={bar} className="bar" />
                <img src={circle4} className="circle4" />
            </div>
        </div>
    )
}