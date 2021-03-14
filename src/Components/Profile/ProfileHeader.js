import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Form, Navbar } from "react-bootstrap";
import logo from '../images/logo1.svg';
import bars from '../images/3bars.svg';
import notification from '../images/notification.svg';
import { AiOutlineDown } from "react-icons/ai";
import author from '../images/authoricon1.svg';
import search from '../images/search.svg';
import createproject from '../images/createproject.svg';
import Data from '../HomeComponent/Data.json';

export default class ProfileHeader extends Component {

  render() {
    return (
    <div> {Data.details.map((data, id) => {
      return(
        <div className="header">
          <Link to="/">
          <img src={logo} style={{marginLeft:"6rem",marginTop:"1rem",width:"50%"}}/>
          </Link>
        <div>
        <Form.Control style={{width:"400px",marginTop:"2rem",marginLeft:"6rem"}}className="form" placeholder="Search posts, hashtags, categories.." /><img src={search} style={{marginLeft:"92%",marginTop:"-3.9rem",width:"20px"}}/>
        </div>
        <p style={{marginTop:"2.1rem",marginLeft:"4rem"}}>Topics <AiOutlineDown/></p>
        <p style={{marginTop:"2rem",marginLeft:"2.5rem"}}>Latest Topics</p>
        <img src={bars} style={{marginLeft:"5px",width:"15px"}}/>
        <img src={notification} style={{marginLeft:"2.5rem",width:"20px"}}/><p style={{fontSize:"12px",color:"white",marginLeft:"-1.05rem",marginTop:"2.15rem"}}>{data.notifications}</p>
       <img src={author} style={{marginLeft:"2.5rem",marginTop:"0.2rem",width:"30px"}}/>
       <p style={{fontSize:"12px",color:"grey",marginLeft:"0.5rem",marginTop:"2.3rem"}}> {data.name} <span style={{color:"black"}}><AiOutlineDown/></span></p>
        </div>
      )
    })}
    </div>
    )
  }
}