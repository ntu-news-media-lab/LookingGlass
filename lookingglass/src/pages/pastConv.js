import react, { Component, useEffect, useState } from "react";
import "../css/pastconv.css";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'

import convBubble from "../img/speech_bubble.png";
import white_bg from "../img/white_bg.png"
import cn_lgogo from "../img/The-Conversation.png"
import Skeleton from 'react-loading-skeleton';


export default function Pastconv(props) {

    if (props.topic_data) {
        let pastconv_result = props.topic_data.past_conv;

        if (pastconv_result) {
            if (pastconv_result.length == 0) {
                return null;
            }
            else {
                return (
                    <div className="pastConv_container">
                        <div className="secTitle">
                            <div id="line"></div>
                            <h1>Perspectives</h1>
                            <p style={{ fontSize: "10px", marginTop: "-5px" }}></p>
                        </div>

                        <div className="convBubble_container">
                            <Image id="bubble_img" src={convBubble} />
                            <Carousel interval={99999}>
                                {
                                    pastconv_result.forEach((item, i) => <PastConv_item data={item} />)
                                }
                            </Carousel>
                        </div>
                        <div className="tc-logo">
                            <img src={cn_lgogo} alt="the-conversation-logo" />
                        </div>
                    </div>
                );
            }

        }
    }
}

const PastConv_item = (props) => {
    if (props.data !== undefined) {
        let past_conv = props.data;
        console.log(past_conv);
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={white_bg}
                    style={{ height: "125%" }}
                    alt="Second slide"
                />
                <div className="convTitle">PAST COVERAGE</div>
                <Carousel.Caption>
                    <h3>{past_conv.headline}</h3>
                    <p>{past_conv.summary}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }
    else {
        return (
            <Skeleton count={10} />
        );
    }
}


