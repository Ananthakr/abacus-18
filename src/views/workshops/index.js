import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './workshops.css';
import Menu from '../../components/menu';
import GenericBox from  '../../components/genericBox';
import WorkshopImage from '../../images/icons/gears.png';
import renderHTML from 'react-render-html';
import data from './workshops.json';

export default class Workshops extends Component{
    
   
    constructor(){
        super();
        console.log(data[0]);
    }
    
    displayWorkshops(){
        var rows = data.map((res,k) => {return(
            <div key={k} className="col-md-6">
                <Link to={{pathname: "/workshops/"+res.name,state: { info: res.content, link:res.link} }}><GenericBox title={renderHTML(res.title)} image={WorkshopImage} imageTitle="WorkshopIcon"/></Link>
            </div>
        )}).reduce((r,e,i) => {
            i%2===0&&r.push([]);
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
                        <h1>Workshops</h1>
                    </div>
                </div>
                <div className="container-fluid events-container">
                    {this.displayWorkshops()}
                </div>
            </main>
        )
    }
}