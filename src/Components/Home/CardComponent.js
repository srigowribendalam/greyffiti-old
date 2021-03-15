import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from "react-bootstrap";
import './Home.css';
import { FaRegSquare } from 'react-icons/fa';
import { Zoom, Slide } from 'react-reveal';
import collaborate from '../images/collaborate.svg';
import workanywhere from '../images/workanywhere.svg';
import engageicon from '../images/engageicon.svg';

export default function CardComponent() {
  return (
    // <div style={{ marginTop: "4rem", marginLeft: "12.5rem", marginRight: "12rem" }}>
    //   <Row className="row">
    //     <Col md={4}>
    //       <Slide left>
    //         <Card className="box">
    //           <FaRegSquare size="20px" /><br />
    //           <h4>Collabarate</h4>
    //           <p className="text-color">Lorem Ipsum is simply dummy text of the printing</p>
    //         </Card>
    //       </Slide>
    //     </Col>

    //     <Col md={4}>
    //       <Slide bottom>
    //         <Card className="box">
    //           <FaRegSquare size="20px" /><br />
    //           <h4>Work Anywhere</h4>
    //           <p className="text-color">Lorem Ipsum is simply dummy text of the printing</p>
    //         </Card>
    //       </Slide>
    //     </Col>

    //     <Col md={4}>
    //       <Slide right>
    //         <Card className="box">
    //           <FaRegSquare size="20px" /><br />
    //           <h4>Engage on the go</h4>
    //           <p className="text-color">Lorem Ipsum is simply dummy text of the printing</p>
    //         </Card></Slide>
    //     </Col>

    //   </Row>
    // </div>

    <div className="top-box">
    <Row className="row" style={{width:"100%"}}>
      <Col md={4} xs={12}>
        <Slide left>
          <Card className="card-box">
          <img src={collaborate} className="card_image" />
            <h4>Collabarate</h4>
            <p className="text-color">Collaborate with people whose work matches your vibes, and let your work shine!</p>
          </Card><br/>
        </Slide>
      </Col>

      <Col md={4} xs={12}>
        <Slide bottom>
          <Card className="card-box">
            <img src={workanywhere} className="card_image" />
            <h4>Work Anywhere</h4>
            <p className="text-color">With Greyffiti, location is no more a boundary!</p>
          </Card><br/>
        </Slide>
      </Col>
      <Col md={4} xs={12}>
        <Slide right>
          <Card className="card-box">
          <img src={engageicon} className="card_image" />
            <h4>Engage on the go</h4>
            <p className="text-color">Engagement works on your side, and Greyffiti makes it so much easier!</p>
          </Card></Slide>
      </Col>
    </Row>
  </div>
  );
};

