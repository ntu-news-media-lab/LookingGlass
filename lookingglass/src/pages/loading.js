import React, { Component } from "react";
import lg_logo from "../img/looking-glass@4x.png"
import nml_log from "../img/NewsMediaLabLogo.png"
import ReactDOM from 'react-dom'

export default function Loading() {

    // transition: "opacity 5s",opacity:"0"
    return (
        <div id="loading_page" style={{ position: "relative", height: "100%",transition: "opacity 5s",opacity:"0"}}>
            <div style={{ position: "absolute" }}>
                <img src={lg_logo} style={{ width: '50%', marginLeft: "25%", marginTop: "50%" }} />
                <div style={{ marginTop: "5%", textAlign: "center", textSizeAdjust: "auto" }}>For <span style={{ color: "rgb(161,64,72)" }}>The Conversation</span></div>
                <div style={{ marginTop: "35%", textAlign: "center", textSizeAdjust: "auto" }}> Powered by </div>
                <img src={nml_log} style={{ width: '50%', marginLeft: "25%" }} />
            </div>
        </div>
    )

}



// export default function fadeAway(){
//     setTimeout()
// }