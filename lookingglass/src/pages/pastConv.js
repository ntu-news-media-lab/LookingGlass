import react, { useState } from 'react';
import "../css/pastconv.css";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

import convBubble from "../img/speech_bubble.png";
import lg_logo from "../img/looking-glass@4x.png"
import white_bg from "../img/white_bg.png"
import cn_lgogo from "../img/The-Conversation.png"


export default function Pastconv(props) {
    
    return (
        <div className="pastConv_container">
            <div className="secTitle">
            <div id="line"></div>
                <h1>Perspectives</h1>
                <p style={{ fontSize: "10px", marginTop:"-5px"}}></p>
            </div>

            <div className="convBubble_container">
            <Image id="bubble_img" src={convBubble} />
                
                <Carousel interval={99999}>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={white_bg}
                            style={{height:"125%"}}
                            alt="First slide" 
                        />
                        <a href="https://www.youtube.com/" target="_blank">
                            <div className="convTitle">PAST COVERAGE</div>
                            <Carousel.Caption>
                                <h3>Myanmar’s military has used surveillance, draconian laws and fear to stifle dissent before. Will it work again?</h3>
                                <p>When military dictators ruled Myanmar from 1962 to 2010, they were able to maintain tight control over the people through the country’s extensive intelligence apparatus and harsh tactics such as imprisonment, torture and mass killings. As a result, Myanmar’s people lived in virtual silence for decades.</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={white_bg}
                            style={{height:"125%"}}
                            alt="Second slide" 
                        />
                        <a href="" target="_blank">
                            <div className="convTitle">PAST COVERAGE</div>
                            <Carousel.Caption>
                                <h3 style={{lineHeight: "-5em"}}>Myanmar’s military has used surveillance, draconian laws and fear to stifle dissent before. Will it work again?</h3>
                                <p>When military dictators ruled Myanmar from 1962 to 2010, they were able to maintain tight control over the people through the country’s extensive intelligence apparatus and harsh tactics such as imprisonment, torture and mass killings. As a result, Myanmar’s people lived in virtual silence for decades.</p>
                            </Carousel.Caption>
                        </a>    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={white_bg}
                            style={{height:"125%"}}
                            alt="Third slide" 
                        />
                        <a href="" target="_blank">
                            <div className="convTitle">PAST COVERAGE</div>
                            <Carousel.Caption>
                                <h3>Myanmar’s military has used surveillance, draconian laws and fear to stifle dissent before. Will it work again?</h3>
                                <p>When military dictators ruled Myanmar from 1962 to 2010, they were able to maintain tight control over the people through the country’s extensive intelligence apparatus and harsh tactics such as imprisonment, torture and mass killings. As a result, Myanmar’s people lived in virtual silence for decades.</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="tc-logo">
                <img src={cn_lgogo} alt="the-conversation-logo" />
            </div>
        </div>

    )
}




