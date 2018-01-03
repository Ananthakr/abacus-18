import React,{Component} from 'react';
import './genericItem.css';

export default class GenericItem extends Component{
    
    constructor(){
        super();
        this.state = {
             content:["","","",""],
             active:0,  
        }
    }

    componentDidMount(){
        this.setState({content:this.props.content});
    }

    render(){
        return(
            <div className="item-container">
               <ul className="nav justify-content-center animated fadeIn">
                    <li className="nav-item">
                        <div className={(this.state.active===0)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:0})}>description</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===1)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:1})}>format</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===2)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:2})}>rules</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===3)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:3})}>contact</div>
                    </li>
                </ul>
                <div className="tab-container container">
                    <p>{this.state.content[this.state.active]}</p>
                </div>
            </div>
        )
    }
}