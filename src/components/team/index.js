import React,{Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './team.css';

export default class Team extends Component{
    
     
   constructor(){
    super();
    this.state = {
        visible:false,
    }
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }

    onVisibilityChange(isVisible){
        if(isVisible)
            { 
                this.setState({visible:true});
            }
    }


    render(){
        return(
            <section>
                <div className="container-fluid team-container">
                    <div className="col-md-10">
                    <VisibilitySensor scrollCheck={true} active={!this.state.visible} partialVisibility={true} onChange={this.onVisibilityChange}/>
                    <div className="row">
                    <div className="col-md-4">
                        <div className={(this.state.visible)?"team-item animated fadeInUp":"team-item invisible"}>
                                <h4>Chairman</h4>
                                <p>Muthu Thillai Natarajan - 9655883077</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={(this.state.visible)?"team-item animated fadeInUp":"team-item invisible"}>
                                <h4>Events</h4>
                                <p>Mahmood Sulthan -  8807777901<br/>Vishvesh thangamani - 9159693399</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={(this.state.visible)?"team-item animated fadeInUp":"team-item invisible"}>
                                    <h4>Workshops</h4>
                                    <p>Pragatheeswaran S - 8438367687<br/>  Prabhakaran S - 7200210789</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row team-row">
                        <div className="col-md-4">
                            <div className={(this.state.visible)?"team-item animated fadeInUp":"team-item invisible"}>
                                <h4>Accommodation</h4>
                                <p>Kapildev K - 9543042900 <br/> Rathish B - 9367145042</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={(this.state.visible)?"team-item animated fadeInUp":"team-item invisible"}>
                                    <h4>Registration Details</h4>
                                    <p>Sachin Kumar S - 8939202465<br/>PrinceMelvin A - 8122492422</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={(this.state.visible)?"team-item animated fadeInUp":"team-item invisible"}>
                                <h4>Industrial Relations</h4>
                                <p>Abhishek Anand - 9445090727</p>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-md-2">
                        <div className={(this.state.visible)?"row team-title animated fadeInRight":"row team-title invisible"}>
                            <span className="dash"></span> &nbsp;team
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}