import React,{Component} from 'react';
import renderHTML from 'react-render-html';
import './FlashAlert.css';

export default class FlashAlert extends Component{
    render(){
        return(
            <div className="alert alert-warning" role="alert">
              <h5 class="alert-heading">{this.props.title}</h5>
               {renderHTML(this.props.content)}
            </div>
        )
    }
}