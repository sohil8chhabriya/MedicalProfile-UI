import React, { PropTypes, Component } from 'react';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from 'react-bootstrap';

var PatientAppointment = React.createClass({

  render: function() {
    
    return (

      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Appointment</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">

            <Panel header={<span>Take Patient Appointment</span>} >
              <div className="row">
                <div className="col-lg-6 col-md-offset-3">
                    <form id="appoitment-detail-form">
                        <Input type="select" label="Select Speciality" multiple>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="1">5</option>
                        </Input>
                        <Input type="select" label="Select Hospital" multiple>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="1">5</option>
                        </Input>
                      <h5><strong>When?</strong></h5>
                      <Row>
                        <Col xs={3}>
                            <Input type="select" label="Day">
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="1">5</option>
                            </Input>
                        </Col>
                        <Col xs={3}>
                            <Input type="select" label="Month">
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="1">5</option>
                            </Input>
                        </Col>
                        <Col xs={3}>
                            <Input type="select" label="Year">
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="1">5</option>
                            </Input>
                        </Col>
                        <Col xs={3}>
                            <Input type="text" label="Time" placeholder="hh:mm"></Input>
                        </Col>
                      </Row>
                    <Col xs={3}>
                    <Button type="submit">Submit Button</Button>
                    </Col>
                    <Col xs={3}>
                    <Button type="reset">Reset Button</Button>
                    </Col>
                  </form>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
      
    );
  }

});

export default PatientAppointment;