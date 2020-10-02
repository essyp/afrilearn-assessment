import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../scripts/scripts.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
    this.createAccount = this.createAccount.bind(this);
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
  }
  

    createAccount () {
        open_loader('#page');
            var form = $("#create-form")[0];
            var _data = new FormData(form);
            axios.post('api/user/register', _data)
        .then((response) => {
        if (response.data.status == 200) {
            toastr.success(response.data.message);
            this.props.history.push('/login');
            close_loader('#page');
        }
        }).catch((error) =>{
            toastr.error(error.response.data.message);
            close_loader('#page');
        })
    }

  
  render() {
    return (
        <div className="login-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <form id="create-form" className="white-popup-block">
                        <div className="col-md-4 login-social">
                            <h4>Register with social</h4>
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
                            <h4>Register a new account</h4>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Fullname*" name="name" type="text" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Email*" name="email" type="email" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Phone Number*" name="tel" type="tel" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password*" name="password" type="password" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Confirm Password*" name="repassword" type="password" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <button className="btn btn-success" type="button" onClick={this.createAccount}>
                                        Sign up
                                    </button>
                                </div>
                            </div>
                            <p className="link-bottom">Are you a member? <Link to="login">Login now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Register;