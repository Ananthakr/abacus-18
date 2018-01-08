import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './events.css';
import Menu from '../../components/menu';
import GenericBox from  '../../components/genericBox';
import TechImage from '../../images/icons/browser.png';
import GenImage from '../../images/icons/circus.png';
import Hacker from '../../images/icons/hacker.png';
import Cloud from '../../images/icons/cloud.png';

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
                        <div className="col-md"><Link to="/events/tech"> <GenericBox title="Tech" image={TechImage} imageTitle="Tech Icon"/></Link></div>
                        <div className="col-md"><Link to="/events/general"> <GenericBox title="General" image={GenImage} imageTitle="General Icon"/></Link></div>
                        <div className="col-md"><Link to="/events/online"> <GenericBox title="Online" image={Cloud} imageTitle="Online Icon"/></Link></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mx-auto"><Link to="/events/night"> <GenericBox title="Night" image={Hacker} imageTitle="Night Icon"/></Link></div>
                    </div>
                </div>
            </main>
        )
    }
}