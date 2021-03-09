import React, { Component } from "react";
import Flicking from "@egjs/react-flicking";

export default class FreeScroll extends React.Component {
    render() {
        return (
            <div id="free-scroll" className="container">
                <h1>Free Scroll</h1>
                <ul className="extra">
                    <li>The panels are freely scrollable.</li>
                </ul>
                <h2>moveType: "freeScroll", deceleration: 0.0075(default)</h2>
                <Flicking
                    className="flicking flicking0"
                    gap={10}
                    circular={true}
                    moveType="freeScroll"
                >
                    <div className="panel" />
                    <div className="panel" />
                    <div className="panel" />
                    <div className="panel" />
                    <div className="panel" />
                </Flicking>
                <pre>
                    <code className="hljs html" data-script="flicking0" />
                </pre>
                <h2>moveType: "freeScroll", deceleration: 0.015</h2>
                <Flicking
                    className="flicking flicking1"
                    gap={10}
                    circular={true}
                    deceleration={0.015}
                    moveType="freeScroll"
                >
                    <div className="panel" />
                    <div className="panel" />
                    <div className="panel" />
                    <div className="panel" />
                    <div className="panel" />
                </Flicking>
                <pre>
                    <code className="hljs html" data-script="flicking1" />
                </pre>
            </div>
        );
    }
}
