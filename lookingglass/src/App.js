import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";
import { makeGoogleCSVURL } from "./core/Config"
// import FreeScroll from "./pages/content"
import Loading from "./pages/loading";
// import "./css/common.css";
// import "./css/features.css";
// import "./css/highlight.css";
import Topic from "./pages/topics";
import PastConv from "./pages/pastConv";
import 'bootstrap/dist/css/bootstrap.min.css';
import Global from "./pages/global"
import Video from "./pages/videos"



export default function App() {
  const data = {
    'topic_word': 'Myanmar Coup',
  "img_src": "https://images.theconversation.com/files/382241/original/file-20210203-21-90gvwb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
"headline":"Myanmar coup: how the military has held onto power for 60 years",
"summary":"After arresting Aung San Suu Kyi once again, the army is clearly not ready to relinquish control.",
"author_icon":"https://cdn.theconversation.com/avatars/960001/width170/file-20200207-27560-1cvbuj9.jpg",
"author_name":"Michael W. Charney",
"author_bio":"Professor of Asian and Military History, SOAS, University of London"}
    
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
          
        </Route>
        <Route path="/topics">
          <Topic data={data}/>
          <PastConv />
          <Global />
          <Video />
        </Route>
        <Route path="/">
          <Loading />
          
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {

  return (

    <div><h2>Home</h2></div>
  );
}

function About() {
  return <h2>About</h2>;
}

