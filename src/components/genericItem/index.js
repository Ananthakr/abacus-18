import React,{Component} from 'react';
import './genericItem.css';
import renderHTML from 'react-render-html';

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
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="item-container container-fluid">
                <span className="back-btn text-center" onClick={() => this.context.router.history.goBack()}>&larr;Back</span>
                <ul className="nav justify-content-center animated fadeIn">
                    <li className="nav-item">
                        <div className={(this.state.active===0)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:0})}>Description</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===1)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:1})}>Format</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===2)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:2})}>Rules</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===3)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:3})}>Contact</div>
                    </li>
                </ul>
                <div className="tab-container container col-md-8 mx-auto">
                    <p>{renderHTML(this.state.content[this.state.active])}</p>
                </div>
            </div>
        )
    }
}