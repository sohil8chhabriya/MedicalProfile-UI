import React, { Component } from 'react';
import { Panel, Button, Input, Label, FormControls, Row, Col, PageHeader } from 'react-bootstrap';

export default class AppointmentFormComponent extends Component {

	render() {
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
                          <option value="1">speciality 1</option>
                          <option value="2">speciality 2</option>
                          <option value="3">speciality 3</option>
                          <option value="4">speciality 4</option>
                          <option value="5">speciality 5</option>
                        </Input>
                        <Input type="select" label="Select Hospital" multiple>
                          <option value="1">Hospital 1</option>
                          <option value="2">Hospital 2</option>
                          <option value="3">Hospital 3</option>
                          <option value="4">Hospital 4</option>
                          <option value="5">Hospital 5</option>
                        </Input>
                      <h5><strong>When?</strong></h5>
                      <Row>
                        <Col xs={3}>
                            <Input type="text" label="Day" placeholder="dd">
                            </Input>
                        </Col>
                        <Col xs={3}>
                            <Input type="text" label="Month" placeholder="mm">
                            </Input>
                        </Col>
                        <Col xs={3}>
                            <Input type="text" label="Year" placeholder="yyyy">
                            </Input>
                        </Col>
                        <Col xs={3}>
                            <Input type="text" label="Time" placeholder="hh:mm"></Input>
                        </Col>
                        <Col xs={4}>
                        <Button type="submit">Register Appointment</Button>
                        </Col>
                        <Col xs={3}>
                        <Button type="reset">Reset</Button>
                        </Col>
                      </Row>
                  </form>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    ); //ending return
  } //ending render
} //ending class