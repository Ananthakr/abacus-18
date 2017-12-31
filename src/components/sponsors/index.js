import React,{Component} from 'react';
import './sponsors.css';

export default class Sponsors extends Component{
    render(){
        return(
            <section>
                <div className="container-fluid sponsors-container">
                    <div className="row">
                        <div className="col sponsors-title">
                            sponsors&nbsp;<span className="dash"></span> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 sponsors-item">
                            <img src="https://via.placeholder.com/200x200" alt="Sponsor"/>
                        </div>
                        <div className="col-md-3 sponsors-item">
                            <img src="https://via.placeholder.com/200x200" alt="Sponsor"/>
                        </div>
                        <div className="col-md-3 sponsors-item">
                            <img src="https://via.placeholder.com/200x200" alt="Sponsor"/>
                        </div>
                        <div className="col-md-3 sponsors-item">
                            <img src="https://via.placeholder.com/200x200" alt="Sponsor"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}