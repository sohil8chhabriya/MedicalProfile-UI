import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

import $ from 'jquery';

class AppointmentStore extends EventEmitter {
  constructor() {
    super()
    /*this.appointmentList = [
      {
        "id": 1,
        "patientId": 1,
        "docId": 1,
        "hospitalId": 1,
        "time": "14:00",
        "date": "02 january 2016"
      },
      {
        "id": 2,
        "patientId": 2,
        "docId": 2,
        "hospitalId": 2,
        "time": "15:00",
        "date": "02 january 2016"
        
      }
    ]*/

    //var fs = require('fs');
    //this.appointmentList = JSON.parse(fs.readFileSync('./appointmentList.json', 'utf8'));
    this.appointmentList = require('../Data/appointmentList.json');
    console.log("appointmentList>> " + this.appointmentList);
  }

  removeAppointment(id) {
    console.log("removeAppointment", this.appointmentList);
    var newAppointment = [];
    Object.entries(this.appointmentList).map((appointment) => {
        if (appointment[1].id !== id) {
          newAppointment.push(appointment[1])
        }
        else {
          console.log("matchFound" + appointment[1].id);  
        }
    });
    this.testFileWrite();
    //this.replaceFileContent(newAppointment);
    console.log(newAppointment);
    this.emit("change");
  }

  testFileWrite() {
    console.log("testFileWrite");
    var fs = require('fs');
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    }); 
  }

  replaceFileContent(content) {
    var fs = require('fs');
    fs.readFile('../Data/appointmentList.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      fs.writeFile(someFile, data, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
  }

  /*createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }*/

  getAppointmentList() {
    return this.appointmentList;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_APPOINTMENT": {
        this.removeAppointment(action.id);
        break;
      }
      case "DELETE_APPOINTMENT": {
        this.removeAppointment(action.id);
        //this.createTodo(action.text);
        break;
      }
      case "RECEIVE_APPOINTMENT_LIST": {
        this.appointmentList = action.appointmentList;
        this.emit("change");
        break;
      }
    }
  }

}

const appointmentStore = new AppointmentStore;
dispatcher.register(appointmentStore.handleActions.bind(appointmentStore));

export default appointmentStore;