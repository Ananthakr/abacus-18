import React, { Component } from 'react';
import Async from 'react-code-splitting';
import './home.css';
import Menu from '../../components/menu';
import FlashAlert from '../../components/flashAlert/index.js';
import Motorq from '../../images/sponsors/motorq-powered-by.png';

//const Menu = () => <Async load={import('../../components/menu')}/>
//import Overview from '../../components/overview';
const Overview = () => <Async load={import('../../components/overview')}/>
//import About from '../../components/about';
const About = () => <Async load={import('../../components/about')}/>
//import Team from '../../components/team';
const Team = () => <Async load={import('../../components/team')}/>
//import Sponsors from '../../components/sponsors';
const Sponsors = () => <Async load={import('../../components/sponsors')}/>
//import CallToAction from '../../components/callToAction';
const CallToAction = () => <Async load={import('../../components/callToAction')}/>
//import Footer from '../../components/footer';
const Footer = () => <Async load={import('../../components/footer')}/>
/*
const flashAlertMessages = [
    {
        title:"Accommodation",
        content:"<p>For accomodations <a href='https://goo.gl/forms/MI95q83eJOwV5Q8T2' class='alert-link'>click here</a></p>"
    },
    {
        title:"Big Boss is live",
        content:"<p>Checkout <a href='https://www.facebook.com/abacus.cse' class='alert-link'>our FB page </a> for more updates.</p>"
    },
    {
        title:"Paper Presentation",
        content:"<p>Entries closed</p>"
    }
]*/
export default class Home extends Component{
   constructor(){
       super();
       this.state = {
           mount:false,
           activeAlertIndex:0
       }
   }
   
   componentDidMount(){
        this.setState({mount:true});
       // setInterval(this.changeActiveAlert.bind(this), 5000);
   }

   changeActiveAlert(){
       //this.setState({activeAlertIndex:(this.state.activeAlertIndex+1)%flashAlertMessages.length})
   }

    render(){
        return(
            <main>
                <div className="home-container container-fluid">
                    
                    {   //<Menu/>
                        //<FlashAlert title={flashAlertMessages[this.state.activeAlertIndex].title} content={flashAlertMessages[this.state.activeAlertIndex].content}/>
                    }
                    <div className="row home-row">
                        <div className="svg-icon d-flex justify-content-center align-items-center">
                            <div>    
                                {//<span className="info-text animated fadeInLeft">&mdash; Feb 27,28 Mar 1</span>
                                }<h1><span className="title-1 animated fadeIn">Show's over folks.<br/></span></h1>
                                {//<span className="title-2 animated fadeIn">REPEAT.</span></h1>
                                }<p className="text animated fadeInUp">Thank you making Abacus ’18, a grand success.<br/> See you in 525,600 minutes.</p>
                                <div className="powered-by">
                                    <span>Powered by</span>
                                    <img src={Motorq} alt="motorq" onClick={()=>window.location = "http://motorq.co/"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*(this.state.mount)?
                    <div>
                        <Overview/>
                        <About/>
                        <Team/>
                        <Sponsors/>
                        <CallToAction/>
                        <Footer/>
                    </div>
                    : ""
                */}
            </main>
        )
    }
}