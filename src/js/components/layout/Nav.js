import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const userClass = location.pathname === "/" ? "active" : "";
    const addUserClass = location.pathname.match(/^\/AddUser/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={userClass}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>Display User</Link>
              </li>
              <li class={addUserClass}>
                <Link to="/AddUser" onClick={this.toggleCollapse.bind(this)}>Add User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
