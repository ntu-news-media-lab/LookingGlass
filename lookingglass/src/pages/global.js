import React, {useState, useEffect } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/global.css"
import Image from 'react-bootstrap/Image';
import { useParams} from "react-router-dom";
import { Container,Col, Row } from 'react-bootstrap';
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
                    <h3>{props.translation("GlobalCoverage_section")}</h3>
                    <p>{props.translation("HearFromOthers_subheader")}</p>
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
                gap={10}
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
    // console.log(props);
    return(
        <div class="indivual-story">
        <Container>
            <a href={props.url} id="global-news-anchor">
                <Col>
                    <Row><Image src={props.image_url} style={{ marginTop: "5%", width: "200px", height: "200px", borderRadius: "10px", objectFit: "cover"}}></Image></Row>
                    <div className="glo-text-container">
                        {/* <Row className="org-name"><span>{props.news_org}</span></Row> */}
                        <Row className="org-name"><Image className="topic_thumbnail" src={props.icon} thumbnail /><span id="news-org-title">{props.news_org}</span></Row>
                        {/* TODO need to consider the case of overflow */}
                        <Row className="glo-headlines">{props.title}</Row>
                    </div>
                </Col>
            </a>
        </Container>
    </div>
    )
}