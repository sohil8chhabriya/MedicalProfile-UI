import React from 'react';
import AsyncElement from '../../../../common/AsyncElement';

var PreAppointmentReport = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./AppointmentReport.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreAppointmentReport;