import React,{Component} from 'react';
import './genericBox.css';


export default class GenericBox extends Component{
    render(){
        return(
            <div className="generic-box-container animated zoomIn">
                <img src={this.props.image} alt={this.props.imageTitle}/>
                <h6>{this.props.title}</h6>
            </div>
        )
    }
}