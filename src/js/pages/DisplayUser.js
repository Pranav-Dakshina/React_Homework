import React from "react";

import User from "../components/User";
import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";

export default class DisplayUser extends React.Component {
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);
    this.state = {
      users: UserStore.getAll(),
    };
  }

  componentWillMount() {
    UserStore.on("change", this.getUsers);
  }

  componentWillUnmount() {
    UserStore.removeListener("change", this.getUsers);
  }

  getUsers() {
    this.setState({
      users: UserStore.getAll(),
    });
  }

  render() {
    const { users } = this.state;
    const UserComponents = users.map((user, index) => {
        return <User key={index} idx={index} {...user}/>;
    });

    return (
      <div>
        <h1>Display User Details</h1>
        <h6>Click on the fields to update the value</h6>
        <h6>Click on the &times; to remove the entry</h6>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {UserComponents}
          </tbody>
        </table>
      </div>
    );
  }
}
