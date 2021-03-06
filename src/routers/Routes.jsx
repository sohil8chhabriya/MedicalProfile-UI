import React from "react";
import { Router, Route, DefaultRoute, RouteHandler, Redirect} from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";

import DashboardHomePage from "../components/pages/dashboard/Home";
import DashboardTablesPage from "../components/pages/dashboard/Tables";
import DashboardFormsPage from "../components/pages/dashboard/Forms";
import DashboardPanelsWellsPage from "../components/pages/dashboard/PanelsWells";
import DashboardButtonsPage from "../components/pages/dashboard/Buttons";
import DashboardNotificationsPage from "../components/pages/dashboard/Notifications";
import DashboardTypographyPage from "../components/pages/dashboard/Typography";
import DashboardIconsPage from "../components/pages/dashboard/Icons";
import DashboardGridPage from "../components/pages/dashboard/Grid";
import DashboardBlankPage from "../components/pages/dashboard/Blank";
import DashboardFlotChartsPage from "../components/pages/dashboard/FlotCharts";
import DashboardMorrisjsChartsPage from "../components/pages/dashboard/MorrisjsCharts";
import LoginPage from "../components/pages/Login";
import LogoutPage from "../components/pages/Logout";

import DashboardUserProfile from "../components/pages/dashboard/UserProfile";
import DashboardAppointments from "../components/pages/dashboard/appointment/Appointments"
import DashboardPatientAppointment from "../components/pages/dashboard/appointment/PatientAppointment";
import DashboardAppointmentReport from "../components/pages/dashboard/appointment/AppointmentReport";
import DashboardAnalytics from "../components/pages/dashboard/Analytics";

var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
          <Route name="base" path="/" handler={BaseLayout}>

            <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
              <Route name="dashboard.home" path="/home" handler={DashboardHomePage} />

              <Route name="dashboard.userprofile" path="/userprofile/?:userid?" handler={DashboardUserProfile} />
              <Route name="dashboard.patient-appointment" path="/patient-appointment" handler={DashboardPatientAppointment} />
              <Route name="dashboard.appointment-report" path="/appointment/report/?:id?" handler={DashboardAppointmentReport} />
              <Route name="dashboard.appointments" path="/appointments/" handler={DashboardAppointments} />
              <Route name="dashboard.analytics" path="/analytics/" handler={DashboardAnalytics} />
              
              <Route name="dashboard.flot-charts" path="/flot-charts" handler={DashboardFlotChartsPage} />
              <Route name="dashboard.morrisjs-charts" path="/morrisjs-charts" handler={DashboardMorrisjsChartsPage} />
              <Route name="dashboard.tables" path="/tables" handler={DashboardTablesPage} />
              <Route name="dashboard.forms" path="/forms" handler={DashboardFormsPage} />
              <Route name="dashboard.panels-wells" path="/panels-wells" handler={DashboardPanelsWellsPage} />
              <Route name="dashboard.buttons" path="/buttons" handler={DashboardButtonsPage} />
              <Route name="dashboard.notifications" path="/notifications" handler={DashboardNotificationsPage} />
              <Route name="dashboard.typography" path="/typography" handler={DashboardTypographyPage} />
              <Route name="dashboard.icons" path="/icons" handler={DashboardIconsPage} />
              <Route name="dashboard.grid" path="/grid" handler={DashboardGridPage} />
              <Route name="dashboard.blank" path="/blank" handler={DashboardBlankPage} />
              <DefaultRoute name="dashboard.default" handler={DashboardHomePage} />
            </Route>
            
            <Route name="login" path="/login" handler={LoginPage} />
            <Route name="logout" path="/logout" handler={LogoutPage} />
            <DefaultRoute name="default" handler={DashboardLayout} />
            <Redirect from="/" to="login" />
          </Route>
      );
    }
  },
  render: function() {

  }
  
});

export default Routes;