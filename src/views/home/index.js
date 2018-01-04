import React, { Component } from 'react';
import Async from 'react-code-splitting';
import './home.css';
import Menu from '../../components/menu';
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

export default class Home extends Component{
   constructor(){
       super();
       this.state = {
           mount:false,
       }
   }
   
   componentDidMount(){
        this.setState({mount:true});
   }

    render(){
        return(
            <main>
                <div className="home-container container-fluid">
                    <Menu/>
                    <div className="row home-row">
                        <div className="svg-icon d-flex justify-content-center align-items-center">
                            <div>    
                                <span className="info-text animated fadeInLeft">&mdash; Abacus'18</span>
                                <h1><span className="title-1 animated fadeIn">EAT. CODE. SLEEP.<br/></span>
                                <span className="title-2 animated fadeIn">REPEAT.</span></h1>
                                <p className="text animated fadeInUp">Welcome to National Level Symposium of<br/>Dept. of CSE, CEG</p>
                            </div>
                        </div>
                    </div>
                </div>
                {(this.state.mount)?
                    <div>
                        <Overview/>
                        <About/>
                        <Team/>
                        <Sponsors/>
                        <CallToAction/>
                        <Footer/>
                    </div>
                    : ""
                }
            </main>
        )
    }
}