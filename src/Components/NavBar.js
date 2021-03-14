// import { React, Component } from 'react';
// import { Link, Router } from 'react-router-dom';
// import { Button, Navbar, Nav, Image, Form, FormControl } from "react-bootstrap";
// import logo from './images/logo.svg';
// import './NavBar.css';

// export default class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar style={{ backgroundColor: "#DFF6FC" }} >
//           <Navbar.Brand className="ml-4" href="#home">
//             <Image className="logo" src={logo}  />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
//               <Nav.Link href="#about" className="nav-link">About us</Nav.Link>
//               <Nav.Link href="#features" className="nav-link">Features</Nav.Link>
//               <Nav.Link href="#pricing" className="nav-link">Pricing</Nav.Link>
//               <Nav.Link href="#support" className="nav-link">Support</Nav.Link>
//               <Nav.Link href="#myaccount" className="nav-link">My Account</Nav.Link>

//             </Nav>
//             <Nav className="mr-auto">
//               <Link to="/login">
//             <Button style={{
//             borderRadius: '40px',
//             borderColor: "#062C51",
//             height: "38px",
//             color: "#062C51",
//             backgroundColor: "transparent",
//             paddingBottom:"4px",
//             paddingTop:"2px"
//           }}>Login</Button></Link>
//           <text style={{padding:"5px"}}>or</text>
//           <Link to ="/register">
//           <Button style={{
//             borderRadius: '40px',
//             borderColor: "#062C51",
//             paddingBottom:"4px",
//             paddingTop:"2px",
//             height: "38px",
//             color: "#062C51",
//             backgroundColor: "transparent"
//           }}>Create account</Button></Link>
//             </Nav>
//           </Navbar.Collapse>
         
//         </Navbar>
//       </div>

//     )
//   }
// }
import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar } from "react-bootstrap";
import logo from './images/Greyffiti-13.jpg';
import './NavBar.css';

export default class NavBar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <Navbar className="nav-height">
        <nav className="nav">
          <Link to="/">
            <img className="navbar-logo" src={logo} style={{marginLeft:"-2rem",width:"175px",marginTop:"-3.3rem"}}/></Link>
          {/* <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div> */}
          <ul >
            <li className="margintop" >
            <Link to="/" style={{marginLeft:"7.5rem"}} className='nav-links'>Home</Link>
              <Link to="/aboutus" className='nav-links '>About us</Link>
              <Link to="/features"  className='nav-links  '>Features</Link>
              <Link to="/pricing" className='nav-links '>Pricing</Link>
          {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li >
            <Link to="/" style={{marginLeft:"5rem"}} className='nav-links'>Home</Link>
              <Link to="/aboutus" className='nav-links '>About us</Link>
              <Link to="/features"  className='nav-links  '>Features</Link>
              <Link to="/pricing" className='nav-links '>Pricing</Link>
              <Link style={{color:"white"}} className='nav-links'>Support</Link>
              <Link style={{color:"white"}}  className='nav-links nav-marginright'>My Account</Link> */}
              {/* <Link to="/login">
              <Button variant="primary">Login</Button></Link>
              <text> &nbsp;or</text>
              <Link to="/register">
              <Button variant="primary" className="create-btn">Create Account</Button></Link> */}
            </li>
          </ul>
        </nav>
      </Navbar>
    )
  }
}