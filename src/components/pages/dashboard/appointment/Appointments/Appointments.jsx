import React, { PropTypes, Component } from 'react';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from 'react-bootstrap';
import AppointmentStore from '../../../../../Store/AppointmentStore';
import { deleteAppointment } from '../../../../../Action/AppointmentAction';
import AppointmentListItem from './AppointmentListItem'
import lodash from 'lodash';

var Appointments = React.createClass({
  /*constructor() {
    super();
    this.getAppointmentList = this.getAppointmentList.bind(this);
    this.state = {
      appointmentList: AppointmentStore.getAppointmentList(),
    };
  },*/

	getInitialState() {
	  	return { 
	      appointmentList: AppointmentStore.getAppointmentList()
	  	};
	},

  componentWillMount() {
    AppointmentStore.on("change", this.getAppointmentList);
  },

  componentWillUnmount() {
    AppointmentStore.removeListener("change", this.getAppointmentList);
  },

  getAppointmentList() {
    this.setState({
      appointmentList: AppointmentStore.getAppointmentList(),
    });
  },


handleDeleteFunc(id) {
	console.log("delete");
	deleteAppointment(id);
},
  /*reloadTodos() {
    AppointmentActions.reloadTodos();
  }*/  
 
  render: function() {
	const { appointmentList } = this.state;
	const sortedAppointmentList = lodash.orderBy(appointmentList, 'id', 'asc');
    const AppointmentComponents = Object.entries(sortedAppointmentList).map((appointment) => {
        return <AppointmentListItem handleDelete={this.handleDeleteFunc.bind(this, appointment[1].id)} key={appointment[1].id} {...appointment[1]}/>;
    });

    return (
      <div>
		<div className="col-lg-12">
			<div className="page-header">
				<h1>Manage Appointments</h1>
			</div>

	        <div className="panel panel-default">
	        	<div className="panel-heading">
	        		<span className="panel-title">Appointments List</span>
	        	</div>
	        	<div className="panel-body">
			        <div className="table-responsive">
				        <table className="table table-striped table-bordered table-hover">
				        	<tr>
				        		<th>id</th>
						        <th>patientId</th>
						        <th>docId</th>
						        <th>hospitalId</th>
						        <th>time</th>
						        <th>date</th>
						        <th>delete</th>
						        <th>update</th>
				        	</tr>
				        	{AppointmentComponents}
				        </table>
			        </div>
		        </div>
	        </div>
      	</div>
      </div>
    );
  }
});

window.lodash = lodash;
export default Appointments;