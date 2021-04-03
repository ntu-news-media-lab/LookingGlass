import react, { useEffect, useState } from 'react';
import { Container, Grid, Col, Row, ListGroup, Image, Button } from 'react-bootstrap';
import { readGoogleAsCSV , youtube_video} from '../core/Config';
import moment from 'moment';

import Skeleton from 'react-loading-skeleton';
import "../css/news.css";
import {
    BrowserRouter as Router,
    useParams,
    
} from "react-router-dom";
import {useQuery} from 'react-query';
import TClogo from "../img/TC-logo.png";
import Pastconv from './pastConv';

// import PastConv from "./pastConv";
// import Global from "./global";
// import Video from "./videos";;

export default function News(props) {

    let { source, topic } = useParams();
    const topic_cleaned = topic.replace('+',' ');

    const [article_info, set_article_list] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await readGoogleAsCSV(source, '');
            set_article_list(data);
        }
        fetchData();
    }, []);


    return (
        
        <MainArticle topic_data={article_info[topic_cleaned]} index={topic_cleaned} csv_source={source}  />    
    )
}



function MainArticle(props) {
    if (props.topic_data !== undefined) {
        let article_info = props.topic_data;
        return (

            <div className="article-top-container">
                <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>{article_info['topic']}</div>
                <div className="topic-text-container">
                    <a href={article_info['og']['url'] || ""} > <div className="topic-img"><Image src={article_info['og']['image']} /></div>
                    
                        <div className="content">
                            <img src={TClogo} alt="TC logo" style={{ height: "25px", width: "auto", marginBottom: "3%" }} />
                            <span>{moment(article_info['pub_time']).format('DD MM YYYY HH:mm')}</span>
                            <div className="topic_headline">{article_info['og']['title'] || "title"}</div>
                            <div className="topic_summary">{article_info['og']['description'] || "summary"}</div>
                        </div>
                    </a>
                    <div className="topic_left_top_tag">SPOTLIGHT</div>
                </div>

                <div class="author">
                    <Container>
                        {article_info['authors'].map((item, i) =>
                            <AuthorNew author={item} />
                        )}
                    </Container>
                </div>

                <Pastconv  topic_data={article_info}/>
              </div>
              
        )
    }
    else {
        return (
            <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>{<Skeleton count={5}/>}</div>
    // add one loading feature
        )

    }

}


const Author = (props) => {

    console.log(props)
    return (
        <Row>
            <Col>
                <Image src={props.author.url} roundedCircle style={{ width: "20%" }} />
            </Col>
            <Col>
                <div>{props.author.name}</div>
                <div>{props.author.bio}</div>
            </Col>
        </Row>
    )
}

const AuthorNew = (props) => {

    return (
        <Row>
            <div className="author-img-left">
                <div className="author-img"><img src={props.author.url} /></div>
            </div>
            <div className="author-desc-right">
                <span id="author-name">{props.author.name}</span>
                <br></br>
                <span id="author-bio">{props.author.role}</span>
            </div>
        </Row>
    )
}


