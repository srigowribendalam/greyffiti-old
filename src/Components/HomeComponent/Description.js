import { React } from 'react';
import Data from './Data.json';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeComponent.css';
import { Component } from 'react';
import Header1 from './Header1';
import author from '../images/authoricon1.svg';
import project1 from '../images/project1.svg';
import upload from '../images/upload.svg';
import download from '../images/download.svg';
import previous from '../images/previous.svg';
import next from '../images/next.svg';
import likes from '../images/likes.svg';
import share from '../images/share.svg';
import link from '../images/link.svg';
import grid from '../images/grid.svg';
import slide from '../images/slide.svg';
import { FaRegEye } from "react-icons/fa";


export default class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header1 />
                {Data.details.map((data, id) => {
                    return (
                        <div style={{ marginLeft: "12rem", marginRight: "7rem" }}>
                             <div style={{ marginTop: "1rem", float: "right",display:"flex"}}>
                    <img src={grid} style={{ width: "16px", marginRight: "1rem" }} />
                    <img src={slide} style={{ width: "16px", marginRight: "1rem" }} />
                </div>
                             <div>
                 <p style={{ marginTop: "1rem",marginLeft:"-1rem", float: "left"}}><img src={previous} style={{width:"20px"}}/> &nbsp;&nbsp;Previous  </p> 
                 <p style={{ marginTop: "1rem",marginRight:"19rem", float: "right"}}>Next Post &nbsp;&nbsp;<img src={next} style={{width:"20px"}}/> </p> 
                 <p  style={{ marginTop: "0.5rem",fontSize:"14px",float:"right",marginRight:"-20rem"}}>Trending Posts<br/><span style={{color:"grey"}}>Sorted by Newest First</span></p>
 
               </div>
               
              
                            <Row style={{ width: "100%" }}>
                        
                                <Col md={8} xs={12} style={{marginTop: "1rem" }}> {data.articles.slice(0,1).map((article, id) => {
                                    if ((id % 2) == 0) {
                                        return (
                                            <div style={{marginRight:"2rem"}}>
                                                <div>
                                                    <img src={author} style={{ width: "40px", height: "40px" }} /> <img src={link} style={{ float: "right", marginTop: "2rem", marginRight: "0.8rem" }} /></div>
                                                <p style={{ marginTop: "-2.5rem", marginLeft: "4rem" }}>{article.projectName}<br /><p style={{ fontSize: "12px", fontColor: "lightgrey" }}>{article.date}</p></p>
                                                <p>{article.text}</p>
                                                <img src={project1} style={{ width: "575px", height: "400px", marginTop: "-3rem" }} />
                                                <p style={{ marginTop: "-2rem" }}><img src={download} style={{ width: "16px", marginRight: "2.5rem" }} /><img src={likes} style={{ width: "16px" }} />&nbsp;&nbsp;{article.likes}
                                                    <FaRegEye size="20px" style={{marginLeft: "2rem"}}/>&nbsp;&nbsp;{article.views}<img src={share} style={{ marginRight: "0.8rem", float: "right", width: "16px" }} /> 
                                                    <Button size="sm" variant="info1">
                                                   Awesome
                                                </Button></p><br/>
                                                <textarea type="text" rows="3" style={{width:"570px"}} placeholder=" Add comment"/>
                                                <p>{data.totalComments} Comments</p>{data.comments.map((comment,id)=>{
                                                    return(
                                                        <Row style={{marginTop:"0.5rem",fontSize:"13px"}}>
                                                          <Col md={2}>
                                                          <img src={author} style={{ width: "40px", height: "40px" }} />
                                                          </Col>
                                                    <Col md={10} style={{marginLeft:"-2rem"}}>
                                                            <p>{comment.name} &nbsp;&nbsp;{comment.time}</p>
                                                            <p style={{marginTop:"-0.5rem"}}>{comment.text}</p>
                                                            <div style={{ marginTop: "-0.5rem" }}><img src={upload} style={{ width: "16px"}} /> {comment.upload} &nbsp;&nbsp;<img src={download} style={{ width: "16px"}} /> {comment.download} </div><br/>
                                                    </Col>
                                                        </Row>
                                                    )
                                                     } ) }
                                            </div>
                                        )
                                    }
                                })}
                                </Col>
                                <Col md={4} xs={12} style={{ marginTop: "1rem" }}> {data.articles.map((article, id) => {
                                        return (
                                            <div>
                                                <div>
                                                    <img src={author} style={{ width: "40px", height: "40px" }} /> <img src={link} style={{ float: "right", marginTop: "2rem", marginRight: "3.5rem" }} /></div>
                                                <p style={{ marginTop: "-2.5rem", marginLeft: "4rem" }}>{article.projectName}<br /><p style={{ fontSize: "12px", fontColor: "lightgrey" }}>{article.date}</p></p>
                                                <p>{article.text}</p>
                                                <img src={project1} style={{ width: "240px", height: "150px", marginTop: "-1rem" }} />
                                                <p><img src={download} style={{ width: "16px", marginRight: "1.5rem" }} /><img src={likes} style={{ width: "16px" }} />&nbsp;&nbsp;{article.likes}
                                                    <FaRegEye size="20px" style={{ marginLeft: "1.2rem" }} />&nbsp;&nbsp;{article.views}<img src={share} style={{ marginRight: "3.5rem", float: "right", width: "16px" }} /></p>
                                                <Button size="sm" variant="info1">
                                                    Read more
                                    </Button><br /><br />
                                            </div>
                                        )
                                })}
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </div>
        )
    }
}