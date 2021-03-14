import { React } from 'react';
import { Link } from 'react-router-dom';
import { Button,Dropdown, Row,Col,Card } from "react-bootstrap";
import logo from '../images/logo1.svg';
import notification from '../images/notification.svg';
import './HomeComponent.css';
import Header1 from './Header1';
import { GoIssueOpened,VscMilestone } from "react-icons/go";
import { GoMilestone } from "react-icons/go";
import { FiTag,FiSearch } from "react-icons/fi";

export default function IssueScreen() {

    return (
   <div>
       <Header1/>
       <center>
           <h4>Issues</h4>
       </center>
       <div style={{display:"flex",marginLeft:"3rem",padding:"20px"}}>
       <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Filter 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#">1</Dropdown.Item>
    <Dropdown.Item href="#">2</Dropdown.Item>
    <Dropdown.Item href="#">3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<input type="text" style={{width:"600px"}}  placeholder="Search.."/><FiSearch size="20px" style={{marginTop:"0.5rem",marginLeft:"-2rem"}}/>
{/* <input type="text" style={{marginLeft:"30px",width:"150px"}} placeholder="Label 9"/>
<input type="text" style={{width:"150px"}} placeholder="Milestones 10"/> */}
<Button variant="secondary" style={{borderColor:"2px solid black"}}><FiTag size="20px"/> Label 9</Button>
<Button variant="secondary"><GoMilestone size="20px"/> Milestones 10</Button>
<Button size="sm" style={{marginLeft:"1rem"}} variant="info1">New Issue</Button>
       </div>
       <Row style={{width:"100%"}} >
           <Col md={12} >
               <Card style={{height:"300px",marginLeft:"4rem",marginRight:"2rem",padding:"85px"}}>
                   <center>
                   <GoIssueOpened size="30px"/>
                   <h4>Welcome to Issues</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                   </center>
               </Card>
           </Col>
       </Row>
   </div>
    )
}