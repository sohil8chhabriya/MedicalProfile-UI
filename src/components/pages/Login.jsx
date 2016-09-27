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
  
    return <div className="col-md-4 col-md-offset-4">

        <div className="text-center">
          <h1 className="login-brand-text">Medical Profile</h1>
        </div>

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
    var url = `http://localhost:8080/MedicalProfileV2/rest/user/auth/${this.state.loginID}/${this.state.password}/`;
    fetch(url)
    .then(response => response.json())
    .then(result=> {
        var authResult = eval(JSON.parse(result.auth))
        console.log(`Auth: ${authResult}`);
        if(authResult){
            console.log('Auth: Redirecting to dashboard');
            document.getElementById('error').classList.add('hide')
            this.transitionTo('dashboard');
        }
        else {
            console.log('Auth: Login Error');
            document.getElementById('error').classList.remove('hide')
            this.transitionTo('login');
        }
    });
    return false;
  },

});

export default LoginPage;