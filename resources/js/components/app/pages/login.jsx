import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import Header from '../includes/header.jsx';


import Scripts from '../scripts/scripts.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
    this.signIn = this.signIn.bind(this);
  }

  signIn () {
    open_loader('#page');
        const form = $("#signin-form")[0];
        const _data = new FormData(form);
        axios.post('api/user/login', _data)
    .then((response) => {
        if (response.data.status === 200) {
            toastr.success(response.data.message);
            window.localStorage.setItem('user', JSON.stringify(response.data.data.id))
            this.props.history.push('/profile');
            close_loader('#page');
        }
    }).catch((error) =>{
        toastr.error(error.response.data.message);
        close_loader('#page');
    })
}

  componentWillUnmount() {
    $("head").find('script').remove(); 
  }

  
  
  render() {
    return (
        <Fragment>
        <Header
        base_url={this.state.base_url}
        api_url={this.state.api_url}
        {...this.props}
    />
        <div className="login-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <form id="signin-form" className="white-popup-block">
                        <div className="col-md-4 login-social">
                            <h4>Login with social</h4>
                            <ul>
                                <li className="facebook">
                                    <a href="javascript:void(0);">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="javascript:void(0);">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="javascript:void(0);">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 login-custom">
                            <h4>login to your registered account!</h4>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Email*" name="email" type="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password*" name="password" type="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <label for="login-remember"><input type="checkbox" id="login-remember" name="remember_me" />Remember Me</label>
                                    <a title="Lost Password" href="#" className="lost-pass-link">Lost your password?</a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <button className="btn btn-success" type="button" onClick={this.signIn}>
                                        Login
                                    </button>
                                </div>
                            </div>
                            <p className="link-bottom">Not a member yet? <Link to="register">Register now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    );
  }
}

export default Login;