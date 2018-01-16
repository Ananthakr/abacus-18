
import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './nightevents.css';
import Menu from '../../components/menu';
import GenericBox from  '../../components/genericBox';
import Hacker from '../../images/icons/hacker.png';
import data from './night.json';



export default class NightEvents extends Component{

    constructor(props){
        super(props);
    }

    displayEvents(){
        var rows = data.map((res,k) => {return(
            <div key={k} className="col-md-4">
                <Link to={{pathname: "/events/"+res.title,state: { info: res.content} }}><GenericBox title={res.title} image={Hacker} imageTitle="TechIcon"/></Link>
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
                        <h1>Night Events</h1>
                    </div>
                </div>
                <div className="container-fluid events-container">
                <span className="back-btn text-center" onClick={() => this.context.router.history.goBack()}>&larr;Back</span>
                   {this.displayEvents()}
                </div>
            </main>
        )
    }
}