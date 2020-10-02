import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }
  
  render() {
    return (
        <Fragment>
          <footer className="bg-dark default-padding-top text-light">
              <div className="container">
                  <div className="row">
                      <div className="f-items">
                          <div className="col-md-4 item">
                              <div className="f-item">
                                  <img src="assets/img/afrilearn_logo.png" alt="Logo" />
                                  <p>
                                      Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.
                                  </p>
                                  <p className="text-italic">
                                      Please write your email and get our amazing updates, news and support
                                  </p>
                                  <div className="subscribe">
                                      <form action="#">
                                          <div className="input-group stylish-input-group">
                                              <input type="email" placeholder="Enter your e-mail here" className="form-control" name="email" />
                                              <button type="button">
                                                  <i className="fa fa-paper-plane"></i>
                                              </button>  
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-6 item">
                              <div className="f-item link">
                                  <h4>Links</h4>
                                  <ul>
                                      <li>
                                          <a href="#">Courses</a>
                                      </li>
                                      <li>
                                          <a href="#">Event</a>
                                      </li>
                                      <li>
                                          <a href="#">Gallery</a>
                                      </li>
                                      <li>
                                          <a href="#">Faqs</a>
                                      </li>
                                      <li>
                                          <a href="#">Teachers</a>
                                      </li>
                                      <li>
                                          <a href="#">Contact</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-6 item">
                              <div className="f-item link">
                                  <h4>Support</h4>
                                  <ul>
                                      <li>
                                          <a href="#">Documentation</a>
                                      </li>
                                      <li>
                                          <a href="#">Forums</a>
                                      </li>
                                      <li>
                                          <a href="#">Language Packs</a>
                                      </li>
                                      <li>
                                          <a href="#">Release Status</a>
                                      </li>
                                      <li>
                                          <a href="#">LearnPress</a>
                                      </li>
                                      <li>
                                          <a href="#">Feedback</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-4 item">
                              <div className="f-item address">
                                  <h4>Address</h4>
                                  <ul>
                                      <li>
                                          <i className="fas fa-envelope"></i> 
                                          <p>Email <span><a href="mailto:support@validtheme.com">Info@afrilearn.com</a></span></p>
                                      </li>
                                      <li>
                                          <i className="fas fa-map"></i> 
                                          <p>Office <span>Allen Avenue, Ikeja Lagos.</span></p>
                                      </li>
                                  </ul>
                                  <div className="opening-info">
                                      <h5>Opening Hours</h5>
                                      <ul>
                                          <li> <span> Mon - Tues :  </span>
                                            <div className="pull-right"> 6.00 am - 10.00 pm </div>
                                          </li>
                                          <li> <span> Wednes - Thurs :</span>
                                            <div className="pull-right"> 8.00 am - 6.00 pm </div>
                                          </li>
                                          <li> <span> Sun : </span>
                                            <div className="pull-right closed"> Closed </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="col-md-6">
                                  <p>&copy; Copyright 2020. All Rights Reserved by <a href="#">Afrilearn</a></p>
                              </div>
                              <div className="col-md-6 text-right link">
                                  <ul>
                                      <li>
                                          <a href="#">Terms of user</a>
                                      </li>
                                      <li>
                                          <a href="#">License</a>
                                      </li>
                                      <li>
                                          <a href="#">Support</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
        </Fragment>
    );
  }
}

export default Footer;