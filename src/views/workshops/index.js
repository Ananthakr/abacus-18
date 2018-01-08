import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './workshops.css';
import Menu from '../../components/menu';

export default class Workshops extends Component{
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
                    <div className="row">
                        <p className="info-text">&lt;!--Revealing on Jan 12 --&#47;&gt;</p>
                    </div>
                </div>
            </main>
        )
    }
}