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
      totalCount: 0
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
  handleClick(e) {
	console.log("handleClick") ;
	var region = document.getElementById(e.target.id+"r").value;
	var disease = document.getElementById(e.target.id+"d").value;
	var total = AppointmentStore.getCount(region, disease, e.target.id);
	this.setState({totalCount: total});
  },
 
  render: function() {
    const { totalCount } = this.state;

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
	                    <span className="col-lg-4">Disease: <input id="dtrd" type="text"  placeholder="Disease" /></span>
	                    <span className="col-lg-4">Region: <input id="dtrr" type="text" placeholder="Region" /></span>
	                    <span className="col-lg-4"><button onClick={this.handleClick.bind(this)} type="button" value="Search" id="dtr">Search</button></span>
                    </div>	
                    <div className="row">
	                    <h4>Total No of patients are admitted for certain Disease in certain Region</h4>
	                    <span className="col-lg-4">Disease: <input id="adtrd" type="text"  placeholder="Disease" /></span>
	                    <span className="col-lg-4">Region: <input id="adtrr" type="text"  placeholder="Region" /></span>
	                    <span className="col-lg-4"><button onClick={this.handleClick.bind(this)} type="button" value="Search" id="adtr">Search</button></span>
                    </div>
                    <div className="row">
	                    <h4>Total No of patients died of certain Disease in certain Region</h4>
	                    <span className="col-lg-4">Disease: <input id="ddtrd" type="text"  placeholder="Disease" /></span>
	                    <span className="col-lg-4">Region: <input id="ddtrr" type="text"  placeholder="Region" /></span>
	                    <span className="col-lg-4"><button onClick={this.handleClick.bind(this)} type="button" value="Search" id="ddtr">Search</button></span>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="panel-title">Analytics Result Panel</span>
                </div>
                <div className="panel-body">
					<div className="col-md-3">
					<div className="panel panel-default">
						<div className="panel-heading">
							<span className="panel-title">Total</span>
						</div>
						<div className="panel-body">
						{totalCount}
						</div>
					</div>
					</div>
                </div>
            </div>
          </div>
      </div>
    );
  }
});

export default Analytics;