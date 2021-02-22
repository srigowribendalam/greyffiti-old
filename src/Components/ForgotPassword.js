import React, { Component } from "react";
import { Button, Form, Col, Row, Image } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import login from './images/login.png';
import { FaArrowCircleRight,FaEllipsisV } from "react-icons/fa";
import logo from './images/logo1.svg';
import loginbar from './images/loginbar.svg'


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <Row style={{ width: "100%" }}>
                    <Col md={6}>
                        <img src={login} style={{ height: "578px", width: "100%" }} />
                        <Link to="/">
                        <div className="logo"><img src={logo} style={{width:"80%"}}/></div></Link>
                        <h3 className="heading">Let's Create<br/>something<br/> amazing with Us.</h3>
                    </Col>
                    <Col md={6} style={{ marginTop: "2rem" }}>
                        <p style={{ float: "right" }}>New User? <Link to ="/register"><span style={{ color: "red" }}>Create an account</span></Link> &nbsp; &nbsp; <FaEllipsisV /></p>
                        <div className="login">
                            <h4>Forgot Password</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <img src={loginbar} style={{ marginTop: "1.5rem", width: "50px", height: "10px" }} />
                                <Form.Row>
                                    <Col style={{marginTop:"1.5rem"}}>
                                        <Form.Control placeholder="abc@gmail.com" />
                                    </Col>
                                </Form.Row><br/>
                                <center><FaArrowCircleRight size="35px" style={{color:"#2DC8A8"}}/>
                </center>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
