import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from "react-bootstrap";
import './Pricing.css';
import progressbar from '../images/progressbar.svg';
import { FaRegSquare } from 'react-icons/fa';
import { Zoom, Slide } from 'react-reveal';
import collaborate from '../images/collaborate.svg';
import workanywhere from '../images/workanywhere.svg';
import engageicon from '../images/engageicon.svg';
import NavBar from '../NavBar';

export default function Pricing() {
  return (
      <div>
          <NavBar />
    <div className="basic-card">
    <Row className="row">
      <Col md={4} xs={12}>
        <Card className="_card">
        <span><h5>Teams</h5><Button variant="default1" style={{float:"right",marginTop:"-2rem",fontSize:"12px"}}><b>BEST CHOICE</b></Button></span>
        <img style={{width:"15%",height:"15%",marginBottom:"0.2rem"}} src={progressbar}/>
        <h2><b>15$</b></h2>
        <p style={{fontSize:"11px",marginTop:"-0.5rem"}}>Per month</p><br/>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Free Updates</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Support</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Outstanding support</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Unlimited storage</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Best responsive website</p><br/>
        <Button variant="default">Getting Started</Button>
        </Card><br/>
      </Col>
      <Col md={4}xs={12}>
        <Card className="_card">
        <h5>Startup</h5>
        <img style={{width:"15%",height:"15%",marginBottom:"0.2rem"}} src={progressbar}/>
        <h2><b>37$</b></h2>
        <p style={{fontSize:"11px",marginTop:"-0.5rem"}}>Per month</p><br/>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Free Updates</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Support</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Outstanding support</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Unlimited storage</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Best responsive website</p><br/>
        <Button variant="default">Getting Started</Button>
        </Card><br/>
      </Col>
      <Col md={4} xs={12}>
        <Card className="_card">
        <h5>Organisations</h5>
        <img style={{width:"15%",height:"15%",marginBottom:"0.2rem"}} src={progressbar}/>
        <h2><b>42$</b></h2>
        <p style={{fontSize:"11px",marginTop:"-0.5rem"}}>Per month</p><br/>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Free Updates</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Support</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Outstanding support</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Unlimited storage</p>
        <p style={{fontSize:"12px"}}><FaRegSquare size="12px"/> Best responsive website</p><br/>
        <Button variant="default">Getting Started</Button>
        </Card><br/>
      </Col>
    </Row>
    </div>
    </div>
  );
};

