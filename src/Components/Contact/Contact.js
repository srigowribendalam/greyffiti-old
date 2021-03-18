import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import contact from '../images/Contact-page.svg';
import './Contact.css';
import NavBar from '../NavBar';
import bar from '../images/bar.svg';
import emailicon from '../images/emailicon.svg';
import curve from '../images/curve.svg';
import circle1 from '../images/circle1.svg';
import circle2 from '../images/circle2.svg';
import circle3 from '../images/circle3.svg';
import circle4 from '../images/circle4.svg';
import Footer from '../Footer';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            alert("Submitted Successfully!");
            console.log("Submitted Successfully!");
        } else {
            alert("Please Enter the Details");
            console.log("Please Enter the Details");
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <Row className="row-top">
                    <Col md={5}>
                        <h2 className="contactus-top">CONTACT</h2>
                        <div className="form-text">
                            <Form onSubmit={this.handleSubmit}>
                                <input class="form-control" type="text" style={{ borderRadius:"20px",width:"300px",fontSize: "14px", fontFamily: 'Poppins' }}  placeholder="Your Name" value={this.state.name} name="name"
                                    onChange={this.onChange} /><br />
                                <input class="form-control" type="email" style={{ borderRadius:"20px",fontSize: "14px", fontFamily: 'Poppins' }}  placeholder="Email Address" value={this.state.email} name="email"
                                    onChange={this.onChange} /><br />
                                <textarea class="form-control" type="text" rows="3" style={{ borderRadius:"20px",fontSize: "14px", fontFamily: 'Poppins' }} placeholder="Say something..." value={this.state.message} name="message"
                                    onChange={this.onChange} /><br/>
                                <center>
                                    <Button variant="default" className="contact-button mr-4"><b>Send</b></Button>
                                </center><br /><br />
                            </Form>
                        </div>
                    </Col>
                    <Col md={7} className="image">
                        <img src={contact} style={{width:"100%"}}/>
                    </Col>
                </Row>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    };
}

