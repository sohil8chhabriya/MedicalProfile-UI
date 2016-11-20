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
window.React = React
export default PatientAppointment;