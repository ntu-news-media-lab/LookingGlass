import  { useEffect, useState } from 'react';
import "../css/pastconv.css";
import "../css/flickingFeature.css"
import "../css/video.css"
import { youtube_video } from '../core/Config';
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import creative_commons from "../img/creative-commons.png";
// import nml from "../img/NewsMediaLabLogo.png";


export default function Video(props) {
    let { source, topic } = useParams();
    const [videos, set_videos] = useState([]);
    const [valid_result, set_valid_result] = useState(true);
    const [video_ready, set_video_ready] = useState(false);
    // console.log(article_info[topic_cleaned]);
    useEffect(() => {
        const fetchVideos = async () => {
            const videoData = await youtube_video(topic);
            if (videoData) {
                set_videos(videoData.slice(0, 3));
                set_video_ready(true);
            }
            else {
                set_videos([])
                set_valid_result(false)
            }

        }
        fetchVideos();
    }, []);

    if (videos.length > 0) {
        return (
            <div className="video-sec-container">
                <div className="secTitle">
                    <div id="line"></div>
                    <h3>{ props.translation('Videos_section')}</h3>
                    <p>{props.translation('Videos_subheader')}</p>
                </div>
                <div className="videos">
                    <div className="ind-video-container">
                        {
                            videos.map((item, i) => {
                                return (
                                    <VideoItem id={i} url={item['url']} desc={item['desc']} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        )
    }
    else if (valid_result) {
        return null;
    }
    else {
        return (
            <div className="video-sec-container">
                <div className="secTitle">
                    <div id="line"></div>
                    <h3>{props.translation('Videos_section')}</h3>
                    <p>{props.translation('Videos_subheader')}</p>
                </div>
                <div className="videos">
                    <Skeleton count={5} />
                </div>
            </div>
        )
    }

}



const VideoItem = (props) => {

    return (
       <div id={'video_'+props.id} className="ind-video">
            <div className="video" id="video-row">
                <iframe title={'video_'+props.id} src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </div>
            <div className="video-title">
                <span>{props.desc}</span>
            </div>
        </div>

    )

}

