import React, { Component } from 'react';
import './home.css';
import Menu from '../../components/menu';
import Overview from '../../components/overview';
import About from '../../components/about';
import Team from '../../components/team';
import Sponsors from '../../components/sponsors';
import CallToAction from '../../components/callToAction';
import Footer from '../../components/footer';

export default class Home extends Component{
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

                <Overview/>
                <About/>
                <Team/>
                <Sponsors/>
                <CallToAction/>
                <Footer/>
            </main>
        )
    }
}