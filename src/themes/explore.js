import React from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Explore from "../components/Explore/Explore";
import Footer from "../components/Footer/Footer";
import Scrollup from "../components/Scrollup/Scrollup";

const ExplorePage = ({ page, filter }) => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Explore" subpage="Explore" page={page} />
      <Explore filter={filter} />
      <Footer />
      <Scrollup />
    </div>
  );
};

export default ExplorePage;
