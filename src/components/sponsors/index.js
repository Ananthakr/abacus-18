import React,{Component} from 'react';
import VisibiitySensor from 'react-visibility-sensor';
import './sponsors.css';
import Freshworks from '../../images/sponsors/freshworks.png';
import Gigamon from '../../images/sponsors/gigamon.png';
import Motorq from '../../images/sponsors/motorq.png';
import IVTL from '../../images/sponsors/ivtl.png';
import Opteamize from '../../images/sponsors/opteamize.png';
import WeKanCode from '../../images/sponsors/wekancode.png';

export default class Sponsors extends Component{
     
   constructor(){
    super();
    this.state = {
        visible:false,
    }
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }

    onVisibilityChange(isVisible){
        if(isVisible)
                this.setState({visible:isVisible});
    }

    render(){
        return(
            <section>
                <div className="container-fluid sponsors-container">
                    <div className="row">
                        <div className={(this.state.visible)?"col sponsors-title animated fadeInLeft":"col sponsors-title invisible"}>
                            sponsors&nbsp;<span className="dash"></span> 
                        </div>
                    </div>
                    <VisibiitySensor scrollCheck={true} active={!this.state.visible} partialVisibility={true} onChange={this.onVisibilityChange}/>
                    <div className="row">
                        <div className={(this.state.visible)?"col-md-3 sponsors-item animated fadeInUp":"col-md-3 sponsors-item invisible"}>
                            <img src={Motorq} alt="Motorq" onClick={()=>window.location = "http://motorq.co/"}/>
                        </div>
                        <div className={(this.state.visible)?"col-md-3 sponsors-item animated fadeInUp":"col-md-3 sponsors-item invisible"}>
                            <img src={IVTL} alt="IVTL" onClick={()=>window.location = "https://www.ivtlinfoview.com/"}/>
                        </div>
                        <div className={(this.state.visible)?"col-md-3 sponsors-item animated fadeInUp":"col-md-3 sponsors-item invisible"}>
                            <img src={Gigamon} alt="Gigamon" onClick={()=>window.location = "https://www.gigamon.com/"}/>
                        </div>
                        <div className={(this.state.visible)?"col-md-3 sponsors-item animated fadeInUp":"col-md-3 sponsors-item invisible"}>
                            <img src={Freshworks} alt="Freshworks" onClick={()=>window.location = "https://www.freshworks.com/"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className={(this.state.visible)?"col-md-3 sponsors-item animated fadeInUp":"col-md-3 sponsors-item invisible"}>
                            <img src={WeKanCode} alt="WeKanCode" onClick={()=>window.location = "http://www.wekancode.com/"}/>
                        </div>
                        <div className={(this.state.visible)?"col-md-3 sponsors-item opteamize animated fadeInUp":"col-md-3 sponsors-item invisible"}>
                            <p>Digital partner</p>
                            <img src={Opteamize} alt="Opteamize" onClick={()=>window.location = "http://opteamize.in/"}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}