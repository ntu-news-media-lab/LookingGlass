import React, { Component, useEffect,useState,Link} from "react";
import lg_logo from "../img/looking-glass@4x.png"
import cn_logo from "../img/conv-logo.svg"

import ReactDOM from 'react-dom'
import { ListGroup, Image ,Button } from 'react-bootstrap';
import '../css/topics.css'
import {readGoogleAsCSV} from '../core/Config';
import {
    useParams
  } from "react-router-dom";
import {BiSearch } from 'react-icons/bi';



export default function Global(props) {

    let { source } = useParams();
    const [topic_list,set_topic_list] = useState([]);
    const [fetch_info,set_fetch_info] = useState([]);
    // const [topics,set_topics] = useState([]);
    let img_url = [];
    let topics = [];



    useEffect(() => {
        const fetchData = async () => {
           const data = await readGoogleAsCSV(source, '');
           set_fetch_info(data.fetched_info);

            set_topic_list(data.topics);
        }
        fetchData();
      }, []);

    return (
        <div class="topic_container">
        <Header />
        <div className="topiclist">
            <ListGroup variant="flush">
            
            {  
                fetch_info.map((item,i) => <TopicListItems topic_data={item}/>)
                
            }
            
            </ListGroup>
            
    
    
        </div>

        <SearchBar/>
        
       
        
        </div>
    )

}

 const TopicListItems=(props)=> {
     return(
        <a href={props.topic_data.og.url} >
        <ListGroup.Item> 
            <Image className="topic_thumbnail" src={props.topic_data.og.image} roundedCircle />{props.topic_data.topic}
        </ListGroup.Item></a>
     )
 }



 function Header(){
    return(
      <div>
      <img 
      src={lg_logo} 
      style={{marginLeft:"40%",
              maxWidth: "20%",
              marginTop: "5%"}}   />
      <div className="topic-page-tagline">
        <div id="first-tagline">THIS WEEK</div>
        <div id="second-tagline">What's Trending</div>
      </div>
      </div>
    )
   
  }

  function SearchBar(){
    return(

        <div className="search-section">
        <ListGroup variant="flush">
      <ListGroup.Item> 
      <SearchForm />
      </ListGroup.Item> 
       </ListGroup>
       <div className="news-org-logo"> 
       <span>on  </span>


        <img 
            src={cn_logo} 
            style={{
                    maxWidth: "50%",
              }}/> 
        </div>
        
       
        </div>
      
    )
   
  }

  class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '',link:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      let link = `https://theconversation.com/id/search?q=${event.target.value}`;
      this.setState({link:link});
      
    }
  
    handleSubmit(event) {

       window.open(this.state.link);
       event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search articles" />
        
        <button ><BiSearch size={25}/><input type="submit" value="" /></button>
        </form>
        
        
    
        
      );
    }
  }