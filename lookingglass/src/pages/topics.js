import React, { Component, useEffect, useState } from "react";
import lg_logo from "../img/looking-glass@4x.png"
import cn_logo from "../img/conv-logo.svg"
import { ListGroup, Image } from 'react-bootstrap';
import '../css/topics.css'
import { readGoogleAsCSV } from '../core/Config';
import {Helmet} from "react-helmet";
import {
  useParams,
  Link,
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
  // const [fetch_info, set_fetch_info] = useState([]);
  // const [fetch_all, set_fetch_all] = useState({});
  const [visit_status, set_visit_status] = useState(false);
  // const [topics,set_topics] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await readGoogleAsCSV(source, '');
      set_topic_list(data.topics);
      set_visit_status(true);
    }
    fetchData();
  }, []);


  if (visit_status) {
    const header = topic_list[0]['header'] || "What's Treading?";
    const sub_header = topic_list[0]['subheader'] || "This Week";

    return (
      <div className="topic_page_overall" >
        
    <Helmet>
        <title>{ header + " " + sub_header}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral" />
        <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."/>
        <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg" />
    </Helmet>
        <div className="topic_container">
          <Header header_content={topic_list}/>
          <div className="topiclist">
            <ListGroup variant="flush">
              {
                topic_list.map((item, i) =>
                  <TopicListItems topic_data={item} index={i} csv_source={source} home_url={curr_url}/>)
              }
            </ListGroup>
          </div>
          <SearchBar />
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
  // function pushHistory(a, b) {
        
  // }

  let news_link = "/news/" + props.csv_source + "/" + props.topic_data.topic_keyword.replace(' ', '+');
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
      <img
        src={lg_logo}
        style={{
          marginLeft: "40%",
          maxWidth: "20%",
          marginTop: "5%"
        }} />
      <div className="topic-page-tagline">
        
        <div id="second-tagline">{props.header_content[0]['header'] || "What's Treading?"}</div>
        <div id="first-tagline">{props.header_content[0]['subheader'] || "THIS WEEK"}</div>
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

