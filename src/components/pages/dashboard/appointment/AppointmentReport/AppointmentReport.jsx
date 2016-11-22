import React, { PropTypes, Component } from 'react';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from 'react-bootstrap';
import AppointmentStore from '../../../../../Store/AppointmentStore';
//import { deleteAppointment } from '../../../../../Action/AppointmentAction';

var AppointmentReport = React.createClass({
  getInitialState() {
    return {
      appointmentDetails: AppointmentStore.fetchAppointmentById(this.props.params.id?this.props.params.id:"1"),
      doctorSummary: AppointmentStore.fetchUserAppointmentSummaryById(this.props.params.id?this.props.params.id:"1")
    };
  },

  render: function() {
    const { appointmentDetails, doctorSummary } = this.state;
    const { basicCheckupReport } = doctorSummary;
    return (
      <div>
        <div className="col-lg-12">
          <div className="page-header">
              <h1>Appointment Report</h1>
          </div>
          <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="panel-title">Appointments Details</span>
                </div>
                <div className="panel-body">
                    <ul className="list-inline" type="circle">
                      <li className="col-md-4"><b>Patient Id:</b> {appointmentDetails.patientId}</li>
                      <li className="col-md-4"><b>Doc Id:</b> {appointmentDetails.docId}</li>
                      <li className="col-md-4"><b>Hospital Id:</b> {appointmentDetails.hospitalId}</li>
                      <li className="col-md-4"><b>Time:</b> {appointmentDetails.time}</li>
                      <li className="col-md-4"><b>Date:</b> {appointmentDetails.date}</li>
                    </ul>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <span>Doctors Report summary</span>
                </div>
                <div className="panel-body">
                  <ul className="list-inline" type="circle">
                    <li className="col-md-4"><b>Appointment Id:</b> {doctorSummary.appointmentId}</li>
                    <li className="col-md-4"><b>Illness:</b> {doctorSummary.illness}</li>
                    <li className="col-md-4"><b>Disease:</b> {doctorSummary.disease}</li>
                    <li className="col-md-4"><b>symptoms:</b> {doctorSummary.symptoms}</li>
                    <li className="col-md-4"><b>Medication:</b> {doctorSummary.medication}</li>
                    <li className="col-md-4"><b>Precaution:</b> {doctorSummary.precaution}</li>
                    <li className="col-md-4"><b>Re-visit Duration:</b> {doctorSummary.reVisitDuration}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-lg-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <span>Doctors Report summary</span>
                </div>
                <div className="panel-body">
                  <ul type="circle">
                    <li><b>Blood Pressure:</b> {basicCheckupReport.bloodPressure}</li>
                    <li><b>Body Temperature:</b> {basicCheckupReport.bodyTemperature}</li>
                    <li><b>Pulse Rate:</b> {basicCheckupReport.pulseRate}</li>
                    <li><b>Pregnent:</b> {basicCheckupReport.pregnent}</li>
                    <li><b>Weight:</b> {basicCheckupReport.weight}</li>
                    <li><b>Height:</b> {basicCheckupReport.height}</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
});

export default AppointmentReport;