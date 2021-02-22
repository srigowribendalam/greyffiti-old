import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Form, Navbar } from "react-bootstrap";
import logo from '../images/logo1.svg';
import notification from '../images/notification.svg';
import './HomeComponent.css';
import { AiOutlineDown } from "react-icons/ai";
import author from '../images/authoricon1.svg';
import search from '../images/search.svg';
import Data from './Data.json';

export default class Header extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
    //   <Navbar className="nav-height">
    //     <nav className="nav">
    //       <Link to="/">
    //         <img className="navbar-logo" src={logo} /></Link>
    //       <div className="menu-icon" onClick={this.handleClick}>
    //         <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    //       </div>
    //       <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
    //         <li>
    //         <Link to="/home" className='nav-links'>Home</Link>
    //           <Link to="/aboutus" className='nav-links'>About us</Link>
    //           <Link to="/features"  className='nav-links'>Features</Link>
    //           <Link to="/pricing" className='nav-links'>Pricing</Link>
    //           <Link to="/support"  className='nav-links'>Support</Link>
    //           <Link to="/myaccount"  className='nav-links nav-marginright'>My Account</Link>
    //           <Link to="/login">
    //           <Button variant="primary">Login</Button></Link>
    //           <text> &nbsp;or</text>
    //           <Link to="/register">
    //           <Button variant="primary" className="create-btn">Create Account</Button></Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </Navbar>
    <div> {Data.details.map((data, id) => {
      return(
        <div className="header">
          <Link to="/">
          <img src={logo} style={{marginLeft:"4rem",marginTop:"1rem",width:"50%"}}/>
          </Link>
        <div>
        <Form.Control style={{width:"450px",marginTop:"2rem",marginLeft:"6rem"}}className="form" placeholder="Search posts, hashtags, categories.." /><img src={search} style={{marginLeft:"95%",marginTop:"-3.9rem",width:"20px"}}/>
        </div>
        <p style={{marginTop:"2.1rem",marginLeft:"2rem"}}>Topics <AiOutlineDown/></p>
        <p style={{marginTop:"2rem",marginLeft:"1rem"}}>Latest Topics</p>
        <img src={notification} style={{marginLeft:"3.5rem",width:"20px"}}/><p style={{fontSize:"12px",color:"white",marginLeft:"-1.05rem",marginTop:"2.15rem"}}>{data.notifications}</p>
       <img src={author} style={{marginLeft:"3rem",marginTop:"0.2rem",width:"30px"}}/>
       <p style={{fontSize:"12px",color:"grey",marginLeft:"0.5rem",marginTop:"2.3rem"}}> {data.name} <span style={{color:"black"}}><AiOutlineDown/></span></p>
        </div>
      )
    })}
    </div>
    )
  }
}