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
// import FreeScroll from "./pages/content"
// import "./css/common.css";
// import "./css/features.css";
// import "./css/highlight.css";
import News from "./pages/news";
import PastConv from "./pages/pastConv";
import 'bootstrap/dist/css/bootstrap.min.css';
import Global from "./pages/global"
import Video from "./pages/videos";
import Landing from "./pages/landing";
import Topics from "./pages/topics";


// logo
import lg_logo from "./img/looking-glass@4x.png"
import nml_log from "./img/NewsMediaLabLogo.png"




export default function App() {
  const data = {
    "topic_word": "Myanmar Coup",
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

        <Route path="/news/:source">
          <News data={data}/>
          <PastConv />
          {/* <Global /> */}
          <Video />
        </Route>

        <Route path="/topics/:source">
          <Topics data={data}/>
        </Route>
        
        <Route path="/">
          <Loading />
          <Landing />
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

function Loading() {

  // transition: "opacity 5s",opacity:"0"
  return (
      <div id="loading_page" style={{ position: "relative", height: "100%",transition: "opacity 5s",opacity:"0"}}>
          <div style={{ position: "absolute" }}>
              <img src={lg_logo} style={{ width: '50%', marginLeft: "25%", marginTop: "50%" }} />
              <div style={{ marginTop: "5%", textAlign: "center", textSizeAdjust: "auto" }}>For <span style={{ color: "rgb(161,64,72)" }}>The Conversation</span></div>
              <div style={{ marginTop: "35%", textAlign: "center", textSizeAdjust: "auto" }}> Powered by </div>
              <img src={nml_log} style={{ width: '50%', marginLeft: "25%" }} />
          </div>
      </div>
  )

}

