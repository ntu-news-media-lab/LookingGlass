// import react, { useEffect, useState } from 'react';
import "../css/end.css";
import creative_commons from "../img/creative-commons.png";


export default function End(props){

    const title = "The Conversation";
    const newsroom_url = "https://theconversation.com/id/in-english"

    return(
        <div>
        <div className="end-pane">
                <div id="double-line"></div>
                    <div className="logo"><i className="bi bi-check-circle"></i></div>
                    <div id="h3-title">You're All Caught Up!</div>
                <div id="double-line"></div>
                <div id="certificate">
                    <img src={creative_commons} style={{width: "auto", height: "20px"}} />
                    <h3>{title} supports the free flow of information</h3>
                    <p>{title} is not-for-profit company with a unique collaboration between academics and journalists. Our editors turn knowledge and insights from academics into easy-to-read articles.</p>
                </div>
                <a href={newsroom_url} target="_blank" rel="noreferrer">
                    <div className="btn-learn-more">
                        <div className="textbox">
                            <p>Read more on</p>
                            <p id="title">{title}</p>
                        </div>
                        <div className="arrow-right"><i class="bi bi-arrow-right"></i></div>
                    </div>
                </a>
        </div>
            
    </div>
    )
}
