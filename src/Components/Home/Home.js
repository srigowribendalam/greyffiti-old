import { React } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import landingimage from '../images/landingpage-image.svg';
import work from '../images/work.svg';
import works from '../images/howitworks.svg';
import engage from '../images/engage.svg';
import contact from '../images/contact.svg';
import bar from '../images/bar.svg';
import commonquestions from '../images/commonquestions.svg';
import lookingforsupport from '../images/lookingforsupport.svg';
import readmorearrow from '../images/readmorearrow.svg';
import emailicon from '../images/emailicon.svg';
import curve from '../images/curve.svg';
import phone from '../images/phone.svg';
import circle1 from '../images/circle1.svg';
import circle2 from '../images/circle2.svg';
import circle3 from '../images/circle3.svg';
import circle4 from '../images/circle4.svg';
import footer from '../images/footer.PNG';
import './Home.css';
import { FaRegSquare, FaArrowCircleDown, FaCaretRight } from 'react-icons/fa';
import CardComponent from './CardComponent';
import { Zoom, Slide, Rotate, Fade } from 'react-reveal';


export default function Home() {
  const isBackgroundBlue = true;
  const scrollToBottom = () => {
    window.scrollTo({
      top: 670,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className={isBackgroundBlue ? 'background-blue' : 'background-white'} >
      <NavBar />
      <Row style={{ width: "100%" }}>
        <Col md={4}>
      <Slide left>
          <div className="text-heading">
            <b className="heading-size">Share,<br />Connect,<br />Collabarate</b><br /><br />
            <p className="p-text">Graffiti, Enabling you to put your work, infront of the right people at right time.</p>
          </div>
          </Slide>
        </Col>
        <Col md={8}>
          <Zoom>
          <img className="home-image1" src={landingimage} />
          </Zoom>
        </Col>
      </Row>
       <center className="down-arrow" onClick={scrollToBottom}><FaArrowCircleDown size="40px"/></center>
       <div>
         <CardComponent/></div>
         <div  className="work-together-image">
            <Row className="row" style={{width:"100%"}}>
              <Col md={8} xs={12}>
                <Zoom>
              <img className="work" src={work} />
              </Zoom>
              </Col>
              <Col md={4} xs={12} className="work-together">
                <Rotate top right>
                <h4>Work Together</h4>
                <p style={{color:"rgb(34, 129, 238)",marginTop:"1rem"}}>Like-minded people, are hard to find; but not on Graffiti! Work with people whose work sparks the fire in you!</p><br/>
                <Button variant="default" className="get-started">Get Started</Button>
                </Rotate>
                </Col>
            </Row>
          </div>
          <div className="mt-2">
          <img src={works} style={{width:"100%"}}/>
          <div className="how-it-works">
            <h5><b>Creating the new wave of open source visual engineering</b></h5>
          </div>
          </div>
          <div className="engage">
            <Row style={{width:"100%"}}>
              <Col md={6} className="engage-top">
                <Rotate top left>
                <h4>Engage with your Peers</h4>
                <p style={{color:"rgb(34, 129, 238)",marginTop:"2rem"}}>Stay up to date with your projects <br/>Connect Graphiti with Microsoft Teams, Slack and other collabarative work tools to get notified on your projects</p><br/>
                <Button variant="default" className="get-started">View Prices</Button>
                </Rotate>
                </Col>
                <Col md={6}>
                  <Zoom>
              <img className="engage-image" src={engage} />
              </Zoom>
              </Col>
            </Row>
          </div>
          <div className="four-boxes">
           <Row className="row">
              <Col md={4} xs={12}>
                <Fade top>
                <Card className="box1">
                <h4>The Creator</h4>
                <p className="text-color">A creator must create with passion, and build your profile!</p>
                </Card></Fade><br/>
                <Fade bottom>
                <Card className="box1">
                <h4>The Marketplace</h4>
                <p className="text-color">Develop plug-ins for your favourite software, advertise software, inished design work and monitize!</p>
                </Card></Fade>
              </Col>
              <Col md={4} xs={12}className="mt-4">
                <Fade top>
                <Card className="box1">
                <h4>Collabarator</h4>
                <p className="text-color">Collabarating on Graffiti is real yet virtual. Collabarate with artists from anywhere and everywhere!</p>
                </Card></Fade><br/>
                <Fade bottom>
                <Card className="box1">
                <h4>The Viewer</h4>
                <p className="text-color">See and get inspired, look at the work of professionals and learn from the best!</p>
                </Card></Fade>
              </Col>
              <Col md={4} xs={12} className="platform">
                <h4 style={{color:"#062C51"}}><b>A Social<br/> Collabaration<br/>Platform</b></h4>
              </Col>
            </Row>
          </div>
          <div>
          <img className="contact-image" src={contact} />
          <div className="contact1">
            <div style={{display:"flex"}}><h5>Make work more fun together with Graffiti!</h5> <Button variant="default" style={{marginLeft:"3rem"}}>Learn more</Button></div>
          </div>
          </div>
          <div  className="work-together-image">
            <Row className="row" style={{width:"100%"}}>
              <Col md={8} xs={12}>
                <Zoom>
              <img className="work" src={work} />
              </Zoom>
              </Col>
              <Col md={4} xs={12} className="work-together">
                <Rotate top right>
                <h4>Work Together</h4>
                <p style={{color:"rgb(34, 129, 238)",marginTop:"1rem"}}>Like-minded people, are hard to find; but not on Graffiti! Work with people whose work sparks the fire in you!</p><br/>
                <Button variant="default">Get Started</Button>
                </Rotate>
                </Col>
            </Row>
            <center>
            <Button style={{marginTop:"-2rem"}} variant="default">Download</Button>
            </center>   
          </div>
          <div className="common-questions">
            <Row style={{width:"100%"}}>
              <Col md={6} className="mt-2">
             <h5><img src={commonquestions} style={{width:"40px"}} />  &nbsp;View common questions</h5>
              <p style={{marginTop:"1rem"}}>From signup till prices every queries, answered at one place</p><br/>
              <Link style={{color:"#062C51"}}>Read More  &nbsp;&nbsp;<img src={readmorearrow} /></Link>
              </Col>
              <Col md={6} className="mt-2">
              <h5><img src={lookingforsupport} style={{width:"40px"}} /> &nbsp;Looking for support?</h5>
                <p style={{marginTop:"1rem"}}>24 x 7 support for any problem that you encounter</p><br/>
                <Link style={{color:"#062C51"}}>Read More  &nbsp;&nbsp;<img src={readmorearrow} /></Link>
                </Col>
            </Row>
          </div>
          <div style={{height:"500px",backgroundColor:"#dff6fc"}}>    
          <img src={curve} style={{width:"500px",height:"500px"}} />
          <img src={circle1} style={{float:"right",marginRight:"5rem",marginTop:"4rem",width:"4%"}}/>
          <div style={{marginTop:"-20rem",marginLeft:"10rem",marginRight:"13rem"}}>
            <Row className="row" >
              <Col md={4} style={{color:"white"}}>
                <div style={{marginLeft:"4rem"}}>
              <h6><b>Contacts</b></h6>
                <img src={phone} style={{marginLeft:"-0.1rem",marginTop:"2rem",width:"20px"}}/>
                <div style={{marginLeft:"2rem",marginTop:"-2rem"}}>
                <p>Have questions?</p>
                <h6 style={{marginTop:"-1rem"}}><b>+919966908431</b></h6>
                </div>
                <p>E-mail: info@graffiti.com</p>
                </div>
              </Col>
              <Col md={5}>
                <div style={{marginLeft:"2rem"}}>
                <h6><b>Links</b></h6><br/>
                <Row>
                  <Col md={8}>
                <div style={{lineHeight:"12px"}}>
                <p>About company</p>
                <Link to="/terms" style={{color:"black"}}>
                <p>Terms and conditions</p>
                </Link>
                <Link to="/privacypolicy" style={{color:"black"}}>
                <p>Privacy Policy</p>
                </Link>
                </div>
                  </Col>
                  <Col md={4}>
                <div style={{lineHeight:"12px",marginLeft:"-2rem"}}>
                  <Link to="/pricing" style={{color:"black"}}>
                <p>Pricing plans</p>
                </Link>
                <p>Contact</p>
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
