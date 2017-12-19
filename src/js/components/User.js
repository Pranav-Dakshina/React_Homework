import React from "react";

import * as UserActions from "../actions/UserActions";

export default class User extends React.Component {
  constructor() {
    super();

    this.state = {
      firstname: null,
      lastname: null,
      address: null,
      toggleEdit: false,
    }
    this.deleteUser = this.deleteUser.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
  }

  deleteUser() {
    UserActions.deleteUser(this.props.idx);
  }

  handleUpdate() {
    this.setState({
      toggleEdit: true
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

  updateValue(event) {
    event.preventDefault();

    var data = {
      idx: this.props.idx,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
    }

    UserActions.updateValue(data);
    this.setState({
      toggleEdit: false
    });
  }

  render() {
    const { firstname, lastname, address } = this.props;

    return (
      <tr>
        <td onClick={this.handleUpdate}>{
          this.state.toggleEdit
          ? <input type="text" focus="focused" onChange={this.handleFirstName} placeholder={firstname} />
          : firstname}
          </td>
        <td onClick={this.handleUpdate}>{
          this.state.toggleEdit
          ? <input type="text" focus="focused" onChange={this.handleLastName} placeholder={lastname} />
          : lastname}
        </td>
        <td onClick={this.handleUpdate}>{
          this.state.toggleEdit
          ? <input type="text" focus="focused" onChange={this.handleAddress} placeholder={address} />
          : address}
        </td>
        {
          this.state.toggleEdit
          ? <td> <button class="btn btn-primary" onClick={this.updateValue}>update</button> </td>
          : <td> <button class="btn btn-default" onClick={this.deleteUser}>&times;</button></td> }
      </tr>
    );
  }
}
