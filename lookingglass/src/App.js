import React,{ useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import "./core/i18nextConf"
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./pages/news";
import Video from "./pages/videos";
import Landing from "./pages/landing";
import Topics from "./pages/topics";
import End from "./pages/end";
import SuccessDisplay from './pages/test2';


// logo

import nml from "./img/NewsMediaLabLogo.png";
import Pastconv from "./pages/pastConv";
import Global from "./pages/global";

// translation 
import useQuery from './core/helper';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";


// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }


export default function App() {
  // const data = {
  //   "topic_word": "Myanmar Coup",
  //   "img_src": "https://images.theconversation.com/files/382241/original/file-20210203-21-90gvwb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
  //   "headline": "Myanmar coup: how the military has held onto power for 60 years",
  //   "summary": "After arresting Aung San Suu Kyi once again, the army is clearly not ready to relinquish control.",
  //   "author_icon": "https://cdn.theconversation.com/avatars/960001/width170/file-20200207-27560-1cvbuj9.jpg",
  //   "author_name": "Michael W. Charney",
  //   "author_bio": "Professor of Asian and Military History, SOAS, University of London"
  // }

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <SuccessDisplay />
          {/* <About /> */}
        </Route>

        {/* <Route path="/test1">
        <Child />
        </Route> */}

        <Route path="/news/:source/:id/:topic">
         <Content/>
        </Route>

      <Route path="/topics/:source">
        <TopicsContainer/>
      </Route>

      {/* <Route path="/pastcov">
        <div className="mobile-container">
          <Pastconv />
        </div>
      </Route> */}
{/* 
      <Route path="/global/:topic">
      </Route> */}

      <Route path="/">
        <Landing />
      </Route>

      </Switch>
    </Router>
  );
}


function Content(props) {

  let query = useQuery();
  const [lang, set_lang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    let query_lang = query.get("lang");
    if (query_lang) {
      set_lang(query_lang);
      i18next.changeLanguage(query_lang);
    }
    else {
      set_lang('en');
    }
  }, []);

  return (
    <div className="mobile-container">
      <News translation={t} language={lang}/>
      <Global translation={t} />
      <Video translation={t}/>
      <End translation={t}/>
      <Footer translation={t}/>
    </div>

  )
}


function TopicsContainer(props) {
  let query = useQuery();
  const [lang, set_lang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    let query_lang = query.get("lang");
    if (query_lang) {
      set_lang(query_lang);
      i18next.changeLanguage(query_lang);
    }
    else {
      set_lang('en');
    }
  }, []);
  return (
    <div className="mobile-container">
          <Topics translation={t} language={lang}/>
        </div>

  )
}



function Footer() {

  return (
    <footer>
      <span>Copyright 2021 &copy; The Looking Glass</span>
      <span>&emsp; Supported by &emsp;<img src={nml} style={{ width: "auto", height: "10px" }} alt="nml" /></span>
    </footer>
  )
}

