import React from "react";

import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";

export default class AddUser extends React.Component {
  constructor(){
    super();

    this.state={
      firstname: null,
      lastname: null,
      address: null,
      toggleAddUser: false,
    };
    this.formSubmit = this.formSubmit.bind(this);

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
  }

  componentWillMount() {
    this.setState({
      toggleAddUser: false,
    });
  }

  formSubmit(event) {
    event.preventDefault();

    var data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
    };

    UserActions.createUser(data);

    this.setState({
      toggleAddUser: true,
    });
  }

  handleFirstName(event) {
    this.setState({
      firstname: event.target.value,
    });
  }

  handleLastName(event) {
    this.setState({
      lastname: event.target.value,
    });
  }

  handleAddress(event) {
    this.setState({
      address: event.target.value,
    });
  }

  render() {
    return (
      <div class="container">
        <h1>Add User</h1>
          {this.state.toggleAddUser
            ? <h4>User added successfully</h4>
            : <div></div>
          }
        <form class="form-horizontal" onSubmit={this.formSubmit}>
          <div class="form-group">
            <label class="control-label col-sm-2" for="firstname">FirstName:</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="firstname" onChange={this.handleFirstName} />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="lastname">LastName:</label>
            <div class="col-sm-5">
              <input type="text" class="form-control col-lg-3" id="lastname" onChange={this.handleLastName} />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="address">Address:</label>
            <div class="col-sm-5">
              <input type="text" class="form-control col-lg-3" id="address" onChange={this.handleAddress} />
            </div>
          </div>
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
