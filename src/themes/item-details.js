import React, { Component } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemDetail from "../components/ItemDetails/ItemDetails";
import Footer from "../components/Footer/Footer";
import Scrollup from "../components/Scrollup/Scrollup";

class ItemDetails extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Breadcrumb title="Details" subpage="Explore" page="Details" />
        <ItemDetail />
        <Footer />
        <Scrollup />
      </div>
    );
  }
}

export default ItemDetails;
