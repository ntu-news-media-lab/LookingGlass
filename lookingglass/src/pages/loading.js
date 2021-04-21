import React from "react";
import lg_logo from "../img/looking-glass@4x.png"
import nml_logo from "../img/powered-by.png"
import cn_logo from "../img/conv-logo.svg"
import "../css/topics.css"

export default function Loading() {
    let nml_link="http://www.newsmedialab.wkwsci.ntu.edu.sg/index.html"
    // transition: "opacity 5s",opacity:"0"
    return (
        // <div id="loading_page" style={{ position: "relative", height: "100%"}}>
        <div id="loading_div" className="success">
            <div style={{ position: "relative" }}>
                <img src={lg_logo} style={{ width: '20%', marginTop: "60%" }} alt="lg_logo"/>
                <div style={{ marginTop: "2%", textAlign: "center", fontSize: "12px" }}>by <span style={{ color: "rgb(161,64,72)" }}> <img
                    src={cn_logo}
                    style={{
                        maxWidth: "20%"
                    }} 
                    alt ="cn_logo"
                    /></span></div>
                    <a href={nml_link} target="_blank">
                    <img src={nml_logo} style={{marginTop: "50%", marginBottom: "10%", width: '30%'}} alt="nml_logo"/>
                    </a>

            </div>
        </div>
    )

}