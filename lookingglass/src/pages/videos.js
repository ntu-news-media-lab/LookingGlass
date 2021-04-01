import React, { Component } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/video.css"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';
import creative_commons from "../img/creative-commons.png";
import nml from "../img/NewsMediaLabLogo.png";


export default function Video(props) {
    const title = "The Conversation";
    const newsroom = "https://theconversation.com/id/in-english"

    return (
        <div>
            <div className="video-sec-container">
            <div className="secTitle">
                <div className="secBar"></div>
                <div id="line"></div>
                <h1>Videos</h1>
                <div style={{ fontSize: "10px", marginTop:"-5px"}}>See through the news</div>
            </div>

            <div className="videos">
            <Container className="ind-video-container">
                <Row className="video">
                <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                <Row className="video-source">
                <Image style={{width:24}} roundedCircle src={"https://yt3.ggpht.com/ytc/AAUvwnhSiMEt6hvnT5QbstuehkxgzNl5C3jTanyrFOn-H6g=s68-c-k-c0x00ffffff-no-rj"}/>
                <span style={{marginLeft:"2.5%"}}>BBC News</span>
                </Row>
                <Row className="video-title">
                Myanmar junta leader asks Thai counterpart for help on democracy
                </Row>
            </Container>
            <Container className="ind-video-container">
                <Row className="video">
                <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                <Row className="video-source">
                <Image style={{width:24}} roundedCircle src={"https://yt3.ggpht.com/ytc/AAUvwnhSiMEt6hvnT5QbstuehkxgzNl5C3jTanyrFOn-H6g=s68-c-k-c0x00ffffff-no-rj"}/>
                <span style={{marginLeft:"2.5%"}}>BBC News</span>
                </Row>
                <Row className="video-title">
                Myanmar junta leader asks Thai counterpart for help on democracy
                </Row>
            </Container>
            </div>

            <div className="end-pane">
                <div id="double-line"></div>
                    <div className="logo"><i className="bi bi-check-circle"></i></div>
                    <div id="h3-title">You're All Caught Up!</div>
                <div id="double-line"></div>
                <div id="certificate">
                    <img src={creative_commons} style={{width: "auto", height: "20px"}} />
                    <h3>{title} supports the free flow of information</h3>
                    <p>{title} is not-for-profit company with a unique collaboration between academics and journalists. Our editors turn knowledge and insights from academics into easy-to-read articles.</p>
                </div>
                <a href={newsroom} target="_blank">
                    <div className="btn-learn-more">
                        <div className="textbox">
                            <p>Read more on</p>
                            <p id="title">{title}</p>
                        </div>
                        <div className="arrow-right"><i class="bi bi-arrow-right"></i></div>
                    </div>
                </a>
            </div>
            </div>
            <footer>
                <span>Copyright 2021 &copy; The Looking Glass</span>
                <span>&emsp; Supported by &emsp;<img src={nml} style={{width: "auto", height: "10px"}} /></span>
            </footer>
            </div>
        )
}

