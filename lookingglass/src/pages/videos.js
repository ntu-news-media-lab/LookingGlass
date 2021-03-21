import React, { Component } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/video.css"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';

import convBubble from "../img/speech_bubble.png";
import lg_logo from "../img/looking-glass@4x.png"
import white_bg from "../img/white_bg.png"
import cn_lgogo from "../img/The-Conversation.png"
import glo_image from "../img/glo_image.jpg"



export default function Video(props) {
    return (
        <div className="video-sec-container">
            <div className="secTitle">
                <div className="secBar"></div>
                <div>Videos</div>
                <div style={{ fontSize: "0.7em" }}>See through the news</div>
            </div>

            <div className="videos">
            <Container className="ind-video-container">
                <Row className="video">
                <iframe src="https://www.youtube.com/embed/DKPoCQhctWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                <Row className="video-source">
                <Image style={{width:"10%",height:"10%"}} roundedCircle src={"https://yt3.ggpht.com/ytc/AAUvwnhSiMEt6hvnT5QbstuehkxgzNl5C3jTanyrFOn-H6g=s68-c-k-c0x00ffffff-no-rj"}/>
                <span style={{marginLeft:"2.5%"}}>BBC News</span>
                </Row>
                <Row className="video-title">
                Defiant Myanmar anti-coup protesters return a day after 38 are killed
                </Row>
            </Container>
            <Container className="ind-video-container">
                <Row className="video">
                <iframe src="https://www.youtube.com/embed/DKPoCQhctWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                <Row className="video-source">
                <Image style={{width:"10%",height:"10%"}} roundedCircle src={"https://yt3.ggpht.com/ytc/AAUvwnhSiMEt6hvnT5QbstuehkxgzNl5C3jTanyrFOn-H6g=s68-c-k-c0x00ffffff-no-rj"}/>
                <span style={{marginLeft:"2.5%"}}>BBC News</span>
                </Row>
                <Row className="video-title">
                Defiant Myanmar anti-coup protesters return a day after 38 are killed
                
                </Row>
            </Container>
            </div>

            </div>

            )
}

