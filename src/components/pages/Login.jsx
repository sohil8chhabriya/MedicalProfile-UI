import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [Router.Navigation],

  render: function(){
    return <div>
    <div className="col-md-6 col-md-offset-3">
            <div className="text-center">
            <h1 className="login-brand-text">Centralize Health Info Analytics</h1>
          </div>
        </div>
        <div className="col-md-4 col-md-offset-4">
        <Panel header={<h3>Please Sign In</h3>} className="login-panel">

          <form role="form" onSubmit={this.handleLogin}>
            <fieldset>
              <div className="form-group">
                <Input onChange={this.setLoginID} className="form-control" placeholder="Username" ref="loginID" type="text" autofocus="" name="name" />
              </div>

              <div className="form-group">
                <Input onChange={this.setPassword} className="form-control" placeholder="Password" ref="password" type="password" name="password" />
                <div id="error" className="error hide">Error: Wrong password / userId</div>
              </div>
              <Input type="checkbox" label="Remember Me" />
              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
              
            </fieldset>
          </form>

        </Panel>
        
      </div>
      </div>
      

  },

  setLoginID: function(e) {
    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {
    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){
    // todo: do validations
    if(this.state.loginID === "patient" && this.state.password === "patient") {
      console.log('Auth: Redirecting to dashboard');
      document.getElementById('error').classList.add('hide');
      this.transitionTo('dashboard.userprofile', {userid: 1});
    }
    else if(this.state.loginID === "doctor" && this.state.password === "doctor") {
      console.log('Auth: Redirecting to dashboard');
      document.getElementById('error').classList.add('hide');
      this.transitionTo('dashboard.userprofile', {userid: 2});
    }
    else if(this.state.loginID === "hospital" && this.state.password === "hospital") {
      console.log('Auth: Redirecting to dashboard');
      document.getElementById('error').classList.add('hide');
      this.transitionTo('dashboard.userprofile', {userid: 3});
    }
    else {
      var url = `http://localhost:8080/MedicalProfileV2/rest/user/auth/${this.state.loginID}/${this.state.password}/`;
      fetch(url)
      .then(response => response.json())
      .then(result=> {
          var authResult = eval(JSON.parse(result.auth))
          console.log(`Auth: ${authResult}`);
          if(authResult){
              console.log('Auth: Redirecting to dashboard');
              document.getElementById('error').classList.add('hide');
              this.transitionTo('dashboard.userprofile', {userid: this.state.loginID});
          }
          else {
              console.log('Auth: Login Error');
              document.getElementById('error').classList.remove('hide');
              this.transitionTo('login');
          }
      });
      return false;
    }
  },

});

export default LoginPage;