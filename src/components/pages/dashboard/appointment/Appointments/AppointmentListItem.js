import React from "react";
import { Link } from "react-router";
export default class AppointmentListItem extends React.Component {
  render() {
    
    const { id, patientId, docId, hospitalId, time, date } = this.props;

    return (
      <tr key={this.props.key}>
        <td>
          <Link to="dashboard.appointment-report" params={{ id: id }}>
              {id}
          </Link>
        </td>
        <td>{patientId}</td>
        <td>{docId}</td>
        <td>{hospitalId}</td>
        <td>{time}</td>
        <td>{date}</td>
        <td><button onClick={this.props.handleDelete}>Delete</button></td>
        <td><button onClick={this.props.handleUpdate}>Update</button></td>
      </tr>
    );
  }
}