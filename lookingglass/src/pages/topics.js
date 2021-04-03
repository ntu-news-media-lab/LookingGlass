import React, { Component, useEffect, useState } from "react";
import lg_logo from "../img/looking-glass@4x.png"
import cn_logo from "../img/conv-logo.svg"
import { ListGroup, Image } from 'react-bootstrap';
import '../css/topics.css'
import { readGoogleAsCSV } from '../core/Config';
import {
  useParams,
  Link
} from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import Loading from './loading';



export default function Topics(props) {

  let { source } = useParams();
  const [topic_list, set_topic_list] = useState([]);
  const [fetch_info, set_fetch_info] = useState([]);
  const [fetch_all, set_fetch_all] = useState({});
  // const [topics,set_topics] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await readGoogleAsCSV(source, '');
      set_topic_list(data.topics);
    }
    fetchData();
  }, []);


  return (
    <div class="topic_page_overall" >
    <Loading />
    <div class="topic_container">
      <Header />
      <div className="topiclist">
        <ListGroup variant="flush">
          {
            topic_list.map((item, i) => 
            <TopicListItems topic_data={item} index={i} csv_source={source} />)
          }
        </ListGroup>
      </div>
      <SearchBar />
    </div>
    </div>
  )

}

function TopicListItems(props){
  let news_link = "/news/" + props.csv_source + "/" + props.topic_data.topic_keyword.replace(' ','+');
  if (props!==undefined){
    
    return (
      <a href={news_link} >
        <ListGroup.Item>
          <Image className="topic_thumbnail" src={props.topic_data['fetched']['og']['image']}  />{props.topic_data.topic_keyword}
        </ListGroup.Item></a>
    )
  }
  
  
}



function Header() {
  return (
    <div>
      <img
        src={lg_logo}
        style={{
          marginLeft: "40%",
          maxWidth: "20%",
          marginTop: "5%"
        }} />
      <div className="topic-page-tagline">
        <div id="first-tagline">THIS WEEK</div>
        <div id="second-tagline">What's Trending</div>
      </div>
    </div>
  )

}

function SearchBar() {
  return (

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
          }} />
      </div>
    </div>

  )

}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', link: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    let link = `https://theconversation.com/id/search?q=${event.target.value}`;
    this.setState({ link: link });

  }

  handleSubmit(event) {

    window.open(this.state.link);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input id="search_input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search articles" />

        <button id="search_button"><BiSearch size={25} /><input type="submit" value="" /></button>
      </form>

    );
  }
}