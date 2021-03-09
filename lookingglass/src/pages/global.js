import React, { Component } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/global.css"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

import convBubble from "../img/speech_bubble.png";
import lg_logo from "../img/looking-glass@4x.png"
import white_bg from "../img/white_bg.png"
import cn_lgogo from "../img/The-Conversation.png"
import glo_image from "../img/glo_image.jpg"

import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";




export default function Global(props) {
    return (
        <div className="global_container">

            <div className="secTitle">
                <div className="secBar"></div>
                <div>Gloval Converage</div>
                <div style={{ fontSize: "0.7em" }}>Hear from Others</div>
            </div>

            <div className="global_stories">
            <FreeScroll />
            </div>

            </div>

            )
}

function FreeScroll(props){
     
      return (
        <div id="free-scroll" className="container">
          <Flicking
            className="flicking flicking1"
            deceleration = {0.0075}
            gap={20}
            hanger={20}
            anchor={0}
            circular={false}
            moveType={"snap"}
          >
            <div class="indivual-story">
                <Container>
                    <Col>
                        <Row><Image src={glo_image} style={{marginTop:5, width:200,height:200, borderRadius:5}}></Image></Row>
                        <div className="glo-text-container">
                            <Row className="org-name"><span>New York Times</span></Row>
                            {/* TODO need to consider the case of overflow */}
                            <Row className="glo-headlines">As Bullets and Threats Fly, Myanmar Protesters Prodly Hold The Line</Row>
                        </div>
                       
                    </Col>
                </Container>
            </div>
            <div class="indivual-story">
                <Container>
                    <Col>
                        <Row><Image src={glo_image} style={{marginTop:5, width:200,height:200, borderRadius:5}}></Image></Row>
                        <div className="glo-text-container">
                            <Row className="org-name"><span>New York Times</span></Row>
                            {/* TODO need to consider the case of overflow */}
                            <Row className="glo-headlines">As Bullets and Threats Fly, Myanmar Protesters Prodly Hold The Line</Row>
                        </div>
                       
                    </Col>
                </Container>
            </div>
            <div className="panel"><div className="anchor"></div></div>
            <div className="panel"><div className="anchor"></div></div>
            <div className="panel"><div className="anchor"></div></div>
          </Flicking>
        </div>
      )
  }
  