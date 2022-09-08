import * as React from "react";
import Services from "./Services";
import { About } from "./About";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Credits from "./Credits";
interface MainStates {
  activeWindows: ACTIVE_WINDOW;
  titles: TITLES;
  title: string;
}

interface ACTIVE_WINDOW {
  services: boolean;
  aboutus: boolean;
  impressum: boolean;
  datenschutz: boolean;
}

interface TITLES {
  services: string;
  aboutus: string;
  impressum: string;
  datenschutz: string;
}

export default class Main extends React.Component<{}, MainStates> {

  render() {

    return (
      <HashRouter>
        <div className="container-fluid px-0 mb-5">
        <Navbar></Navbar>
          {
            <Routes>
              <Route path={`/Services`} element={<Services />} />
              <Route path={`/About`} element={<About />} />
              <Route path={`/Datenschutz`} element={<Datenschutz />} />
              <Route path={`/Impressum`} element={<Impressum />} />
              <Route path={`/Credits`} element={<Credits />} />
              <Route path={`/*`} element={<Home />} />
            </Routes>
          }
          <Footer></Footer>
        </div>
      </HashRouter>
    );
  }
}