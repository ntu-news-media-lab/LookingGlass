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
