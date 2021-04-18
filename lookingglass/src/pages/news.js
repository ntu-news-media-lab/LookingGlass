import { useEffect, useState } from 'react';
import { Row  } from 'react-bootstrap';
import { readGoogleAsCSV } from '../core/Config';
import moment from 'moment';
import { TwitterTweetEmbed } from 'react-twitter-embed';
// import Skeleton from 'react-loading-skeleton';
import "../css/news.css";
// import browserHistory from "history/createBrowserHistory";

import {
    // BrowserRouter as Router,
    useParams,
    useHistory

} from "react-router-dom";
import { Helmet } from "react-helmet";
import TClogo from "../img/TC-logo.png";
import Pastconv from './pastConv';
import loadingGlass from '../img/smol-logo.png'


export default function News(props) {
    let { source, topic } = useParams();
    const topic_cleaned = topic.replace('+', ' ');
    const [article_info, set_article_list] = useState({});
    const [article_info_status, set_article_status] = useState(false);

    console.log(topic_cleaned);
    useEffect(() => {
        const fetchData = async () => {
            const data = await readGoogleAsCSV(source, false, '');
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
        let url_split = article_info['og']['url'].split("-");
        let article_id = url_split[url_split.length - 1];
        const authors = article_info['authors']?article_info['authors'].map((item, i) =>
                        <AuthorNew author={item} />):''
        return (
            <div className="article-top-container">
                {article_info['og']['url'].includes('theconversation.com') && <IncludeGA article_id_input={article_id} />}
                <div className="topic-container">
                    <div id="back-btn-container">
                        <button onClick={() => {
                            history.goBack();
                        }}>
                            <i class="bi bi-arrow-left" id="back-button"></i></button>
                    </div>
                    {article_info['topic']}
                </div>
                <div className="topic-text-container">
                    <a href={article_info['og']['url'] || ""} ><div className="topic-img"><img src={article_info['og']['image']} /></div>

                        <div id="content">
                        {article_info['og']['url'].includes('theconversation.com') &&<img src={TClogo} alt="TC logo" style={{ height: "25px", width: "auto", marginBottom: "3%" }} />}
                            <span>{moment(article_info['pub_time']).format('DD-MM-YYYY HH:mm')}</span>
                            <div className="topic_headline">{article_info['og']['title'] || "title"}</div>
                            <div className="topic_summary">{article_info['og']['description'] || "summary"}</div>
                        </div>
                    </a>
                    <div className="topic_left_top_tag">SPOTLIGHT</div>
                </div>

                <div className="author">
                    {authors}
                </div>
                {  // only render embedded tweet if twitter_id given
                    article_info['past_conv'].length > 0 && <Pastconv past_convs={article_info['past_conv']} />
                }
                <div className="twitter-container">
                    
                    
                    {  // only render embedded tweet if twitter_id given
                        article_info['twitter_id'] !== '' &&  <TwitterSection twitter_id={article_info['twitter_id']}/>
                    }
                </div>
            </div>


        )
    }
    else {
        return null;
    }


}
// function MainArticleLoading() {
//     return (
//         <div className="article-top-container">
//             <div style={{ textAlign: "center", margin: "5%", fontSize: "1em" }}>{<Skeleton />}</div>
//             <div className="topic-text-container-loading">
//                 <img className='rotate' src={loadingGlass}></img>
//             </div>


//             <Container>
//                 <Row>
//                     <div className="author-img-left">
//                         <div className="author-img">{<Skeleton />}</div>
//                     </div>
//                     <div className="author-desc-right">
//                         <span id="author-name">{<Skeleton />}</span>
//                         <br></br>
//                         <span id="author-bio">{<Skeleton />}</span>
//                     </div>
//                 </Row>
//             </Container>

//         </div>
//     )
// }


function MainArticleLoadingTest() {
    return (
        <div className="article-top-container">
            <div className="topic-text-container-loading">

                <img className='rotate' src={loadingGlass}></img>
            </div>

        </div>
    )
}

const TwitterSection = (props)=>{
    return(
        <div>
        <div id="line" style={{ marginLeft: "10%", marginBottom: "-3%" }}></div>
        <p><strong>Top tweets</strong></p>
        <TwitterTweetEmbed tweetId={props.twitter_id} />
        </div>

    )
}


const AuthorNew = (props) => {
    return (
        <Row>
            <div className="author">
                <a href={props.author.author_url} style={{ textDecoration: "none", color: "#0b0b0b" }}>
                    <div className="author-img-left">
                        <div className="author-img"><img src={props.author.url} /></div>
                    </div>
                    <div className="author-desc-right">
                        <span id="author-name">{props.author.name}</span>
                        <br></br>
                        <span id="author-bio">{props.author.role}</span>
                    </div>
                </a>
            </div>
        </Row>
    )
}


export const IncludeGA = (props) => {

    let url = `https://counter.theconversation.com/content/${props.article_id_input}/count.gif?distributor=republish-lightbox-advanced`;

    return (
        <Helmet>
        {/* <img src={url} alt="The Conversation" width="1" height="1" style="border: none !important; box-shadow: none !important; margin: 0 !important; max-height: 1px !important; max-width: 1px !important; min-height: 1px !important; min-width: 1px !important; opacity: 0 !important; outline: none !important; padding: 0 !important; text-shadow: none !important" /> */}
            <iframe title={"counter_"+props.article_id_input} src={url} width="1" height="1"></iframe>
            {/* <script type="text/javascript" src="https://theconversation.com/javascripts/lib/content_tracker_hook.js" id="theconversation_tracker_hook" data-counter={url} async="async"></script> */}

        </Helmet>

    )

}