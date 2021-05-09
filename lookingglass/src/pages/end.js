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
                    <div id="h3-title">Kamu sudah membaca semuanya!</div>
                <div id="double-line"></div>
                <div id="certificate">
                    <img src={creative_commons} style={{width: "auto", height: "20px"}} alt="creative commons"/>
                    <h3>{title} mendukung arus bebas informasi.</h3>
                    <p>Artikel kami dapat ditayangkan ulang secara gratis dengan lisensi Creative Commons.</p>
                </div>
                <a href={newsroom_url} target="_blank" rel="noreferrer">
                    <div className="btn-learn-more">
                        <div className="textbox">
                            <p>Baca selengkapnya di</p>
                            <p id="title">{title}</p>
                        </div>
                        <div className="arrow-right"><i class="bi bi-arrow-right"></i></div>
                    </div>
                </a>
        </div>
            
    </div>
    )
}
