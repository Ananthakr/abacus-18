import React,{Component} from 'react';
import Menu from '../../components/menu';
import GenericItem from  '../../components/genericItem';
import CallToAction from '../../components/callToAction';
import Footer from '../../components/footer';
import renderHTML from 'react-render-html';
import './workshopItem.css'

export default class workshopItem extends Component{
    
    constructor(){
        super();
        this.state = {
            active:0,
            content:["","",""]
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.setState({content:this.props.location.state.info});
    }
    
    render(){
        return(
            <main>
                <div className="generic-view-container container-fluid">
                    <Menu/>
                    <div className="generic-view-title">
                        <h1>{this.props.match.params.name}</h1>
                    </div>
                </div>
                <div className="workshop-container container-fluid">
                    <span className="back-btn text-center" onClick={() => this.context.router.history.goBack()}>&larr;Back</span>
                    <ul className="nav justify-content-center animated fadeIn">
                        <li className="nav-item">
                            <div className={(this.state.active===0)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:0})}>Description</div>
                        </li>
                        <li className="nav-item">
                            <div className={(this.state.active===1)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:1})}>Agenda</div>
                        </li>
                        <li className="nav-item">
                            <div className={(this.state .active===2)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:2})}>Contact</div>
                        </li>
                    </ul>
                    <div className="tab-container col-md-8 mx-auto">
                        <p>{renderHTML(this.state.content[this.state.active])}</p>
                        <a href={this.props.location.state.link} className="btn">Book now</a>
                    </div>
                </div>
                <Footer/>
            </main>
        )
    }
}