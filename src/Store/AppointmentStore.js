import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import lodash from 'lodash';

class AppointmentStore extends EventEmitter {
  constructor() {
    super()
    //this.appointmentList = require('../Data/appointmentList.json');
    //console.log("appointmentList>> " + this.appointmentList);
  }

  removeAppointment(id) {
    console.log("removeAppointment", this.getAppointmentList());
    var newAppointment = [];
    Object.entries(this.getAppointmentList()).map((appointment) => {
        if (appointment[1].id !== id) {
          newAppointment.push(appointment[1])
        }
    });
    console.log(newAppointment);
    this.emit("change");
  }

  getAppointmentList() {
    return require('../Data/appointmentList.json');
  }

  getAppointmentSummaryObject() {
    return require('../Data/userDiagonisisReport.json');
  }

  getCount(region, disease, id) {
	  var diseasesCount = require('../Data/analytics-disease.json');
	  var regionsCount = require('../Data/analytics-region.json');
	  var _region = this.fetchRegionCount(region, regionsCount, id);
	  var _disease = this.fetchDiseaseCount(disease, diseasesCount, id);
	  return _region + _disease;
  }
  
  fetchRegionCount(region, data, id){
	  var count = 0;
	  Object.entries(data).map((datum) => {
        if (datum[1].region === region) {
		  if(id === "dtr") {
			  count = datum[1].total;
		  }
		  if(id === "adtr") {
			  count = datum[1].totaladmitted;
		  }
		  if(id === "ddtr") {
			  count = datum[1].totaldied;
		  }
		}
	  });
	  return count;
  }
  
    fetchDiseaseCount(disease, data, id){
	  var count = 0;
	  Object.entries(data).map((datum) => {
        if (datum[1].disease === disease) {
		  if(id === "dtr") {
			  count = datum[1].total;
		  }
		  if(id === "adtr") {
			  count = datum[1].totaladmitted;
		  }
		  if(id === "ddtr") {
			  count = datum[1].totaldied;
		  }
		}
	  });
	  return count;
  }
  
  fetchAppointmentListofUser(id) {
    var appointmentSummary = [];
    Object.entries(this.getAppointmentList()).map((summary) => {
        if (summary[1].patientId.toString() === id) {
          appointmentSummary.push(summary[1])
        }
    });
    return lodash.orderBy(appointmentSummary, 'id', 'asc');
  }

  fetchAppointmentById(id) {
    var appointmentSummary = [];
    Object.entries(this.getAppointmentList()).map((appointment) => {
        if (appointment[1].id.toString() === id) {
          appointmentSummary.push(appointment[1])
        }
    });
    return appointmentSummary[0];
  }

  fetchUserAppointmentSummaryById(id) {
    var appointmentSummary = [];
    Object.entries(this.getAppointmentSummaryObject()).map((summary) => {
        if (summary[1].appointmentId.toString() === id) {
          appointmentSummary.push(summary[1])
        }
    });
    return appointmentSummary[0];
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_APPOINTMENT": {
        this.createAppointment(action.id);
        break;
      }
      case "DELETE_APPOINTMENT": {
        this.removeAppointment(action.id);
        //this.createTodo(action.text);
        break;
      }
    }
  }

}

const appointmentStore = new AppointmentStore;
dispatcher.register(appointmentStore.handleActions.bind(appointmentStore));

export default appointmentStore;