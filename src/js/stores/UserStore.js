import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.users = [];
  }

  createUser(data) {
    const id = Date.now();

    var firstname = data.firstname;
    var lastname = data.lastname;
    var address = data.address;

    this.users.push({
      id,
      firstname,
      lastname,
      address
    });

    this.emit("change");
  }

  deleteUser(id) {

    this.users.splice(id, 1);

    this.emit("change");
  }

  updateValue(data) {
    const id = Date.now();

    var idx = data.idx;

    if (data.firstname != null) {
      this.users[idx].firstname = data.firstname;
      this.users[idx].id = id;
    }

    if (data.lastname != null) {
      this.users[idx].lastname = data.lastname;
      this.users[idx].id = id;
    }

    if (data.address != null) {
      this.users[idx].address = data.address;
      this.users[idx].id = id;
    }

    this.emit("change");
  }

  getAll() {
    return this.users;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_USER": {
        this.createUser(action.data);
        break;
      }
      case "DELETE_USER": {
        this.deleteUser(action.id);
        break;
      }
      case "UPDATE_VALUE": {
        this.updateValue(action.data);
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
