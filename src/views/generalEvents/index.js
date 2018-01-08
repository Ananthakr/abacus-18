import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './generalevents.css';
import Menu from '../../components/menu';
import GenericBox from  '../../components/genericBox';
import GenImage from '../../images/icons/circus.png';
import data from './general.json';


export default class GeneralEvents extends Component{

    constructor(props){
        super(props);
    }

    displayEvents(){
        var rows = data.map((res,k) => {return(
            <div key={k} className="col-md-4">
                <Link to={{pathname: "/events/"+res.title,state: { info: res.content} }}><GenericBox title={res.title} image={GenImage} imageTitle="TechIcon"/></Link>
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
                        <h1>General Events</h1>
                    </div>
                </div>
                <div className="container-fluid events-container">
                    <Link className="back-btn" to="/events">&larr;Back</Link>
                   {this.displayEvents()}
                </div>
            </main>
        )
    }
}