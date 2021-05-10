import React, { Component, useEffect, useState } from "react";
// import lg_logo from "../img/looking-glass@4x.png"
import smol_logo from "../img/smol-logo.png";
import cn_logo from "../img/conv-logo.svg"
import { ListGroup, Image } from 'react-bootstrap';
import '../css/topics.css'
import { readGoogleAsCSV } from '../core/Config';
import { Helmet } from "react-helmet";
import {
  useParams,
  // Link,
  useHistory,
  useLocation
} from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import Loading from './loading';



export default function Topics(props) {
  let curr_url = useLocation();
  console.log(curr_url.pathname);

  let { source } = useParams();
  const [topic_list, set_topic_list] = useState([]);
  const [visit_status, set_visit_status] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const data = await readGoogleAsCSV(source, true, '' ,'');
      set_topic_list(data.topics);
      set_visit_status(true);
    }
    fetchData();
  }, []);


  if (visit_status) {
    const header = topic_list[0]['header'] || "What's Treading?";
    const sub_header = topic_list[0]['subheader'] || "This Week";

    return (
      <div id="mobile">
      <div className="topic_page_overall" >

        <Helmet>
          <title>{header + " " + sub_header}</title>
        </Helmet>
          <Header header_content={topic_list} />
        <div className="topic_container">
          <div className="topiclist">
            <ListGroup variant="flush">
              {
                topic_list.map((item, i) =>
                  <TopicListItems topic_data={item} index={i} csv_source={source} home_url={curr_url} lang={props.language}/>)
              }
            </ListGroup>
          </div>
          <SearchBar translation={props.translation}/>
        </div>
      </div>
      </div>
    )
  }
  else {
    return (

      <div className="topic_page_overall" >
        <Loading />
      </div>
    )
  }
}

function TopicListItems(props) {
  const history = useHistory();
  let news_link = "/news/" + props.csv_source + "/" + props.topic_data.id + "/" +props.topic_data.topic_keyword.replace(' ', '+');
  if(props.lang!=='en'){
    news_link +="?lang="+props.lang;
  }
  if (props !== undefined) {
    return (
      <a href={news_link} onClick={() => history.push(props.home_url, { from: "Topics" })}>
        <ListGroup.Item>
          <Image className="topic_thumbnail" src={props.topic_data['fetched']['og']['image']} />{props.topic_data.topic_keyword}
        </ListGroup.Item></a>
    )
  }


}



function Header(props) {

  return (
    <div>
     <a href="" target="_blank">
      <div className="image-container">
       <img src={smol_logo} /></div></a>
      <div className="topic-page-tagline" style={{ textAlign: "none" }}>
        <div id="second-tagline"><strong>{props.header_content[0]['header'] || "What's Treading?"}</strong></div>
        <div id="first-tagline">{props.header_content[0]['subheader'] || "THIS WEEK"}</div>
      </div>
    </div>
  )

}

function SearchBar(props) {
  return (
    <div id="mobile">
      <div id="topic-search-container">
        <div className="search-section">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <SearchForm translation={props.translation('Search')}/>
            </ListGroup.Item>
          </ListGroup>
          <div className="news-org-logo">
            <span>&nbsp; <img src={cn_logo} /></span>
          </div>
        </div>
      </div>
    </div>
  )

}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', link: '' };
    // this.translation = '';
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

        <input id="search_input" type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.props.translation} />

        <button id="search_button"><BiSearch size={25} /><input type="submit" value="" /></button>
      </form>

    );
  }
}

