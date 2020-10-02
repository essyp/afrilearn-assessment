import React, { Component } from 'react'; 
import {Helmet} from "react-helmet"; 

class Scripts extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
          base_url: this.props.base_url,
          api_url: this.props.api_url,
        }
    } 
    render() { 
        return ( 
            <Helmet> 
                <script src='assets/js/vendors.js'></script> 
            </Helmet> 
        ); 
    } 
} 
export default Scripts;