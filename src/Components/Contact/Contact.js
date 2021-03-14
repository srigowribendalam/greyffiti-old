import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import contact from '../images/landingpage-image.svg';
import './Contact.css';
import NavBar from '../NavBar';


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
                <Row style={{width:"100%"}} >
                    <Col md={5}>
                        <h2 style={{marginLeft:"10rem",marginTop:"5rem"}}>CONTACT</h2>
                        <div className="form-text">
                            <Form onSubmit={this.handleSubmit}>
                                <input type="text" style={{ fontSize: "14px", fontFamily: 'Poppins' }} className="input" placeholder="Your Name" value={this.state.name} name="name"
                                    onChange={this.onChange} /><br />
                                <input type="email" style={{ fontSize: "14px", fontFamily: 'Poppins' }} className="input" placeholder="Email Address" value={this.state.email} name="email"
                                    onChange={this.onChange} /><br />
                                <textarea type="text" className="text-area" style={{ fontSize: "14px", fontFamily: 'Poppins' }} placeholder="Say something..." value={this.state.message} name="message"
                                    onChange={this.onChange} />
                                <center>
                                    <Button variant="default" className="contact-button mr-4"><b>Send</b></Button>
                                </center><br /><br />
                            </Form>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img src={contact} style={{width:"100%"}}/>
                    </Col>
                </Row>
            </div>
        );
    };
}

