import React from 'react';
import AsyncElement from '../../../../common/AsyncElement';

var PreAppointments = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Appointments.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreAppointments;