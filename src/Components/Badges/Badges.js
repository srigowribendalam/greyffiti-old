import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import notifications from '../images/notifications.svg';
import insight from '../images/insight.svg';
import settings from '../images/settings.svg';
import people from '../images/people.svg';
import request from '../images/request.svg';
import messages from '../images/messages.svg';
import badges from '../images/badges.svg';
import Data from '../HomeComponent/Data.json';
import author from '../images/authoricon1.svg';
import BadgesHeader from './BadgesHeader';
import logo from '../images/logo.svg';
import newbie from '../images/Newbie.svg';
import intermediate from '../images/intermediate.svg';
import advanced from '../images/advanced.svg';
import letstalk from '../images/letstalk.svg';
import greatthread from '../images/greatthread.svg';
import umbrella from '../images/umbrella.svg';
import './Badges.css';

export default function Badges() {

    return (
        <div>
            <BadgesHeader />
            <div style={{ marginLeft: "7.8rem", marginTop: "2rem", marginRight: "8rem" }}>
                <img src={author} style={{ width: "40px" }} /> &nbsp; Ayasha<br />
                <div style={{ display: "flex", padding: "20px" }}>
                    <li ><a href="#sdfg" style={{ marginRight: "2rem" }}>Summary</a></li>
                    <p style={{ marginRight: "2rem" }}><img src={insight} style={{ width: "16px", marginRight: "0.3rem" }} /> Activity</p>
                    <p style={{ marginRight: "2rem" }}><img src={notifications} style={{ width: "16px", marginRight: "0.3rem" }} /> Notifications</p>
                    <p style={{ marginRight: "2rem" }}><img src={people} style={{ width: "16px", marginRight: "0.3rem" }} /> People</p>
                    <p style={{ marginRight: "2rem" }}><img src={request} style={{ width: "18px", marginRight: "0.3rem" }} /> Request</p>
                    <p style={{ marginRight: "2rem" }}><img src={messages} style={{ width: "16px", marginRight: "0.3rem" }} /> Messages</p>
                    <p style={{ marginRight: "2rem" }}><img src={badges} style={{ width: "16px", marginRight: "0.3rem" }} /> Badges</p>
                    <p style={{ marginRight: "2rem" }}><img src={settings} style={{ width: "16px", marginRight: "0.3rem" }} /> Settings</p>

                </div>
                <hr style={{ marginTop: "-1rem" }} /><br/>
                <Row>
                    <Col md={3}>
                        <center>
                            <img src={newbie} style={{width:"40%"}}/>
                            <hr/>
                            <h6>Newbie</h6>
                            <p style={{ color: "grey", fontSize: "13px" }}>Sign up as a new user</p>
                        </center><br/>
                        <center>
                            <img src={greatthread} style={{width:"40%"}}/>
                            <hr/>
                            <h6>Great Thread</h6>
                            <p style={{ color: "grey", fontSize: "13px" }}>Create a popular thread</p>
                        </center>
                    </Col>
                    <Col md={3}>
                        <center>
                            <img src={intermediate} style={{width:"40%"}}/>
                            <hr/>
                            <h6>Intermediate</h6>
                            <p style={{ color: "grey", fontSize: "13px" }}>Be a medium level user</p>
                        </center>
                    </Col>
                    <Col md={3}>
                        <center>
                            <img src={advanced} style={{width:"40%"}}/>
                            <hr/>
                            <h6>Advanced</h6>
                            <p style={{ color: "grey", fontSize: "13px" }}>Be an advanced user</p>
                        </center>
                    </Col>
                    <Col md={3}>
                        <center>
                            <img src={letstalk} style={{width:"40%"}}/>
                            <hr/>
                            <h6>Lets Talk</h6>
                            <p style={{ color: "grey", fontSize: "13px" }}>Message 5 users</p>
                        </center>
                    </Col>
                </Row><br/>
                {/* <Row>
                    <Col md={3}>
                        <center>
                            <img src={greatthread} style={{width:"40%"}}/>
                            <hr/>
                            <h6>Great Thread</h6>
                            <p style={{ color: "grey", fontSize: "13px" }}>Create a popular thread</p>
                        </center>
                    </Col>
                    </Row> */}
                <div className="bottom-footer">
                    <img src={logo} style={{ marginTop: "-1rem", marginLeft: "2.5rem" }} />

                    <p><img src={umbrella} /> &nbsp; Support</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>The Team</p>
                </div>
                <select style={{ float: "right", marginRight: "8rem", marginTop: "-4rem" }} id="cars" className="form_ form_text" name="cars" >
                    <option value="choose">Americas - English</option>
                </select>
                <div className="bottom-footer" style={{ marginTop: "-0.9rem", marginLeft: "9.5rem" }}>
                    <p> &#169; 2020 Greyffiti</p>
                    <Link to="/terms" style={{ color: "black" }}>
                        <p>Terms</p>
                    </Link>
                    <Link to="/privacypolicy" style={{ color: "black" }}>
                        <p>Privacy</p>
                    </Link>
                    <p>Send Feedback</p>
                </div>
            </div>
        </div>
    )
}