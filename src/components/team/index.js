import React,{Component} from 'react';
import './team.css';

export default class Team extends Component{
    render(){
        return(
            <section>
                <div className="container-fluid team-container">
                    <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="https://via.placeholder.com/200x200" alt="Team Member"/>
                                <h4>A.P.Shanthi</h4>
                                <p>President, CSEA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                    <img src="https://via.placeholder.com/200x200" alt="Team Member"/>
                                    <h4>Rajeshwari Sridar</h4>
                                    <p>Tresurer, CSEA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="https://via.placeholder.com/200x200" alt="Team Member"/>
                                <h4>Muthu Thillai Natarajan</h4>
                                <p>Chairman, CSEA</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="https://via.placeholder.com/200x200" alt="Team Member"/>
                                <h4>Abishek.S.K</h4>
                                <p>Secretary, CSEA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                    <img src="https://via.placeholder.com/200x200" alt="Team Member"/>
                                    <h4>Prediksha</h4>
                                    <p>Lady Chairman, CSEA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-item">
                                <img src="https://via.placeholder.com/200x200" alt="Team Member"/>
                                <h4>Shruthi</h4>
                                <p>Finance, CSEA</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row team-title">
                            <span className="dash"></span> &nbsp;team
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}