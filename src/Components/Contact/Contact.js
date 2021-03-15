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
                                <input class="form-control" type="text" style={{ borderRadius:"20px",fontSize: "14px",width:"300px", fontFamily: 'Poppins' }}  placeholder="Your Name" value={this.state.name} name="name"
                                    onChange={this.onChange} /><br />
                                <input class="form-control" type="email" style={{ borderRadius:"20px",fontSize: "14px", fontFamily: 'Poppins' }}  placeholder="Email Address" value={this.state.email} name="email"
                                    onChange={this.onChange} /><br />
                                <textarea class="form-control" type="text" rows="3" style={{ borderRadius:"40px",fontSize: "14px", fontFamily: 'Poppins' }} placeholder="Say something..." value={this.state.message} name="message"
                                    onChange={this.onChange} /><br/>
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
                
          <div style={{height:"500px"}}>    
          <img src={curve} style={{width:"500px",height:"500px"}} />
          <img src={circle1} style={{float:"right",marginRight:"5rem",marginTop:"4rem",width:"4%"}}/>
          <div style={{marginTop:"-20rem",marginLeft:"10rem",marginRight:"13rem"}}>
            <Row className="row" >
              <Col md={4} style={{color:"white"}}>
                <div style={{marginLeft:"4rem"}}>
              <h6 style={{marginTop:"2.7rem"}}><b>Contacts</b></h6>
                {/* <img src={phone} style={{marginLeft:"-0.1rem",marginTop:"2rem",width:"20px"}}/> */}
             <div style={{lineHeight:"30px"}}>
                <p>Have questions?<br/>
                E-mail: info@greyffiti.com</p>
                </div>
                </div>
              </Col>
              <Col md={5}>
                <div style={{marginLeft:"5rem"}}>
                <h6><b>Links</b></h6><br/>
                <Row>
                  <Col md={12}>
                <div style={{lineHeight:"12px"}}>
                  <Link to ="/contact" style={{color:"black"}}>
                <p>Contact Us</p></Link>
                <p>FAQ</p>
                <p>Support</p>
                <Link to="/terms" style={{color:"black"}}>
                <p>Terms and conditions</p>
                </Link>
                <Link to="/privacypolicy" style={{color:"black"}}>
                <p>Privacy Policy</p>
                </Link>
                </div>
                  </Col>
                </Row>
                </div>
              </Col>
              <Col md={3}>
                <h6><b>Subscribe</b></h6><br/>
                <input class="form-control" style={{borderRadius:"40px",borderColor:"darkblue",color:"darkblue"}} type="email" placeholder="Enter your email"/><img src={emailicon} style={{marginLeft:"85%",marginTop:"-4.1rem",width:"20px"}}/><br/>
                <p>Keep up to date with all new themes and updates</p>
              </Col>
            </Row>
              <img src={circle2} style={{float:"right",marginRight:"-4rem",width:"4%"}}/>
              <img src={circle3} style={{float:"right",width:"1%",marginRight:"-0.5rem",marginTop:"3rem"}}/>
              <img style={{ width: "8%", height: "5%", marginLeft: "20rem" }} src={bar} />
              <img src={circle4} style={{float:"right",marginTop:"4rem",marginRight:"18rem",width:"8%"}}/>
          </div>
          </div>
            </div>
        );
    };
}

