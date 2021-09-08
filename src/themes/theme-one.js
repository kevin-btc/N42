import React, { Component } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Explore from "../components/Explore/Explore";
import Footer from "../components/Footer/Footer";
import Scrollup from "../components/Scrollup/Scrollup";

class ThemeOne extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Hero />
        <Explore loadBtn />
        <Footer />
        <Scrollup />
      </div>
    );
  }
}

export default ThemeOne;
