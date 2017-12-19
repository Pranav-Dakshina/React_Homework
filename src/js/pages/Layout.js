import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Nav from "../components/layout/Nav";
import DisplayUser from "../pages/DisplayUser";
import AddUser from "../pages/AddUser";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <Switch>
                <Route exact path="/" component={DisplayUser} />
                <Route path="/AddUser" component={AddUser} />
              </Switch>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
