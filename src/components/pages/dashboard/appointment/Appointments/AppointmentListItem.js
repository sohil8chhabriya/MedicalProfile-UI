import React from "react";

export default class AppointmentListItem extends React.Component {
  render() {
    
    const { id, patientId, docId, hospitalId, time, date } = this.props;

    return (
      <tr>
        <td>{id}</td>
        <td>{patientId}</td>
        <td>{docId}</td>
        <td>{hospitalId}</td>
        <td>{time}</td>
        <td>{date}</td>
        <td><button onClick={this.props.handleDelete}>Delete</button></td>
        <td><button onClick={this.props.handleDelete}>Update</button></td>
      </tr>
    );
  }
}