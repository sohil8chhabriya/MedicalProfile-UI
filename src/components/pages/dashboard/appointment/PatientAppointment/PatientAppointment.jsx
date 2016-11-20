import React, { PropTypes, Component } from 'react';
import AppointmentFormComponent from './AppointmentFormComponent'

var PatientAppointment = React.createClass({
  render() {
    return (
      <div>
        <AppointmentFormComponent />
      </div>
    );
  }

});

export default PatientAppointment;