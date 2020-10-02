import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    open_loader('#page');
    axios('api/user/logout/')
    .then((response) => {
        if (response.data.status === 200) {
            localStorage.removeItem('user');
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
        <Fragment>
            <div className="top-bar-area address-two-lines bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 address-info">
                            <div className="info box">
                                <ul>
                                    <li>
                                        <span><i className="fas fa-map"></i> Address</span>Allen Avenue, Ikeja Lagos.
                                    </li>
                                    <li>
                                        <span><i className="fas fa-envelope-open"></i> Email</span>Info@afrilearn.com
                                    </li>
                                    <li>
                                        <span><i className="fas fa-phone"></i> Contact</span>+234 805 154 4949
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {window.localStorage.getItem('user') ? (
                        <div className="user-login text-right col-md-4">
                            <Link to="/profile">
                                <i className="fas fa-edit"></i> Profile
                            </Link>
                            <a href="javascript:void(0);" onClick={this.logoutUser}>
                                <i className="fas fa-user"></i> Logout
                            </a>
                        </div>
                        ) : (
                        <div className="user-login text-right col-md-4">
                        <Link to="/register">
                            <i className="fas fa-edit"></i> Register
                        </Link>
                        <Link to="/login">
                            <i className="fas fa-user"></i> Login
                        </Link>
                        </div>
                        )}

                    </div>
                </div>
            </div>
            
            <header id="home">
                
                <nav className="navbar navbar-default navbar-fixed navbar-transparent white pad-top bootsnav">
                    
                    <div className="container">
                        <div className="row">
                            <div className="top-search">
                                <div className="input-group">
                                    <form action="#">
                                        <input type="text" name="text" className="form-control" placeholder="Search" />
                                        <button type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>  
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="container">
        
        
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                            </ul>
                        </div>        
                        
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index">
                                <img src="assets/img/afrilearn_logo.png" style={{maxHeight: "40px"}} className="logo" alt="Logo" />
                            </a>
                        </div>
                        
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                <li className="dropdown">
                                    <Link to="/" className="active">Home</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="about" className="active">About</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="faq" className="active">FAQ</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="blog" className="active">Blog</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="forum" className="active">Forum</Link>
                                </li>
                                <li className="dropdown megamenu-fw">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">Courses</a>
                                    <ul className="dropdown-menu megamenu-content" role="menu">
                                        <li>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Past Questions</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link to="waec">Waec</Link></li>
                                                            <li><Link to="neco">Neco</Link></li>
                                                            <li><Link to="jamb">Jamb/UME</Link></li>
                                                            <li><Link to="gce">GCE</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Professional Exams</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link to="accounting">Accounting</Link></li>
                                                            <li><Link to="software">Software</Link></li>
                                                            <li><Link to="networking">Networking</Link></li>
                                                            <li><Link to="hr">Human Resources</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Vocational Courses</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link to="tailoring">Tailoring</Link></li>
                                                            <li><Link to="graphics">Graphics</Link></li>
                                                            <li><Link to="cook">Cook</Link></li>
                                                            <li><Link to="hair">Hair Training</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">E-Library</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link to="mathematics">Mathematics</Link></li>
                                                            <li><Link to="chemistry">Chemistry</Link></li>
                                                            <li><Link to="biology">Biology</Link></li>
                                                            <li><Link to="physics">Physics</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="contact">contact</Link>
                                </li>
                                <li className="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle active" data-toggle="dropdown" >Account</a>
                                    
                                    {window.localStorage.getItem('user') ? (
                                        <ul className="dropdown-menu">
                                            <li><Link to="profile">Profile</Link></li>
                                            <li><a href="javascript:void(0);" onClick={this.logoutUser}>Logout</a></li>
                                        </ul>
                                    ) : (
                                        <ul className="dropdown-menu">
                                            <li><Link to="login">Login</Link></li>
                                            <li><Link to="register">Register</Link></li>
                                        </ul>
                                    )}
                                        
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
        
                </nav>
                
        
            </header>
            
        </Fragment>
    );
  }
}

export default Header;