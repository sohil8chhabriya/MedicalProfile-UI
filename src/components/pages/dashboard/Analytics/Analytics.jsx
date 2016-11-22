import React, { PropTypes, Component } from 'react';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from 'react-bootstrap';
import { deleteAppointment } from '../../../../Action/AppointmentAction';
import AppointmentStore from '../../../../Store/AppointmentStore';
import AppointmentListItem from '../appointment/Appointments/AppointmentListItem'

var Analytics = React.createClass({
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

    handleUpdateFunc(id){
      console.log("update");
      //todo: redirect to the add new appointment form with the existing data from the db. and change the button to say "update data" from "create new"
      //updateAppointment(id);
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
    const AppointmentComponents = Object.entries(appointmentList).map((appointment) => {
        return <AppointmentListItem 
                    handleDelete={this.handleDeleteFunc.bind(this, appointment[1].id)} 
                    handleUpdate={this.handleUpdateFunc.bind(this, appointment[1].id)}
                    showControlls={true}
                    {...appointment[1]}
                />;
    });

    return (
      <div>
        <div className="col-lg-12">
            <div className="page-header">
                <h1>Info Analytics</h1>
            </div>

			<div className="panel panel-default">
                <div className="panel-heading">
                    <span className="panel-title">Analytics Control Panel</span>
                </div>
                <div className="panel-body">
                    <div className="row">
	                    <h4>Total No of patients of certain Disease in certain Region</h4>
	                    <span className="col-lg-4">Disease: <input type="text" value="" placeholder="Disease" /></span>
	                    <span className="col-lg-4">Region: <input type="text" value="" placeholder="Region" /></span>
	                    <span className="col-lg-4"><button type="button" value="Search" name="dtr">Search</button></span>
                    </div>
                    <div className="row">
	                    <h4>Total No of patients of certain Disease in certain Region</h4>
	                    <span className="col-lg-4">Disease: <input type="text" value="" placeholder="Disease" /></span>
	                    <span className="col-lg-4">Region: <input type="text" value="" placeholder="Region" /></span>
	                    <span className="col-lg-4"><button type="button" value="Search" name="dtr">Search</button></span>
                    </div>
                    <div className="row">
	                    <h4>Total No of patients of certain Disease in certain Region</h4>
	                    <span className="col-lg-4">Disease: <input type="text" value="" placeholder="Disease" /></span>
	                    <span className="col-lg-4">Region: <input type="text" value="" placeholder="Region" /></span>
	                    <span className="col-lg-4"><button type="button" value="Search" name="dtr">Search</button></span>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="panel-title">Analytics Result Panel</span>
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

export default Analytics;