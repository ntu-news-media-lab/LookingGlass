import react from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';
import "../css/topic.css";

export default function Topic(props) {
    return (
        <div>
            <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>{props.data.topic_word}</div>
            <div style={{ position: "relative"}}>
                <Col>
                    <Image src={props.data.img_src} style={{ width: "150%", height: "auto"}}/>
                    <div className="topic_left_top_tag">SPOTLIGHT</div>
                    <div className="topic_text_container">
                        <div className="topic_headline">{props.data.headline}</div>
                        <div className="topic_summary">{props.data.summary}</div>
                    </div>
                </Col>
            </div>
            <div class="author_row">
            <Container>
            <Row >
                    <Col>
                        <Image src={props.data.author_icon} roundedCircle style={{ width:"20%"  }} />
                    </Col>
                    <Col >
                        <div>{props.data.author_name}</div>
                        <div>{props.data.author_bio}</div>
                    </Col>
            </Row>
            </Container>
            </div>
        </div>
    )
}


{/* <Container>
           
            <Row>
                <Col>1</Col>
                <Col>1</Col>
                <Col>1</Col>
            </Row>
        </Container> */}

// <div className="topic_word" style={{ width: "50%", margin: "auto", }}>{props.topic}</div>
// <div className="topic_article_container">
//     <img src={props.img_src} />
//     <div className="topic_article_text">
//         <div className="topic_headline">{props.headline}</div>
//         <div className="topic_summary">{props.summary}</div>
//     </div>
// </div>

