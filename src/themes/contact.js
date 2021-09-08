import React, { Component } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ContactSection from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Scrollup from "../components/Scrollup/Scrollup";

class Contact extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Breadcrumb title="Contact" subpage="Pages" page="Contact" />
        <ContactSection />
        <Footer />
        <Scrollup />
      </div>
    );
  }
}

export default Contact;
