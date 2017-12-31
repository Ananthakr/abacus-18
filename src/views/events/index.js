import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './events.css';
import Menu from '../../components/menu';
import GenericBox from  '../../components/genericBox';
import TechImage from '../../images/icons/browser.png';
import GenImage from '../../images/icons/circus.png';

export default class Events extends Component{
    render(){
        return(
            <main>
                <div className="generic-view-container container-fluid">
                    <Menu/>
                    <div className="generic-view-title">
                        <h1>Events</h1>
                    </div>
                </div>
                <div className="container-fluid events-container">
                    <div className="row">
                        <div className="col-sm"><Link to="/events/tech"> <GenericBox title="Tech" image={TechImage} imageTitle="TechIcon"/></Link></div>
                        <div className="col-sm"><Link to="/events/general"> <GenericBox title="General" image={GenImage} imageTitle="GeneralIcon"/></Link></div>
                    </div>
                </div>
            </main>
        )
    }
}