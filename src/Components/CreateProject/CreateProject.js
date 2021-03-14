import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import link1 from '../images/link1.svg';
import menu from '../images/menu.svg';
import settings from '../images/settings.svg';
import italic from '../images/italic.svg';
import bold from '../images/bold.svg';
import message from '../images/message.svg';
import createproject from '../images/createproject.svg';
import Data from '../HomeComponent/Data.json';
import CreateHeader from './CreateHeader';
import logo from '../images/logo.svg';
import umbrella from '../images/umbrella.svg';
import './CreateProject.css';

export default function CreateProject() {

    return (
        <div>
            <CreateHeader />
            <div style={{ marginLeft: "7.8rem", marginTop: "2rem", marginRight: "8rem" }}>

                <img src={createproject} style={{ width: "20px", height: "20px" }} /> &nbsp;Create Project<br /><br />
                <label>Your Email</label>
                <Form.Control className="form1" placeholder="abc@gmail.com" />
                <hr />
                <Form.Row>
                    <Col>
                        <form>
                            <label for="cars">Select Category</label><br />
                            <select id="cars" className="form1 form_text" name="cars" >
                                <option value="choose">Choose</option>
                                <option value="saab">Illustration Drawing</option>
                                <option value="fiat">Orthographic Drawing</option>
                                <option value="audi">Dimensioning</option>
                                <option value="saab">Sectioning</option>
                                <option value="fiat">Assembly Drawings</option>
                                <option value="audi">Cross-Sectional Views</option>
                            </select>
                        </form>
                    </Col>
                    <Col>
                        <form>
                            <label for="cars">Select Sub-Category</label><br />
                            <select id="cars" className="form1 form_text" name="cars" >
                                <option value="choose" >Choose</option>
                                <option value="saab">Illustration Drawing</option>
                                <option value="fiat">Orthographic Drawing</option>
                                <option value="audi">Dimensioning</option>
                                <option value="saab">Sectioning</option>
                                <option value="fiat">Assembly Drawings</option>
                                <option value="audi">Cross-Sectional Views</option>
                            </select>
                        </form>
                    </Col>
                </Form.Row><br />
                <label>Description</label>
                <Card>
                    <div className="description_card">
                        <img src={message} style={{ width: "20px" }} />
                        <img src={bold} style={{ width: "12px", marginLeft: "20px" }} />
                        <img src={italic} style={{ width: "12px", marginLeft: "20px" }} />
                        <img src={link1} style={{ width: "20px", marginLeft: "4rem" }} />
                        <img src={menu} style={{ width: "20px", marginLeft: "3rem" }} />
                        <img src={settings} style={{ width: "20px", marginLeft: "5rem" }} />
                        <Button size="sm" variant="default2" >Preview</Button>
                    </div>
                </Card>
                <Card>
                    <div className="description_card">
                        <p style={{ fontSize: "14.5px" }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>
                </Card><br />
                <Form.Row>
                    <Col md={6}>
                        <label>Add Tags</label>
                        <Form.Control className="form_Control" placeholder="e.g. nature, science" /><br />
                        <Row>
                            <Col md={6}>
                                <p>Who can see this?</p>
                                <div style={{ display: "flex" }}>
                                    <Form.Check type="checkbox" label="Everyone" />
                            &nbsp; &nbsp; &nbsp;<Form.Check type="checkbox" label="Only Friends" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{ marginLeft: "3rem" }}>
                                    <label for="cars">Add Contributor</label><br />
                                    <select id="cars" className="form_ form_text" name="cars" >
                                        <option value="choose">Choose</option>
                                        <option value="saab">Anna</option>
                                        <option value="fiat">Anna</option>
                                        <option value="audi">see more..</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Form.Row>
                <Button size="md" variant="info2" >Create Project</Button>
                <Button size="md" variant="default2" className="mr-2">Cancel</Button>  <br />
                <hr />
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