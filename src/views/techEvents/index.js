import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './techevents.css';
import Menu from '../../components/menu';
import GenericBox from  '../../components/genericBox';
import TechImage from '../../images/icons/browser.png';
import data from './tech.json';


export default class TechEvents extends Component{

    constructor(){
        super();
        //console.log(data[0]);
    }

    displayEvents(){
        var rows = data.map((res,k) => {return(
            <div key={k} className="col-sm-4">
                <Link to={{pathname: "/events/"+res.title,state: { info: res.content} }}><GenericBox title={res.title} image={TechImage} imageTitle="TechIcon"/></Link>
            </div>
        )}).reduce((r,e,i) => {
            i%3===0&&r.push([]);
            r[r.length - 1].push(e);
            return r;
        },[]).map((row,key) => {
            return (
                <div key={key} className="row">{row}</div>
            )
        });

        return rows
    }
    
    render(){
        return(
            <main>
                <div className="generic-view-container container-fluid">
                    <Menu/>
                    <div className="generic-view-title">
                        <h1>Tech Events</h1>
                    </div>
                </div>
                <div className="container-fluid events-container">
                   {this.displayEvents()}
                </div>
            </main>
        )
    }
}