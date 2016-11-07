import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreUserProfile = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./UserProfile.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreUserProfile;