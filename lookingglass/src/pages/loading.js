import React, { Component } from "react";
import lg_logo from "../img/looking-glass@4x.png"
import nml_log from "../img/NewsMediaLabLogo.png"
import cn_logo from "../img/conv-logo.svg"
import ReactDOM from 'react-dom'
import "../css/topics.css"

export default function Loading() {

    // transition: "opacity 5s",opacity:"0"
    return (
        // <div id="loading_page" style={{ position: "relative", height: "100%"}}>
        <div id="loading_div" className="success">
            <div style={{ position: "absolute" }}>
                <img src={lg_logo} style={{ width: '20%', marginTop: "70%" }} />
                <div style={{ marginTop: "2%", textAlign: "center", fontSize: "12px" }}>by <span style={{ color: "rgb(161,64,72)" }}> <img
                    src={cn_logo}
                    style={{
                        maxWidth: "20%"
                    }} /></span></div>
                <div style={{marginTop: "80%", textAlign: "center", textSizeAdjust: "auto" }}> Powered by </div>
                <img src={nml_log} style={{marginBottom: "10%",  width: '30%'}} />
            </div>
        </div>
    )

}