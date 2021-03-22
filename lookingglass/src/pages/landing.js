import React, { Component } from "react";
import { Container, Grid, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/landing.css";
import logo from "../img/looking-glass@4x.png";
import iphone from "../img/iphone-mockup.png";
import nml from "../img/NewsMediaLabLogo.png";


export default function Landing(props) {
    function Copy(choice) {
        if (choice==1) {
            var copyText = document.getElementById("link");
        } else {
            var copyText = document.getElementById("iframe");
        }
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
            /* Copy the text inside the text field */
            document.execCommand("copy");
    
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
    }
    return (
    <div>
        <div className="content">
            <header>
            <div className="img_logo">
                <a href="#"><img src={logo} style={{height: "50px", width: "auto"}}></img></a>
            </div>
            <div className="navbar">
                <a href="#about">About</a>
                <a href="#howitworks">How it works</a>
                <a href="#examples">Example</a>
            </div>
            </header>
            
            <a id="about"></a>
            <Container>
            <div className="title">
                <span>Make A </span><br></br>
                <span>Looking Glass Page</span>
                <div className="input-group input-group-mb-3 round" style={{paddingTop: "20px"}}>
                    <input type="text" class="form-control round" placeholder="Google Spreadsheet URL" />
                    <input type="text" class="form-control round" placeholder="Image URL of Logo" />
                    <div class="input-group-append round">
                        <button class="btn btn-outline-secondary round" style={{backgroundColor: "RGB(219, 18, 25)", width: "80px"}} type="button"><i class="bi bi-chevron-right" aria-hidden="true" style={{color:"white"}}></i></button>
                    </div>
                </div>
            </div>
            </Container>
            <br></br>
            <br></br>
            <Container>
            <div className="pane-1">
            <Row>
                <Col md="auto"><br></br>Your Personalised <br></br> Looking Glass <br></br>Is Ready!</Col>
                <Col md="auto">
                <div className="preview-tab">
                    <button><i class="bi bi-box-arrow-up-right" style={{fontSize: "25px"}}></i><br></br><span>Open preview</span></button>
                </div>
                </Col>
                <Col>
                <div className="input-group-2">
                <div className="input-group-2-icon"><button onClick={() => Copy(1)}><i class="bi bi-files" aria-hidden="true" style={{fontSize:"25px"}}></i><span> Copy link</span></button></div>
                <div className="input-group-2-area"><input type="textarea" id="link" placeholder="Email Address" value="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650" wrap="hard"/></div>
                </div>
                {/* <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                     <span class="input-group-text" id="inputGroup-sizing-lg" style={{textAlign: "center"}}><i class="bi bi-files" aria-hidden="true"></i><span style={{fontSize: "14px"}}> Copy link</span></span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650" />
                </div> */}
                </Col>
                <Col>
                <div className="input-group-2">
                <div className="input-group-2-icon"><button onClick={() => Copy(0)}><i class="bi bi-files" aria-hidden="true" style={{fontSize:"25px"}}></i><span> Copy link</span></button></div>
                <div className="input-group-2-area"><input type="textarea" id="iframe" placeholder="Email Address" value="<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>" wrap="hard"/></div>
                </div>
                {/* <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg"><button><i class="bi bi-files" aria-hidden="true"></i><span style={{fontSize: "14px"}}> Copy link</span></button></span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>" />
                </div>  */}
                </Col>        
            </Row>    
            </div>
            </Container>
            <br></br>
            <Container>
                <div className="pane-2">
                    <div className="left-pane">
                        <h1>Curated For Your User,</h1>
                        <h1>Customised To Your Needs!</h1>
                        <br></br>
                        <br></br>
                        <Row>
                        <Col>
                            <h2><strong>Element One</strong></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </Col>
                        <Col>
                            <h2><strong>Element Two</strong></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </Col>
                        <Col>
                            <h2><strong>Element Three</strong></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            </Col>
                            <Col>
                            <div className="video">
                                <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="right-pane">
                        <img src={iphone} style={{width: "auto", height: "auto"}} />
                    </div>
                </div>
            </Container>

            <a id="howitworks"></a>
            <Container>
                <div className="pane-3">
                    <div className="title">
                        <h1>How It Works</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div>
                    <Row>
                       <Col>
                            <div className="instruction-pane">
                            <span id="number">1</span>
                                <span id="name">
                                    <h3>Create</h3>
                                    <h3>Your Spreadsheet</h3>
                                </span>
                            </div>
                       </Col>
                       <Col md="auto"></Col> 
                       <Col>
                            <div className="instruction-pane">
                                <span id="number">2</span>
                                <span id="name">
                                    <h3>Publish To</h3>
                                    <h3>The Web</h3>
                                </span>
                            </div>
                       </Col>       
                    </Row>
                    <Row>
                       <Col>
                            <div className="instruction-pane" style={{marginTop: "160%"}}>
                                <span id="number">3</span>
                                <span id="name">
                                    <h3>Generate Your</h3>
                                    <h3>Looking Glass Page</h3>
                                </span>
                            </div>
                       </Col>
                       <Col md="auto"></Col> 
                       <Col>
                            <div className="instruction-pane" style={{marginTop: "160%"}}>
                                <span id="number">4</span>
                                <span id="name">
                                    <h3>Your Looking Glass</h3>
                                    <h3>Page Is Ready</h3>
                                </span>
                            </div>
                       </Col>       
                    </Row>
                    </div>
                </div>
            </Container>
            
            <a id="examples"></a>
            <Container>
            <div className="pane-4">
                <div className="title">
                    <h1>Examples</h1>
                </div>
                <div style={{marginTop: "20%"}}>
                    <Row>
                        <Col>
                        <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col>
                        <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col>
                        <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    {/* insert title & desc of video */}
                </div>
            </div>
            </Container>
            <footer>
                <span>Copyright 2021 &copy; The Looking Glass</span>
                <span>&emsp; Supported by &emsp;<img src={nml} style={{width: "auto", height: "20px"}} /></span>
            </footer>
        </div>
    </div>
    )
}