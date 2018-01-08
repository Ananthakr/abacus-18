import React,{Component} from 'react';
import './404.css';
import NotFoundImage from './404.jpg';

export default class NotFound extends Component{
    render(){
        return(
            <div className="container-fluid notfound-container">
                <img src={NotFoundImage} alt="404 Not Found Page"/>
            </div>
        )
    }
}