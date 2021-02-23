import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Form, Navbar } from "react-bootstrap";
import logo from '../images/logo1.svg';
import notification from '../images/notification.svg';
import headerlikes from '../images/headerlikes.svg';
import headerviews from '../images/headerviews.svg';
import './HomeComponent.css';
import { AiOutlineDown } from "react-icons/ai";
import author from '../images/authoricon1.svg';
import search from '../images/search.svg';
import Data from './Data.json';
import { FiUpload, FiDownload, FiLink } from "react-icons/fi";

export default class Header1 extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
    <div> {Data.details.map((data, id) => {
      return(
        <div className="header">
          <Link to="/">
          <img src={logo} style={{marginLeft:"4rem",marginTop:"1rem",width:"50%"}}/>
          </Link>
        <div>
        <Form.Control style={{width:"450px",marginTop:"2rem",marginLeft:"6rem"}}className="form" placeholder="Search posts, hashtags, categories.." /><img src={search} style={{marginLeft:"95%",marginTop:"-3.9rem",width:"20px"}}/>
        </div>
        {/* <p style={{marginTop:"2.1rem",marginLeft:"2rem"}}>Topics <AiOutlineDown/></p>
        <p style={{marginTop:"2rem",marginLeft:"1rem"}}>Latest Topics</p> */}
        <img src={headerlikes} style={{marginLeft:"5.5rem",width:"25px"}}/><p style={{fontSize:"12px",color:"white",marginLeft:"-1.3rem",marginTop:"2.05rem"}}>{data.likes}</p>
        <img src={headerviews} style={{marginLeft:"2.5rem",width:"20px"}}/><p style={{fontSize:"12px",color:"white",marginLeft:"-1rem",marginTop:"2.12rem"}}>{data.views}</p>
        <img src={notification} style={{marginLeft:"2.5rem",width:"22px"}}/><p style={{fontSize:"12px",color:"white",marginLeft:"-1.05rem",marginTop:"2.15rem"}}>{data.notifications}</p>
       <img src={author} style={{marginLeft:"3rem",marginTop:"0.2rem",width:"30px"}}/>
       <Button size="sm" variant="info1" style={{marginLeft:"1rem",marginTop:"2rem",height:"2rem"}}><FiUpload size="20px" /> &nbsp;Upload </Button>
        </div>
      )
    })}
    </div>
    )
  }
}