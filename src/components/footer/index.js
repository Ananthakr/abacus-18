import React,{Component} from 'react';
import './footer.css';
import Mail from '../../images/envelope.png';
import Phone from '../../images/phone-call.png';
import Location from '../../images/placeholder.png';
import Facebook from '../../images/facebook.svg';
import Twitter from '../../images/twitter.svg';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4 footer-block">
                            <div className="media">
                                <img className="align-self-center mr-3 footer-icon" src={Location} alt="Address Icon"/>
                                <div className="media-body align-self-center footer-text">
                                    Dept. of CSE,<br/>CEG, Anna University<br/>Chennai-25.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 footer-block">
                            <div className="media">
                                <img className="align-self-center mr-3 footer-icon" src={Mail} alt="Mail Icon"/>
                                <div className="media-body align-self-center footer-text">
                                   <a className="link-text" href="mailto:web@abacus.org.in">web@abacus.org.in</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 footer-block">
                            <div className="media">
                                <img className="align-self-center mr-3 footer-icon" src={Phone} alt="Phone Icon"/>
                                <div className="media-body align-self-center footer-text">
                                    <a className="link-text" href="tel:+919629279137">+91 96292 79137</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer-social-media">
                            <p>Follow us on</p>
                            <div className="footer-sm-icon-holder">
                                <a href="#"><img src={Facebook} alt="Facebook Link"/></a>
                                <a href="#"><img src={Twitter} alt="Twitter Link"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-info">
                        <div className="col">
                            <p>All rights reserved.</p>
                        </div>
                        <div className="col">
                            <p>Designed &amp; Developed in <span className="footer-love">&lt;3</span> with CEG</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}