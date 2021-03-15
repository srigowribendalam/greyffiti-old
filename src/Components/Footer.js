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


export default function Footer() {
    return(
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
    )
}