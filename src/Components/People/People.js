import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Card, Row, Col, Form } from "react-bootstrap";
import notifications from '../images/notifications.svg';
import insight from '../images/insight.svg';
import settings from '../images/settings.svg';
import people from '../images/people.svg';
import request from '../images/request.svg';
import messages from '../images/messages.svg';
import badges from '../images/badges.svg';
import Data from '../HomeComponent/Data.json';
import author from '../images/authoricon1.svg';
import BadgesHeader from '../Badges/BadgesHeader';
import logo from '../images/logo.svg';
import newbie from '../images/Newbie.svg';
import intermediate from '../images/intermediate.svg';
import advanced from '../images/advanced.svg';
import letstalk from '../images/letstalk.svg';
import greatthread from '../images/greatthread.svg';
import umbrella from '../images/umbrella.svg';

export default function People() {

    return (
        <div>
            <BadgesHeader />
            <div style={{ marginLeft: "7.8rem", marginTop: "2rem", marginRight: "8rem" }}>
                <img src={author} style={{ width: "40px" }} /> &nbsp; Ayasha<br />
                <div style={{ display: "flex", padding: "20px" }}>
                    <p style={{ marginRight: "2rem" }}>Summary</p>
                    <p style={{ marginRight: "2rem" }}><img src={insight} style={{ width: "16px", marginRight: "0.3rem" }} /> Activity</p>
                    <p style={{ marginRight: "2rem" }}><img src={notifications} style={{ width: "16px", marginRight: "0.3rem" }} /> Notifications</p>
                    <p style={{ marginRight: "2rem" }}><img src={people} style={{ width: "16px", marginRight: "0.3rem" }} /> People</p>
                    <p style={{ marginRight: "2rem" }}><img src={request} style={{ width: "18px", marginRight: "0.3rem" }} /> Request</p>
                    <p style={{ marginRight: "2rem" }}><img src={messages} style={{ width: "16px", marginRight: "0.3rem" }} /> Messages</p>
                    <p style={{ marginRight: "2rem" }}><img src={badges} style={{ width: "16px", marginRight: "0.3rem" }} /> Badges</p>
                    <p style={{ marginRight: "2rem" }}><img src={settings} style={{ width: "16px", marginRight: "0.3rem" }} /> Settings</p>

                </div>
                <hr style={{ marginTop: "-1rem" }} /><br/>
                <Table striped hover  size="sm"style={{ marginLeft: "1.5rem", marginTop: "0.5rem", width: "980px" }}>
  <thead>
    <tr>
      <th style={{width:"500px"}}>Projects</th>
      <th>Contributor</th>
      <th>Viewer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
    <tr>
      <td style={{color:"grey",padding:"14px",fontSize:"13px"}}><img src={author} style={{width:"30px"}}/>&nbsp;&nbsp;&nbsp;&nbsp; LOREM </td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
      <td style={{color:"grey",padding:"10px",fontSize:"14px"}}>Name <br/>Name</td>
    </tr>
  </tbody>
</Table>

                <div className="bottom-footer">
                    <img src={logo} style={{ marginTop: "-1rem", marginLeft: "2.5rem" }} />

                    <p><img src={umbrella} /> &nbsp; Support</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>The Team</p>
                </div>
                <select style={{ float: "right", marginRight: "8rem", marginTop: "-4rem" }} id="cars" className="form_ form_text" name="cars" >
                    <option value="choose">Americas - English</option>
                </select>
                <div className="bottom-footer" style={{ marginTop: "-0.9rem", marginLeft: "9.5rem" }}>
                    <p> &#169; 2020 Greyffiti</p>
                    <Link to="/terms" style={{ color: "black" }}>
                        <p>Terms</p>
                    </Link>
                    <Link to="/privacypolicy" style={{ color: "black" }}>
                        <p>Privacy</p>
                    </Link>
                    <p>Send Feedback</p>
                </div>
            </div>
        </div>
    )
}