import React,{Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './footer.css';
import Mail from '../../images/envelope.png';
import Phone from '../../images/phone-call.png';
import Location from '../../images/placeholder.png';
import Facebook from '../../images/facebook.svg';
import Twitter from '../../images/twitter.svg';

export default class Footer extends Component{
    
        
   constructor(){
        super();
        this.state = {
            visible:false,
        }
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
    }

    onVisibilityChange(isVisible){
        if(isVisible)
            this.setState({visible:true});
    }


    render(){
        return(
            <footer>
                <div className="container-fluid">
                <VisibilitySensor scrollCheck={true} active={!this.state.visible} partialVisibility={true} onChange={this.onVisibilityChange}/>
                    <div className="row">
                        <div className={(this.state.visible)?"col-sm-4 footer-block animated zoomIn":"invisible col-sm-4 footer-block"}>
                            <div className="media">
                                <img className="align-self-center mr-3 footer-icon" src={Location} alt="Address Icon"/>
                                <div className="media-body align-self-center footer-text">
                                    Dept. of CSE,<br/>CEG, Anna University<br/>Chennai-25.
                                </div>
                            </div>
                        </div>
                        <div className={(this.state.visible)?"col-sm-4 footer-block animated zoomIn":"invisible col-sm-4 footer-block"}>
                            <div className="media">
                                <img className="align-self-center mr-3 footer-icon" src={Mail} alt="Mail Icon"/>
                                <div className="media-body align-self-center footer-text">
                                   <a className="link-text" href="mailto:webteam@abacus.org.in">webteam@abacus.org.in</a>
                                </div>
                            </div>
                        </div>
                        <div className={(this.state.visible)?"col-sm-4 footer-block animated zoomIn":"invisible col-sm-4 footer-block"}>
                            <div className="media">
                                <img className="align-self-center mr-3 footer-icon" src={Phone} alt="Phone Icon"/>
                                <div className="media-body align-self-center footer-text">
                                    <a className="link-text" href="tel:+919655883077">+91 96558 83077</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer-social-media">
                            <p>Follow us on</p>
                            <div className="footer-sm-icon-holder">
                                <a href="https://www.facebook.com/abacus.cse"><img src={Facebook} alt="Facebook Link"/></a>
                                <a href="https://twitter.com/csea_abacus"><img src={Twitter} alt="Twitter Link"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-info">
                        <div className="col">
                            <p>All rights reserved.</p>
                        </div>
                        <div className="col">
                            <a href="https://heapanalytics.com/?utm_source=badge" rel="nofollow"><img style="width:108px;height:41px;margin:-10px auto;display:block;" src="//heapanalytics.com/img/badgeLight.png" alt="Heap | Mobile and Web Analytics" /></a>
                        </div>
                        <div className="col">
                            <p> Developed with <span className="footer-love">React, Preact &amp; Bootstrap 4 </span></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}