import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import UserStore from '../../../../Store/UserStore';
import AppointmentStore from '../../../../Store/AppointmentStore';
import AppointmentListItem from '../appointment/Appointments/AppointmentListItem'
//import { getUserDetails } from '../../../../../Action/UserAction';
import {NavDropdown, MenuItem, DropdownButton, Navbar, Nav, NavItem, Panel, PageHeader, ListGroup, ListGroupItem, Button} from "react-bootstrap";

var UserProfile = React.createClass({
  getInitialState() {
    return {
      userDetails: UserStore.getUserDetails(this.props.params.userid?this.props.params.userid:"1"),
      appointmentHistory: AppointmentStore.fetchAppointmentListofUser(this.props.params.userid?this.props.params.userid:"1")
    };
  },

  render: function() {
    const { userDetails, appointmentHistory } = this.state;
    const AppointmentComponents = Object.entries(appointmentHistory).map((appointment) => {
        return <AppointmentListItem {...appointment[1]} />;
    });
    console.log(userDetails);

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Welcome {userDetails.name} <h4 className="text-primary">{userDetails.userType}</h4></PageHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <span>Profile Details</span>&nbsp;
                <button className="btn btn-primary">Edit details</button>
              </div>
              <div className="panel-body">
                <div className="col-md-6">
                  <ul className="list-inline">
                    <li className="col-md-6"><b>Name:</b> {userDetails.name}</li>
                    <li className="col-md-6"><b>User Id:</b> {userDetails.id}</li>
                    <li className="col-md-6"><b>Email Id:</b> {userDetails.emailId}</li>
                    <li className="col-md-6"><b>Phone No:</b> {userDetails.phoneNo}</li>
                    <li className="col-md-6"><b>Address:</b> {userDetails.streetAddress}</li>
                    <li className="col-md-6"><b>City:</b> {userDetails.city}</li>
                    <li className="col-md-6"><b>Country:</b> {userDetails.country}</li>
                    <li className="col-md-6"><b>Pincode:</b> {userDetails.pincode}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <span>Appointments History</span>&nbsp;
                <Link to="dashboard.userprofile">
                  <button className="btn btn-primary">New Appointment</button>
                </Link>
              </div>
              <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            <tr>
                                <th>appointment id</th>
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

      </div>
    );
  }

});

export default UserProfile;