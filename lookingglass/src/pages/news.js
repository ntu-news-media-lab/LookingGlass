import react,{useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Container, Grid, Col, Row } from 'react-bootstrap';
import {readGoogleAsCSV} from '../core/Config';
import "../css/news.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useLocation
  } from "react-router-dom";

  
export default function News(props) {
    let { source } = useParams();

    const [topic_list,set_topic_list] = useState([]);
    useEffect(() => {
        readGoogleAsCSV(source, '')
        .then(
        data => set_topic_list(data),
   
        )
    }, []);

    
    return (
        <div>
            {/* <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>{topic_list.topics[0].topic_keyword}</div> */}
            <div className="topic-container">
                <div id="back-icon"><i class="bi bi-chevron-left" style={{fontSize: "20px", fontWeight: "400px", color: "black"}} /></div>
                <div id="topic-title">
                    <strong>{props.data.topic_word}</strong>
                </div>
            </div>
            <div className="topic-text-container">
                <div className="topic-img"><img src={props.data.img_src} /></div>
                    
                <div className="content">
                <img src={TClogo} alt="TC logo" style={{height:"25px", width:"auto", marginBottom:"3%"}} />
                <div className="topic_headline">{props.data.headline}</div>
                <div className="topic_summary">{props.data.summary}</div>
                </div>
                <div className="topic_left_top_tag">SPOTLIGHT</div>
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
