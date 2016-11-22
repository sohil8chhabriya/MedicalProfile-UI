import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreAnalytics = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Analytics.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreAnalytics;