import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PrePatientAppointment = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./PatientAppointment.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PrePatientAppointment;