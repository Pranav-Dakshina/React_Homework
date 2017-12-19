import dispatcher from "../dispatcher";

export function createUser(data) {
  dispatcher.dispatch({
    type: "CREATE_USER",
    data,
  });
}

export function deleteUser(id) {
  dispatcher.dispatch({
    type: "DELETE_USER",
    id,
  });
}

export function updateValue(data) {
  dispatcher.dispatch({
    type: "UPDATE_VALUE",
    data,
  });
}
