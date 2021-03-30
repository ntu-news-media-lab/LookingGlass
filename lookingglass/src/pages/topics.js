import React, { Component, useEffect,useState} from "react";
import lg_logo from "../img/looking-glass@4x.png"
import nml_log from "../img/NewsMediaLabLogo.png"
import ReactDOM from 'react-dom'
import { ListGroup, Image  } from 'react-bootstrap';
import '../css/topics.css'
import {readGoogleAsCSV} from '../core/Config';
import {
    useParams
  } from "react-router-dom";



export default function Topics(props) {

    let { source } = useParams();

    const [topic_list,set_topic_list] = useState([]);
    useEffect(() => {
        readGoogleAsCSV(source, '')
        .then(
        data => set_topic_list(data),
   
        )
    }, []);

    
    return (
        <div>
        <div className="topiclist">
            <ListGroup variant="flush">

            <a  href="https://www.google.com"> <ListGroup.Item  >
            <Image src="holder.js/171x180" roundedCircle /> Myanmar 
                </ListGroup.Item></a>
                <a  href="https://www.google.com"> <ListGroup.Item  >
            <Image src="holder.js/171x180" roundedCircle /> Vaccine
                </ListGroup.Item></a>
                <a  href="https://www.google.com"> <ListGroup.Item  >
            <Image src="holder.js/171x180" roundedCircle /> Joe Biden
                </ListGroup.Item></a>
                <a  href="https://www.google.com"> <ListGroup.Item  >
            <Image src="holder.js/171x180" roundedCircle /> Chine
                </ListGroup.Item></a>
                <a  href="https://www.google.com"> <ListGroup.Item  >
            <Image src="holder.js/171x180" roundedCircle /> Suez Canal
                </ListGroup.Item></a> 

    
            </ListGroup>

        </div>
           
        </div>
    )

}

