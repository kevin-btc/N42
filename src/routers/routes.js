import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import Explore from "../themes/explore";
import ItemDetails from "../themes/item-details";
import Contact from "../themes/contact";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route
              exact
              path="/explore-1"
              component={() => (
                <Explore page="Precious materials NFT" filter="precious" />
              )}
            />
            <Route
              exact
              path="/explore-2"
              component={() => <Explore page="Funny NFT" filter="funny" />}
            />
            <Route
              exact
              path="/explore-3"
              component={() => <Explore page="Flag NFT" filter="flag" />}
            />
            <Route
              exact
              path="/explore-4"
              component={() => (
                <Explore page="Psychedelic NFT" filter="psychedelic" />
              )}
            />
            <Route
              exact
              path="/explore-5"
              component={() => <Explore page="Nature NFT" filter="nature" />}
            />
            <Route
              exact
              path="/explore-6"
              component={() => (
                <Explore page="Original NFT" filter="original" />
              )}
            />
            <Route exact path="/item-details" component={ItemDetails} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;
