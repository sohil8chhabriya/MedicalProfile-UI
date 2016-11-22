import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    super()
    //this.appointmentList = require('../Data/appointmentList.json');
    //console.log("appointmentList>> " + this.appointmentList);
  }


  getUsersObject() {
    return require('../Data/userList.json');
  }

  getUserDetails(id){
    var userdetails = [];
    Object.entries(this.getUsersObject()).map((user) => {
        if (user[1].id.toString() === id) {
          userdetails = user[1];
        }
    });
    return userdetails;
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_USER": {
        this.createAppointment(action.id);
        break;
      }
      case "DELETE_USER": {
        this.removeAppointment(action.id);
        //this.createTodo(action.text);
        break;
      }
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;