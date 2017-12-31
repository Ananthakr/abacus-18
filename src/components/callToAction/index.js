import React,{Component} from 'react';
import './callToAction.css';

export default class CallToAction extends Component{
    render(){
        return(
            <div className="container-fluid call-to-action-container">
                <div className="row">
                    <span className="call-to-action-text">Interested to attend? Register to get notified.</span>
                    <a href="#" role="button" className="btn call-to-action-btn">Register</a>
                </div>
            </div>
        )
    }
}