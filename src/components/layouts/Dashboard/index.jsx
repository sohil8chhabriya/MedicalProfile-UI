import React from "react";
import Router, { Link, RouteHandler } from "react-router";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jquery";
import classNames from "classnames";

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

  },

  toggleMenu: function(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');  
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  },

  render: function() {

    return (
        <div id="wrapper" className="content">
          <Navbar brand={<span><img src={require('../../../common/img/purple-heart.jpg')} alt="Start React" title="Start React" />
            <span>&nbsp;Medical Profile</span>
            <button type="button" className="navbar-toggle" onClick={this.toggleMenu} style={{position: 'absolute', right: 0, top: 0}}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            </span>} fluid={true}  style={ {margin: 0} }>
            <ul className="nav navbar-top-links navbar-right">
              <Nav style={ {margin: 0} }>
                
                <NavDropdown title=<i className="fa fa-envelope fa-fw"></i> >
                  <MenuItem eventKey="1">
                    <div> <strong>Sohil Chhabriya</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <strong>Read All Messages</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title=<i className="fa fa-tasks fa-fw"></i> >
                  <MenuItem eventKey="5">
                      <strong>See All Tasks</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title=<i className="fa fa-bell fa-fw"></i> >
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div> <i className="fa fa-comment fa-fw"></i> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> <i className="fa fa-twitter fa-fw"></i> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> <i className="fa fa-envelope fa-fw"></i> Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <div> <i className="fa fa-tasks fa-fw"></i> New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="5">
                    <div> <i className="fa fa-upload fa-fw"></i> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="6">
                    <strong>See All Alerts</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title=<i className="fa fa-user fa-fw"></i> >
                  <MenuItem eventKey="1">
                    <Link to="dashboard.userprofile">
                        <i className="fa fa-user fa-fw"></i> User Profile
                    </Link>
                  </MenuItem>
                  <MenuItem eventKey="2">
                    <i className="fa fa-gear fa-fw"></i> Settings
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <Link to="login">
                      <i className="fa fa-sign-out fa-fw"></i> Logout
                    </Link>
                  </MenuItem>
                </NavDropdown>

              </Nav>
            </ul> 
            <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
              <div className="sidebar-nav navbar-collapse collapse">
                
                <ul className="nav in" id="side-menu">
                  <li>
                    <Link to="dashboard.userprofile"><i className="fa fa-user fa-fw"></i> &nbsp;User Profile</Link>
                  </li>
                  <li>
                    <Link to="dashboard.appointments"><i className="fa fa-linux fa-fw"></i> &nbsp;Appointments</Link>
                  </li>
                  <li>
                    <Link to="dashboard.patient-appointment"><i className="fa fa-github-alt fa-fw"></i> &nbsp;Add Appointment</Link>
                  </li>
                  <li>
                    <Link to="dashboard.appointment-report"><i className="fa fa-renren fa-fw"></i> &nbsp;Appointment Report</Link>
                  </li>
                  <li>
                    <Link to="dashboard.analytics"><i className="fa fa-bar-chart-o fa-fw"></i> &nbsp;Analytics</Link>
                  </li>
                </ul>

              </div>
            </div>

          </Navbar>

          <div id="page-wrapper" className="page-wrapper" ref="pageWrapper">
            <RouteHandler {...this.props} />
          </div>

        </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
