import React, { Component } from "react";
import { Container, Grid, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/landing.css";
import logo from "../img/looking-glass@4x.png";


export default function Landing(props) {
    return (
    <div>
        <div className="content">
            <div className="img_logo">
                <a href="#"><img src={logo} style={{height: "50px", width: "auto"}}></img></a>
            </div>
            <div className="navbar">
                <a href="#about">About</a>
                <a href="#howitworks">How it works</a>
                <a href="#examples">Example</a>
            </div>
            
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
            <div className="info-tab">
            <Row>
                <Col md="auto"><br></br>Your Personalised <br></br> Looking Glass <br></br>Is Ready!</Col>
                <Col md="auto">
                <div className="preview-tab">
                    <button><i class="bi bi-box-arrow-up-right" style={{fontSize: "25px"}}></i><br></br><span>Open preview</span></button>
                </div>
                </Col>
                <Col>
                <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg" style={{textAlign: "center"}}><i class="bi bi-files" aria-hidden="true"></i><span style={{fontSize: "14px"}}> Copy link</span></span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650" />
                </div>
                </Col>
                <Col>
                <div class="input-group input-group-lg">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg"><button><i class="bi bi-files" aria-hidden="true"></i><span style={{fontSize: "14px"}}> Copy link</span></button></span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1aK824tSDEO4L8HARACYyPx5c3VLLK2jQ8vd8aPamqNg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>" />
                </div> 
                </Col>
                        
            </Row>
                
            </div>
            </Container>
            <a id="howitworks"></a>

            <a id="examples"></a>
        </div>
        </div>
    )
}