import React, { Component, Fragment  } from 'react';
import {  Route, Link, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';

import NoMatch from './helpers/no-match.js';

import Header from './includes/header.jsx';
import Footer from './includes/footer.jsx';

import Home from './pages/home.jsx';
import Blank from './pages/blank.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Contact from './pages/contact.jsx';
import Profile from './pages/profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url
    }
    
  }

  

  render() {
    return (
        <Fragment>
            <Switch key="switch">
                <Route exact path="/" render={(props) => 
                <Home {...props}
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />} 
                />
                {/* <Route path="/login" render={(props) => 
                <Login signIn={this.signIn} {...props} 
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />} 
                /> */}
                <Route path="/login" render={(props) => 
                <Login {...props} 
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />} 
                />
                <Route path="/register" render={(props) => 
                <Register {...props} 
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />} 
                />
                <Route path="/contact" render={(props) => 
                <Contact {...props} 
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />} 
                />
                <Route path="/profile" render={(props) =>
                    window.localStorage.getItem('user')
                    ? <Profile {...props} 
                        base_url={this.state.base_url} 
                        api_url={this.state.api_url} 
                    />
                    : <Redirect to='/login' />
                }
                />
                <Route path="/index-2" render={(props) => 
                <Blank {...props} 
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />} 
                />
                <Route render={(props) =>
                <NoMatch
                    base_url={this.state.base_url} 
                    api_url={this.state.api_url} 
                />}
                />
            </Switch>
            <Footer
                base_url={this.state.base_url} 
                api_url={this.state.api_url}
            />
        </Fragment>
    );
  }
}

export default App;