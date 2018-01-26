import React,{Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './overview.css';

export default class Overview extends Component{
    
   constructor(){
        super();
        this.state = {
            visible:false,
        }
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
   }

   onVisibilityChange(isVisible){
       if(isVisible){
            this.setState({visible:true});
        }
   }


    render(){
        return(
            <section>
            <div className="container-fluid overview-container">
                
                <div className="row">
                    <div className="col-5 overview-image d-none d-lg-block d-xl-block"></div>
                    <VisibilitySensor scrollCheck={true} active={!this.state.visible} partialVisibility={true} onChange={this.onVisibilityChange} />
                    <div className="col overview-text-holder">
                        <div className="row">
                            <div className={(this.state.visible) ? "col overview-title animated fadeIn" : "col overview-title invisible"}>
                                <span className="dash"></span> abacus
                            </div>
                        </div>
                        <div className="row">
                            <div className={(this.state.visible) ? "col-md overview-item animated fadeInUp": "col-md overview-item invisible"}>
                                <p>20+ </p><span>Events</span>
                            </div>
                            <div className={(this.state.visible) ? "col-md overview-item animated fadeInUp": "col-md overview-item invisible"}>
                                <p>4 </p><span>Workshops</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className={(this.state.visible) ? "col-md overview-item animated fadeInUp": "col-md overview-item invisible"}>
                                <p>1L+ </p><span>Prizes</span>
                            </div>
                            <div className={(this.state.visible) ? "col-md overview-item animated fadeInUp": "col-md overview-item invisible"}>
                                <p>3 </p>  <span>Days</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </section>
        )
    }
}