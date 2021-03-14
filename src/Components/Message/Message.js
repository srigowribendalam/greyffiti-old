import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import createproject from '../images/createproject.svg';
import Data from '../HomeComponent/Data.json';
import BadgesHeader from '../Badges/BadgesHeader';
import '../CreateProject/CreateProject.css';
import people from '../images/people.svg';
import repost from '../images/repost.svg';
import badges from '../images/badges.svg';
import uicon from '../images/uicon.svg';
import aicon from '../images/aicon.svg';
import settings from '../images/settings.svg';
import request from '../images/request.svg';
import link1 from '../images/link1.svg';
import menu from '../images/menu.svg';
import italic from '../images/italic.svg';
import bold from '../images/bold.svg';
import message from '../images/message.svg';
import share from '../images/share.svg';
import messages from '../images/messages.svg';
import edit from '../images/edit.svg';
import cross from '../images/cross.svg';
import logo from '../images/logo.svg';
import umbrella from '../images/umbrella.svg';
import notifications from '../images/notifications.svg';
import insight from '../images/insight.svg';
import author from '../images/authoricon1.svg';

export default function Message() {

    return (
        <div>
            <BadgesHeader />
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
                <h6><Button variant="warning" style={{color:"white"}}><b className="ml-4">Compose</b></Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Get your username drawn by the other users of unity</h6>
                <Row>
                    <Col md={3}>
                        <p>Inbox(2)</p>
                        <p>Sent</p>
                        <p>Trash</p>
                        <p>Archieved</p>
                        <p>Spam</p>
                    </Col>
                    <Col md={9}>
                    <div><img src={aicon} style={{ width: "5%" }} /> &nbsp; &nbsp; sdfgfvg<span style={{float:"right"}}> 06 Jan 2020</span></div>
                    <p style={{marginLeft:"3.8rem",marginBottom:"10rem"}}>Lorem ipsum, or lipsum as it is sometimes known</p>
                    <p style={{float:"right"}}><img src={link1} style={{ width: "20px", marginLeft: "2rem" }} /><img src={edit} style={{ width: "20px", marginLeft: "2rem" }} /><img src={repost} style={{ width: "20px", marginLeft: "4rem" }} /></p><br/><br/>
                    <div style={{ display: "flex", padding: "20px" }}>
                    <p style={{ marginRight: "2rem" }}>Created</p>
                    <p style={{ marginRight: "2rem" }}>Last Reply</p>
                    <p style={{ marginRight: "2rem" }}>Replies</p>
                    <p style={{ marginRight: "2rem" }}>Views</p>
                    <p style={{ marginRight: "2rem" }}>Users</p>
                </div>
                <div style={{ marginTop:"-1rem",display: "flex", padding: "1px" }}>
                    <p style={{ marginRight: "2rem",marginLeft:"1rem" }}><img src={aicon} style={{ width: "30px", marginRight: "0.3rem" }} /> 13d</p>
                    <p style={{ marginRight: "3rem" }}><img src={uicon} style={{ width: "30px", marginRight: "0.3rem" }} /> 4h</p>
                    <p style={{ marginRight: "5rem" }}> 3</p>
                    <p style={{ marginRight: "4rem" }}>4</p>
                    <p style={{ marginRight: "3rem" }}>2</p>
                    </div><br/>
                    <hr style={{marginTop:"-1rem"}}/>
                    <img src={message} style={{ width: "18px" }} /> &nbsp;Message<br/><br/>
                    <img src={aicon} style={{ width: "30px" }} /> &nbsp; Ayasha<br /><br/><br/>
                    <div><img src={uicon} style={{ width: "30px" }} /> &nbsp; &nbsp; Greyffiti<span style={{float:"right"}}> 06 Jan 2020</span></div>
                    <p style={{marginLeft:"2.8rem",marginBottom:"4rem"}}>Lorem ipsum, or lipsum as it is sometimes known</p>
                    <hr/>
                    <p style={{float:"right"}}><img src={link1} style={{ width: "20px", marginLeft: "2rem" }} /><img src={edit} style={{ width: "20px", marginLeft: "2rem" }} /><img src={repost} style={{ width: "20px", marginLeft: "4rem" }} /></p><br/><br/>
                    <div className="mt-5"><img src={aicon} style={{ width: "30px" }} /> &nbsp; &nbsp; Greyffiti<span style={{float:"right"}}> 06 Jan 2020</span></div>
                    <p style={{marginLeft:"2.8rem",marginBottom:"4rem"}}>Lorem ipsum, or lipsum as it is sometimes known</p>
                    <hr/>
                    <p style={{float:"right"}}><img src={link1} style={{ width: "20px", marginLeft: "2rem" }} /><img src={edit} style={{ width: "20px", marginLeft: "2rem" }} /><img src={repost} style={{ width: "20px", marginLeft: "4rem" }} /></p><br/><br/>
                    <div className="mt-5"><img src={uicon} style={{ width: "30px" }} /> &nbsp; &nbsp; Greyffiti<span style={{float:"right"}}> 06 Jan 2020</span></div>
                    <p style={{marginLeft:"2.8rem",marginBottom:"4rem"}}>Lorem ipsum, or lipsum as it is sometimes known</p>
                    <hr/>
                    <p style={{float:"right"}}><img src={link1} style={{ width: "20px", marginLeft: "2rem" }} /><img src={edit} style={{ width: "20px", marginLeft: "2rem" }} /><img src={repost} style={{ width: "20px", marginLeft: "4rem" }} /></p><br/><br/>
                    <div>
                    <Button variant="secondary1">Invite others</Button><Button variant="secondary1">Archieve</Button><Button variant="secondary1">Track</Button><Button className="ml-3"style={{width:"5rem"}} size="md" variant="info">Reply</Button>
                    </div><br/>
                    <img src={share} style={{ width: "20px", marginLeft: "0.5rem" }} /> <img src={uicon} style={{ width: "30px", marginLeft: "0.5rem" }} /> &nbsp; Greyffiti<br/><br/>
                        <label>Description</label>
                        <Card>
                            <div className="description_card">
                                <img src={message} style={{ width: "20px" }} />
                                <img src={bold} style={{ width: "12px", marginLeft: "20px" }} />
                                <img src={italic} style={{ width: "12px", marginLeft: "20px" }} />
                                <img src={link1} style={{ width: "20px", marginLeft: "4rem" }} />
                                <img src={menu} style={{ width: "20px", marginLeft: "3rem" }} />
                                <img src={settings} style={{ width: "20px", marginLeft: "5rem" }} />
                                <Button variant="warning" style={{color:"white",float:"right"}}>Preview</Button>
                            </div>
                        </Card>
                        <Card style={{height:"12rem"}}>
                            <div className="description_card">
                                <p style={{ fontSize: "14.5px" }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                        graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled </p>
                            </div>
                        </Card><br />
                        <div style={{float:"right",marginBottom:"3rem"}}>
                <Button variant="secondary1">Cancel</Button><Button className="ml-3"style={{width:"5rem"}} size="md" variant="info">Reply</Button>
                    </div><br/>
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