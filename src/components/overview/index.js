import React,{Component} from 'react';
import './overview.css';

export default class Overview extends Component{
    
   constructor(){
        super();
   }

    
    render(){
        return(
            <section>
            <div className="container-fluid overview-container">
                <div className="row">
                    <div className="col overview-image d-none d-lg-block d-xl-block"></div>
                    <div className="col overview-text-holder">
                        <div className="row">
                            <div className="col overview-title animated fadeIn">
                                <span className="dash"></span> abacus
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md overview-item">
                                <p>10+ </p><span>events</span>
                            </div>
                            <div className="col-md overview-item">
                                <p>5+ </p><span>Workshops</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md overview-item">
                                <p>60k+ </p><span>Prizes</span>
                            </div>
                            <div className="col-md overview-item">
                                <p>2+ </p>  <span>Days</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </section>
        )
    }
}