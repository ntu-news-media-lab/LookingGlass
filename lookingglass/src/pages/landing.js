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
            alert("You have copied the Looking Glass " + copyText.id);
    }
    function Show() {
        var x = document.getElementById("pane-1");
        if (x.style.display == "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
    <div>
        <div className="content">
            <header>
            <div id="nav">
            <div className="img_logo">
                <a href="#"><img src={logo} style={{height: "50px", width: "auto"}}></img></a>
            </div>
            <div className="navbar">
                <a href="#about">About</a>
                <a href="#howitworks">How it works</a>
                {/* <a href="#examples">Example</a> */}
            </div>
            </div>
            </header>
            
            <Container>
            <div className="title">
                <div id="line"></div>
                <span> Create A </span><br></br>
                <span>Looking Glass Page</span><br></br>
                <p style={{marginTop: "5%", marginBottom: "5%", lineHeight:"1.5em", fontFamily: 'Krub'}}>Simply copy and paste the URL onto your social media post to publicise it, or use the iframe to embed the Looking Glass widget on your website!</p>
                <div className="input-group input-group-mb-3 round" style={{marginTop: "20px"}}>
                    <input type="text" class="form-control round" placeholder="Google Spreadsheet URL" />
                    <input type="text" class="form-control round" placeholder="Image URL of Logo" />
                    <div class="input-group-append round">
                        <button onClick={() => Show()} class="btn btn-outline-secondary round" style={{backgroundColor: "rgb(199, 37, 37)", width: "80px"}}><i class="bi bi-chevron-right" aria-hidden="true" style={{color:"white"}}></i></button>
                    </div>
                </div>
            </div>
            </Container>
            <Container>
            <div id="pane-1">
            <Row>
                <Col md="auto"><br></br><span style={{color:"white"}}>Your Personalised <br></br> Looking Glass <br></br>Is Ready!</span></Col>
                <Col md="auto">
                <div className="preview-tab">
                    <button><i class="bi bi-box-arrow-up-right" style={{fontSize: "25px"}}></i><br></br><span>Open preview</span></button>
                </div>
                </Col>
                <Col>
                <div className="input-group-2">
                <div className="input-group-2-icon"><button onClick={() => Copy(1)}><i class="bi bi-files" aria-hidden="true" style={{fontSize:"25px"}}></i><span> Copy link</span></button></div>
                <div className="input-group-2-area"><input type="text" id="link" placeholder="Email Address" value="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650" flex-wrap="wrap"/></div>
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
                <div className="input-group-2-area"><input type="text" id="iframe" placeholder="Email Address" value="<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>" wrap="hard"/></div>
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
            <div className="pane-2">
            <a id="about"></a>
                <div className="left-pane">
                    <div id="line" style={{marginLeft:"0%"}}></div>
                    <h1>Curated For Your User,</h1>
                    <h1>Customised To Your Needs!</h1>
                    <br></br>
                    <br></br>
                    <Row>
                    <Col>
                        <h2><strong>Keep Your Readers Hooked</strong></h2>
                        <p>Have some groundbreaking news your readers shouldn’t miss? The Looking Glass creates a roundup of your stories to ensure your readers don’t miss these important stories. Simply enter your articles’ URL and topic name, and we will do the rest!</p>
                    </Col>
                    <Col>
                        <h2><strong>Streamline the Search</strong></h2>
                        <p>Nudge your users to keep on reading. The Looking Glass automatically scrapes related stories on a topic from your website or news partners’ website and displays it prominently to the users.</p>
                    </Col>
                    <Col>
                        <h2><strong>Ease of Use — for You</strong></h2>
                        <p>The Looking Glass is designed to work for news organisations like yours, to fit your needs. Learn in 4 easy steps. </p>
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
                    <img src={iphone} style={{width:"234.2px", height: "511.2px"}} />
                </div>
            </div>   

            
            <Container>
                <div className="pane-3">
                    <div className="title-1">
                    <a id="howitworks"></a>
                        <div id="line"></div>
                        <h1>How It Works</h1>
                    </div>
                    <div>
                    <Row>
                       <Col>
                        <div className="instruction-pane">
                            <span id="number">1</span>
                            <span id="name">
                                <h3>Build Your</h3>
                                <h3>Looking Glass</h3>
                            </span>
                            <p>Get a copy of a Google sheet by pressing the red button below. Then, on the Google Sheets interface, save a copy to your Google Drive with the “Make a copy” button.</p>
                            
                            <br></br>
                            <button id="btn-call-to-action" value="get-template">Get The Template &nbsp; &nbsp;<i className="bi bi-arrow-right" style={{fontSize:"20px"}}></i><a href="#"></a></button>
                        </div>
                       </Col>
                       <Col>
                        <div className="instruction-pane">
                            <span id="number">2</span>
                            <span id="name">
                                <h3>Tailor the Looking Glass</h3>
                                <h3>To Your Needs</h3>
                            </span>
                            <div id="resp-table" style={{marginTop: "5%"}}>
                                <div id="resp-table-header">
                                    <div className="table-header-cell">
                                        topic_name
                                    </div>
                                    <div className="table-header-cell">
                                        main_article_url
                                    </div>
                                    <div className="table-header-cell">
                                        global_coverage
                                    </div>
                                </div>
                                <div id="resp-table-body">
                                    <div className="resp-table-row">
                                        <div className="table-body-cell">Myammar</div>
                                        <div className="table-body-cell">https://lookingglass.com/1</div>
                                        <div className="table-body-cell">https://lookingglass.com/2</div>
                                    </div>
                                </div>
                            </div>
                            <p>Enter your article’s keyword in the first column, and the URL in the second column.</p>
                            <p> If you have any relevant stories you wish to feature, add the links in the third column.</p>
                            <div id="warning">
                                <span style={{color: "#C11010"}}>Note: </span><span>Don't change or remove any column headers in the spreadsheet. Don't leave any blank rows in your spreadsheet.</span>
                            </div>
                        </div>
                       </Col>       
                    </Row>
                    <Row>
                       <Col>
                        <div className="instruction-pane" style={{marginTop: "10%"}}>
                            <span id="number">3</span>
                            <span id="name">
                                <h3>Generate Your</h3>
                                <h3>Looking Glass Page</h3>
                            </span>
                            <p>Paste the spreadsheet URL to the box below and press the red button. Also, enter the URL to your newsroom’s logo. </p>
                            <div className="input-group input-group-mb-3 round" style={{marginTop: "20px"}}>
                                <input type="text" class="form-control round" placeholder="Google Spreadsheet URL" />
                                <input type="text" class="form-control round" placeholder="Image URL of Logo" />
                                <div class="input-group-append round">
                                    <button class="btn btn-outline-secondary round" style={{backgroundColor: "#C11010", width: "80px"}}><i class="bi bi-chevron-right" aria-hidden="true" style={{color:"white"}}></i></button>
                                </div>
                            </div>
                            <div id="warning">
                                <span style={{color: "#C11010"}}>Note: </span><span>To generate a new Looking Glass page, please use a new Google spreadsheet. </span>
                            </div>
                        </div>
                       </Col>
                       <Col>
                        <div className="instruction-pane" style={{marginTop: "10%"}}>
                            <span id="number">4</span>
                            <span id="name">
                                <h3>Your Looking Glass</h3>
                                <h3>Page Is Ready</h3>
                            </span>
                            <p style={{fontFamily: "RedHatDisplay", fontWeight: "400px"}}>Notify your readers! Paste the link to your social media accounts, newsletters or even Telegram channels.</p>
                            <div className="input-group-2" style={{height: "max-content"}}>
                            <div className="input-group-2-icon"><button><i class="bi bi-files" aria-hidden="true" style={{fontSize:"25px"}}></i><span> Copy link</span></button></div>
                            <div className="input-group-2-area"><input type="text" id="link" style={{background: "#f3f3f3"}} placeholder="Email Address" value="https://lookingglass.com/news/source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg" flex-wrap="wrap" readOnly /></div>
                            </div>
                            <p style={{fontFamily: "RedHatDisplay", fontWeight: "400px"}}>Copy this embed code and paste it on your site where you want to view the Looking Glass (just like a Youtube video).</p>
                            <div className="input-group-2" style={{height: "max-content"}}>
                            <div className="input-group-2-icon"><button><i class="bi bi-files" aria-hidden="true" style={{fontSize:"25px"}}></i><span> Copy link</span></button></div>
                            <div className="input-group-2-area"><input type="text" id="iframe" style={{background: "#f3f3f3"}} placeholder="Email Address" value="<iframe src='https://lookingglass.com//news/source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>" wrap="hard" readOnly/></div>
                            </div>
                        </div>
                       </Col>       
                    </Row>
                    </div>
                </div>
            </Container>
            
            
            <Container>
            <div className="pane-4" style={{display: "none"}}>
                <div className="title-1">
                    <div id="line"></div>
                    <h1>Examples</h1>
                </div>
                <div style={{marginTop: "5%"}}>
                    <Row>
                        <Col>
                        <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" id="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col>
                        <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" id="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col>
                        <iframe src="https://www.youtube.com/embed/_Ah6fSDHTq4" id="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    <a id="examples"></a>
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