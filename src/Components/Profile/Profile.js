import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import people from '../images/people.svg';
import badges from '../images/badges.svg';
import settings from '../images/settings.svg';
import request from '../images/request.svg';
import link1 from '../images/link1.svg';
import menu from '../images/menu.svg';
import italic from '../images/italic.svg';
import bold from '../images/bold.svg';
import message from '../images/message.svg';
import profileicon from '../images/profileicon.svg';
import messages from '../images/messages.svg';
import edit from '../images/edit.svg';
import cross from '../images/cross.svg';
import logo from '../images/logo.svg';
import umbrella from '../images/umbrella.svg';
import notifications from '../images/notifications.svg';
import Data from '../HomeComponent/Data.json';
import ProfileHeader from './ProfileHeader';
import insight from '../images/insight.svg';
import author from '../images/authoricon1.svg';
import './Profile.css';

export default function Profile() {

    return (
        <div>
            <ProfileHeader />
            <div style={{ marginLeft: "7.8rem", marginTop: "2rem", marginRight: "8rem" }}>
                <img src={author} style={{ width: "40px" }} /> &nbsp; Ayasha<br />
                <div style={{ display: "flex", padding: "20px" }}>
                    <p style={{ marginRight: "2rem" }}>Summary</p>
                    <p style={{ marginRight: "2rem" }}><img src={insight} style={{ width: "16px", marginRight: "0.3rem" }} /> Activity</p>
                    <p style={{ marginRight: "2rem" }}><img src={notifications} style={{ width: "16px", marginRight: "0.3rem" }} /> Notifications</p>
                    <p style={{ marginRight: "2rem" }}><img src={people} style={{ width: "16px", marginRight: "0.3rem" }} /> People</p>
                    <p style={{ marginRight: "2rem" }}><img src={request} style={{ width: "18px", marginRight: "0.3rem" }} /> Request</p>
                    <p style={{ marginRight: "2rem" }}><img src={messages} style={{ width: "16px", marginRight: "0.3rem" }} /> Messages</p>
                    <p style={{ marginRight: "2rem" }}><img src={badges} style={{ width: "16px", marginRight: "0.3rem" }} /> Badges</p>
                    <p style={{ marginRight: "2rem" }}><img src={settings} style={{ width: "16px", marginRight: "0.3rem" }} /> Settings</p>
                </div>
                <Row>
                    <Col md={3}>
                        <p>Accont</p>
                        <p>Profile</p>
                        <p>Emails</p>
                        <p>Notification<br />
                            <span className="ml-2">Categories</span><br />
                            <span className="ml-2">Tags</span></p>
                        <p>Interface</p>
                    </Col>
                    <Col md={9}>
                        <h4>Account</h4><br />
                        <hr />
                        <label>Username</label>
                        <Form.Control className="forms" placeholder="abcdfgh" />
                        <p style={{ color: "grey", fontSize: "14.5px" }}>people can mention you as @abcdfgh</p>
                        <label>Email Address</label>
                        <Form.Control className="forms" placeholder="sample@sample.com" />
                        <p style={{ color: "grey", fontSize: "14.5px" }}>never shown to the public</p>
                        <p>Profile Picture</p>
                        <img src={profileicon} style={{ width: "10%" }} /><br /><br />
                        <Button size="sm" variant="info3" >Save Changes</Button><br /><br />
                        <h4>Profile</h4><br/>
                        <label>About me</label>
                        <Card>
                            <div className="description_card">
                                <img src={message} style={{ width: "20px" }} />
                                <img src={bold} style={{ width: "12px", marginLeft: "20px" }} />
                                <img src={italic} style={{ width: "12px", marginLeft: "20px" }} />
                                <img src={link1} style={{ width: "20px", marginLeft: "4rem" }} />
                                <img src={menu} style={{ width: "20px", marginLeft: "3rem" }} />
                                <img src={settings} style={{ width: "20px", marginLeft: "5rem" }} />

                            </div>
                        </Card>
                        <Card>
                            <div className="description_card">
                                <p style={{ fontSize: "14.5px" }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled </p>
                            </div>
                        </Card><br />
                        <label>Location</label>
                        <Form.Control className="forms" placeholder="india" /><br />
                        <label>Website</label>
                        <Form.Control className="forms" placeholder="azuresample.com" />
                        <label>Profile Background</label>
                        <Card style={{height:"150px",padding:"10px",backgroundColor:"lightgrey"}}>
                        <div style={{display:"flex"}}>
                        <Card style={{width:"34px",height:"34px"}}><center><img src={edit} style={{width:"20px"}}/></center></Card>
                        <Card style={{marginLeft:"10px",width:"34px",height:"34px"}}><center><img src={cross} style={{width:"18px"}}/></center></Card></div>  
                        </Card><br />
                        <Button size="sm" variant="info3" >Save Changes</Button><br /><br />
                        <label>Emails</label><br/>
                        <hr/>
                        <p>Include previous replies at the bottom of the emails</p>
                            <select id="cars" className="form1 form_text" name="cars" >
                                <option value="choose">Never</option>
                            </select><br/><br/>
                        <h4>Notifications</h4><br/>
                        <hr/>
                        <p>consider topics new when</p>
                        <Form.Control className="forms" placeholder="Never" /><br/>
                        <p>Automatically trap topics | enter</p>
                        <Form.Control className="forms" placeholder="Never" /><br/>
                        <p>When i post in a topic, set that topic to</p>
                        <Form.Control className="forms" placeholder="Never" /><br/>
                        <p>consider topics new when</p>
                        <Form.Control className="forms" placeholder="Tracking" /><br/>
                        <p>Notify when liked<br/> First time a post is liked and daily</p>
                        <Form.Control className="forms" placeholder="never" /><br/>
                        <p>Desktop Notifications<br/> First time a post is liked and daily <Button style={{marginLeft:"20rem"}} variant="danger">Turn on Notifications</Button></p><br/>
                        <p style={{color:"grey",fontSize:"14px"}}>Note: You have to change this setting on every browser you use</p><br/>
                        <label>Blocked Users</label>
                        <Form.Control className="forms" placeholder="Add username here" /><br />
                        <Card style={{width:"500px",displayItems:"flex"}}>
                            <Row>
                            <img src={author} style={{marginLeft:"2rem",width:"40px"}}/>
                            <p style={{marginLeft:"10px",marginTop:"12px"}}>Benjamin</p>
                            <Button size="sm" style={{height:"30px",marginTop:"0.7rem",marginLeft:"17rem"}} variant="warning"> Unblock</Button>
                            </Row>
                        </Card><br/>
                        <Card style={{width:"500px",displayItems:"flex"}}>
                            <Row>
                            <img src={author} style={{marginLeft:"2rem",width:"40px"}}/>
                            <p style={{marginLeft:"10px",marginTop:"12px"}}>Benjamin</p>
                            <Button size="sm" style={{height:"30px",marginTop:"0.7rem",marginLeft:"17rem"}} variant="warning"> Unblock</Button>
                            </Row>
                        </Card><br/>
                        <Card style={{width:"500px",displayItems:"flex"}}>
                            <Row>
                            <img src={author} style={{marginLeft:"2rem",width:"40px"}}/>
                            <p style={{marginLeft:"10px",marginTop:"12px"}}>Benjamin</p>
                            <Button size="sm" style={{height:"30px",marginTop:"0.7rem",marginLeft:"17rem"}} variant="warning"> Unblock</Button>
                            </Row>
                        </Card><br/>
                        <Button size="sm" variant="info3" >Save Changes</Button><br /><br />
                    </Col>
                </Row>
            </div>
            <div className="bottom-footer">
                <img src={logo} style={{ marginTop: "-1rem", marginLeft: "2.5rem" }} />
                
                <p><img src={umbrella}/> &nbsp; Support</p>
                <p>About</p>
                <p>Contact Us</p>
                <p>The Team</p>
            </div>
            <select style={{ float: "right", marginRight: "8rem", marginTop: "-4rem" }} id="cars" className="form_ form_text" name="cars" >
                <option value="choose">Americas - English</option>
            </select>
            <div className="bottom-footer" style={{marginTop:"-0.9rem",marginLeft:"9.5rem"}}>
                <p> &#169; 2020 Greyffiti</p>
                <Link to="/terms" style={{color:"black"}}>
                <p>Terms</p>
                </Link>
                <Link to="/privacypolicy" style={{color:"black"}}>
                <p>Privacy</p>
                </Link>
                <p>Send Feedback</p>
            </div>
        </div>
    )
}