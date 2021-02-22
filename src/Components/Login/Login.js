import React, { Component } from "react";
import { Button, Form, Col, Row, Image } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import login from '../images/login.png';
import { FaLinkedin, FaGooglePlus, FaGithub, FaEllipsisV } from "react-icons/fa";
import logo from '../images/logo1.svg';
import loginbar from '../images/loginbar.svg'
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("username", this.state.username, this.state.password);
        if (this.state.username.length > 0 && this.state.password.length > 3) {
            this.setState({ redirect: true });
            console.log("redirect", this.state.redirect);
            localStorage.setItem('username', JSON.stringify(this.state.username));

        } else {
            alert("Please Enter the Details");
            console.log("Please Enter the Details");
        }
    }

    render() {
        return (
            <div>
                {/* <Row style={{width:"100%",marginTop:"-4.5rem"}}>
          <Col sm={7} >
            <Image src={login} style={{ height: "500px", width: "650px", marginTop: "40px", marginLeft: "80px" }} />
          </Col>
          <Col sm={5}>
            <div className="login">
              <h3 style={{ marginTop: "50px"}}>Login</h3>
              <Form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email" className="form-control" aria-describedby="text"
                    value={this.state.username}
                    name="username"
                    placeholder="Email Address"
                    onChange={this.onChange}
                  />
                </div><br/>
                <div className="form-group">
                  <input type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    placeholder="Password*"
                    onChange={this.onChange}
                  /><br/>
                  <Row>
                      <Col md={6}>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="radio" label="Remember " />
                  </Form.Group>
                      </Col>
                      <Col md={6}>
                          <Link to="/forgotpassword" style={{color:"black"}}>
                          <label className="ml-5">Forgot Password?</label>
                          </Link>
                      </Col>
                  </Row>
                </div>
                <Button
                  variant="primary" size="md" block
                  type="submit"
                  style={{ backgroundColor: "#4fd84f", borderRadius: "15px", color: "white", borderColor: "#4fd84f" }}
                >
                    Login
                </Button><br /><br/>
                <center>
                  <p>Or Login via social networks </p>
                  <span ><FaLinkedin size="25px" className="mr-2"/><FaGooglePlus size="25px" className="mr-2"/><FaGithub size="25px" className="mr-2"/></span><br/><br/>
                  <p>Don't have an account ?<Link to="/register"><b style={{ color: "#4fd84f" }}> Sign Up</b></Link></p>
                </center>
              </Form>
            </div>
          </Col>
        </Row> */}
                <Row style={{ width: "100%" }}>
                    <Col md={6}>
                        <img src={login} style={{ height: "578px", width: "100%" }} />
                        <Link to="/">
                            <div className="logo"><img src={logo} style={{ width: "80%" }} /></div> </Link>
                        <h3 className="heading">Let's Create<br />something<br /> amazing with Us.</h3>
                    </Col>
                    <Col md={6} style={{ marginTop: "2rem" }}>
                        <p style={{ float: "right" }}>New User? <Link to="/register"><span style={{ color: "red" }}>Create an account</span></Link> &nbsp; &nbsp; <FaEllipsisV /></p>
                        <div className="login">
                            <h4>Sign in to Graffiti.</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <>
                                    <Button size="md" variant="info">
                                        Sign in with Google
                                    </Button>
                                    <Button
                                        variant="secondary" size="md">
                                        With Facebook
                                    </Button>
                                </><br />
                                <img src={loginbar} style={{ marginTop: "2rem", width: "50px", height: "10px" }} />
                                <p style={{ color: "grey", marginTop: "0.7rem" }}>Or sign in using email address</p>
                                <Form.Row>
                                    <Col>
                                        <label>Your Email</label>
                                        <Form.Control className="form" placeholder="abc@gmail.com" />
                                    </Col>
                                    <Col>
                                        <label>Password</label>
                                        <Form.Control className="form" type="password" placeholder="......" />
                                    </Col>
                                </Form.Row><br />
                                <Row>
                                    <Col md={3}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={9}>
                                        <Link to="/forgotpassword" style={{ color: "red" }}>
                                            Forgot Password?
                                        </Link>
                                    </Col>
                                </Row>
                                <Button size="md" type="submit" variant="info">   
                                    Sign in
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
