import dispatcher from "../dispatcher";

export function createAppointment(appointmentObj) {
  dispatcher.dispatch({
    type: "CREATE_APPOINTMENT",
    appointmentObj
  });
}

export function deleteAppointment(id) {
  console.log("deleteAppointment");
  dispatcher.dispatch({
    type: "DELETE_APPOINTMENT",
    id
  });
}

export function updateAppointment(id) {
  dispatcher.dispatch({
    type: "UPDATE_APPOINTMENT",
    id,
    appointmentObj
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}