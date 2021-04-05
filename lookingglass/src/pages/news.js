import react, { useEffect, useState } from 'react';
import { Container, Grid, Col, Row, ListGroup, Image, Button } from 'react-bootstrap';
import { readGoogleAsCSV, youtube_video } from '../core/Config';
import moment from 'moment';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Skeleton from 'react-loading-skeleton';
import "../css/news.css";
// import browserHistory from "history/createBrowserHistory";
import {
    BrowserRouter as Router,
    useParams,
    useHistory

} from "react-router-dom";
import { useQuery } from 'react-query';
import TClogo from "../img/TC-logo.png";
import Pastconv from './pastConv';
import Global from './global';
import loadingGlass from '../img/smol-logo.png'

// import PastConv from "./pastConv";
// import Global from "./global";
// import Video from "./videos";;

export default function News(props) {
    let { source, topic } = useParams();
    const topic_cleaned = topic.replace('+', ' ');
    const [article_info, set_article_list] = useState({});
    const [article_info_status, set_article_status] = useState(false);

    console.log(topic_cleaned);
    useEffect(() => {
        const fetchData = async () => {
            const data = await readGoogleAsCSV(source, true,'');
            set_article_list(data);
            set_article_status(true);

        }
        fetchData();
    }, []);
    console.log(article_info);  //This console.log returns "undefined"

    useEffect(() => {
        console.log(article_info); //check the result here
    }, [article_info])

    if (article_info_status) {
        return (
            //  <MainArticleLoadingTest />
            <MainArticle topic_data={article_info[topic_cleaned]} flag={article_info_status} topic_word={topic_cleaned} />
        )
    }
    else {
        return <MainArticleLoadingTest />;
    }

}



function MainArticle(props) {
    const history = useHistory();
    const article_info = props.topic_data;
    console.log(history);
    if (props.flag) {
        return (

            <div className="article-top-container">
                <div className="topic-container">
                    <div id="back-btn-container">
                        <button  onClick={() => {
                    history.goBack();
                }}>
                <i class="bi bi-arrow-left" id="back-button"></i></button>
                    </div>
                    {article_info['topic']}
                </div>
                <div className="topic-text-container">
                    <a href={article_info['og']['url'] || ""} ><div className="topic-img"><img src={article_info['og']['image']} /></div>

                        <div id="content">
                            <img src={TClogo} alt="TC logo" style={{ height: "25px", width: "auto", marginBottom: "3%" }} />
                            <span>{moment(article_info['pub_time']).format('DD-MM-YYYY HH:mm')}</span>
                            <div className="topic_headline">{article_info['og']['title'] || "title"}</div>
                            <div className="topic_summary">{article_info['og']['description'] || "summary"}</div>
                        </div>
                    </a>
                    <div className="topic_left_top_tag">SPOTLIGHT</div>
                </div>

                <div className="author">
                    {article_info['authors'].map((item, i) =>
                        <AuthorNew author={item} />
                    )}
                </div>
                <div className="twitter-container">
                    <p><strong>Top tweets</strong></p>
                    {  // only render embedded tweet if twitter_id given
                        article_info['twitter_id'] !== '' && <TwitterTweetEmbed tweetId={article_info['twitter_id']} />
                    }
                </div>

                {  // only render embedded tweet if twitter_id given
                    article_info['past_conv'].length > 0 && <Pastconv past_convs={article_info['past_conv']} />
                }
                {/* {
                    article_info['global_cov']=='Yes' && <Global topic={article_info['topic']} />
                } */}
            </div>


        )
    }
    else {
        return null;
    }


}
function MainArticleLoading() {
    return (
        <div className="article-top-container">
            <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>{<Skeleton />}</div>
            <div className="topic-text-container-loading">
                {/* <div className="topic-img"><Skeleton /></div> */}


                {/* <img src={TClogo} alt="TC logo" style={{ height: "25px", width: "auto", marginBottom: "3%" }} />
                        <span>{moment(article_info['pub_time']).format('DD-MM-YYYY HH:mm')}</span>
                        <div className="topic_headline">{article_info['og']['title'] || "title"}</div>
                        <div className="topic_summary">{article_info['og']['description'] || "summary"}</div> */}
                {/* {<Skeleton count={20} />} */}
                <img className='rotate' src={loadingGlass}></img>

                {/* <div className="topic_left_top_tag">SPOTLIGHT</div> */}
            </div>

            <div className="author">
                <Container>
                    <Row>
                        <div className="author-img-left">
                            <div className="author-img">{<Skeleton />}</div>
                        </div>
                        <div className="author-desc-right">
                            <span id="author-name">{<Skeleton />}</span>
                            <br></br>
                            <span id="author-bio">{<Skeleton />}</span>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}


function MainArticleLoadingTest() {
    return(
        <div className="article-top-container">
        <div className="topic-text-container-loading">

        <img className='rotate' src={loadingGlass}></img>
        </div>
           
        </div>
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



// function Twitter() {
//     return (
//         <div>
// <blockquote class="twitter-tweet">
//             <p lang="in" dir="ltr"> Belum lama ini, ramai dugaan perlakuan buruk intern di industri start-up Indonesia.<br></br>
//             Kata <a href="https://twitter.com/nabiylarisfa?ref_src=twsrc%5Etfw">@nabiylarisfa</a> dari <a href="https://twitter.com/UGMYogyakarta?ref_src=twsrc%5Etfw">@UGMYogyakarta</a>, ini bisa terjadi karena aturan hukum yang ketinggalan zaman dan belum menimbang kondisi ketenagakerjaan di industri start-up:
//             <a href="https://t.co/QB1rQ4rwKP">https://t.co/QB1rQ4rwKP</a> 
//             </p> &mdash; The Conversation Indonesia (@ConversationIDN) <a href="https://twitter.com/ConversationIDN/status/1375720939405467649?ref_src=twsrc%5Etfw">March 27, 2021</a> </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//         </div>

//         )

// }

// {
//     article_info['global_cov']=='Yes' && <Global topic={props.topic_word}/>
// }