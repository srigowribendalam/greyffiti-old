import { React } from 'react';
import Data from './Data.json';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './HomeComponent.css';
import { FaRetweet } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FiUpload, FiDownload, FiLink } from "react-icons/fi";
import { Component } from 'react';
import Header from './Header';
import author from '../images/authoricon1.svg';
import project1 from '../images/project1.svg';
import upload from '../images/upload.svg';
import download from '../images/download.svg';
import repost from '../images/repost.svg';
import likes from '../images/likes.svg';
import share from '../images/share.svg';
import comment from '../images/comment.svg';
import link from '../images/link.svg';
import grid from '../images/grid.svg';
import slide from '../images/slide.svg';
import { FaRegEye } from "react-icons/fa";


export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ marginTop: "2rem", float: "right", marginRight: "8rem" }}><img src={grid} style={{ width: "16px", marginRight: "1rem" }} /><img src={slide} style={{ width: "16px", marginRight: "1rem" }} /><img src={repost} style={{ width: "16px", marginRight: "3rem" }} /></div>
                {Data.details.map((data, id) => {
                    return (
                        <div style={{ marginLeft: "12rem", marginRight: "6rem" }}>
                            <Row style={{ width: "100%" }}>
                                <Col md={6} xs={12} style={{ marginTop: "3rem" }}> {data.articles.map((article, id) => {
                                    if ((id % 2) == 0) {
                                        return (
                                            <div>
                                                <div>
                                                    <img src={author} style={{ width: "40px", height: "40px" }} /> <img src={link} style={{ float: "right", marginTop: "2rem", marginRight: "3.5rem" }} /></div>
                                                <p style={{ marginTop: "-2.5rem", marginLeft: "4rem" }}>{article.projectName}<br /><p style={{ fontSize: "12px", fontColor: "lightgrey" }}>{article.date}</p></p>
                                                <p>{article.text}</p>
                                                <img src={project1} style={{ width: "400px", height: "300px", marginTop: "-2rem" }} />
                                                <p style={{ marginTop: "-1rem" }}><img src={download} style={{ width: "16px", marginRight: "2.5rem" }} /><img src={likes} style={{ width: "16px" }} />&nbsp;&nbsp;{article.likes}
                                                    <FaRegEye size="20px" style={{marginLeft: "2rem"}}/>&nbsp;&nbsp;{article.views}<img src={share} style={{ marginRight: "3.5rem", float: "right", width: "16px" }} /></p>
                                                <Button size="sm" variant="info1">
                                                    Read more
                                    </Button><br /><br />
                                            </div>
                                        )
                                    }
                                })}
                                </Col>
                                <Col md={6} xs={12} style={{ marginTop: "0.5rem" }}> {data.articles.map((article, id) => {
                                    if ((id % 2) != 0) {
                                        return (
                                            <div>
                                                <div>
                                                    <img src={author} style={{ width: "40px", height: "40px" }} /> <img src={link} style={{ float: "right", marginTop: "2rem", marginRight: "3.5rem" }} /></div>
                                                <p style={{ marginTop: "-2.5rem", marginLeft: "4rem" }}>{article.projectName}<br /><p style={{ fontSize: "12px", fontColor: "lightgrey" }}>{article.date}</p></p>
                                                <p>{article.text}</p>
                                                <img src={project1} style={{ width: "400px", height: "300px", marginTop: "-2rem" }} />
                                                <p style={{ marginTop: "-1rem" }}><img src={download} style={{ width: "16px", marginRight: "2.5rem" }} /><img src={likes} style={{ width: "16px" }} />&nbsp;&nbsp;{article.likes}
                                                    <FaRegEye size="20px" style={{ marginLeft: "2rem" }} />&nbsp;&nbsp;{article.views}<img src={share} style={{ marginRight: "3.5rem", float: "right", width: "16px" }} /></p>
                                                <Button size="sm" variant="info1">
                                                    Read more
                                    </Button><br /><br />
                                            </div>
                                        )
                                    }
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