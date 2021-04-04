import React, { Component, useState, useEffect } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/global.css"
import Image from 'react-bootstrap/Image';
import { useParams} from "react-router-dom";
import { Container, Grid, Col, Row } from 'react-bootstrap';
import { global_coverage_search } from '../core/Config'
import Flicking from "@egjs/react-flicking";




export default function Global(props) {
    let { source, topic } = useParams();
    let topic_keyword = null;
    if (props.topic){
        topic_keyword = props.topic
    }
    else{
        topic_keyword = topic
    }
    const [global_stories, set_global_stories] = useState([]);
    // const [valid_result, set_valid_result] = useState(true);

    useEffect(() => {
        const fetchGlobal = async () => {
            const glob_res = await global_coverage_search(topic_keyword);
            if (glob_res) {
                set_global_stories(glob_res);
            }
        }
        fetchGlobal();
    }, []);

    if (global_stories.length>0){
        return (
            <div className="global_container">
                <div className="secTitle">
                    <div id="line"></div>
                    <div>Global Coverage</div>
                    <div style={{ fontSize: "0.7em" }}>Hear from Others</div>
                </div>
    
                <div className="global_stories">
                   <FreeScroll global_items={global_stories} />
                </div>
            </div>

        )
    }
    else{
        return null;
    }

    
}

function FreeScroll(props) {
    return (
        <div id="free-scroll" className="container" >
            <Flicking
                className="flicking flicking1"
                deceleration={0.0075}
                gap={20}
                hanger={20}
                anchor={0}
                circular={false}
                moveType={"snap"}
            >
              

                {props.global_items.map((item, i) =>
                    <GlobalItem image_url={item['og:image']} icon={item['icon_url']} news_org={item['og:site_name']} title={item['og:title']} url={item['og:url']} />)
                }
            </Flicking>
        </div>
    )
}


const GlobalItem = (props) => {
    return(
        <div class="indivual-story">
        <Container>
            <a href={props.url} id="global-news-anchor">
                <Col>
                    <Row><Image src={props.image_url} style={{ marginTop: 5, width: 200, height: 200, borderRadius: 5, objectFit: "cover"}}></Image></Row>
                    <div className="glo-text-container">
                        {/* <Row className="org-name"><span>{props.news_org}</span></Row> */}
                        <Row className="org-name"><Image className="topic_thumbnail" src={props.icon} thumbnail /><span>{props.news_org}</span></Row>
                        {/* TODO need to consider the case of overflow */}
                        <Row className="glo-headlines">{props.title}</Row>
                    </div>
                </Col>
            </a>
        </Container>
    </div>
    )
}


{/* <div class="indivual-story">
<Container>
    <Col>
        <Row><Image src={glo_image} style={{ marginTop: 5, width: 200, height: 200, borderRadius: 5, objectFit: "cover"}}></Image></Row>
        <div className="glo-text-container">
            <Row className="org-name"><span>New York Times</span></Row>
          
            <Row className="glo-headlines">As Bullets and Threats Fly, Myanmar Protesters Prodly Hold The Line</Row>
        </div>

    </Col>
</Container>
</div> */}