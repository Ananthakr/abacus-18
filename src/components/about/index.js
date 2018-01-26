import React,{  Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './about.css';

export default class About extends Component{
    
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
            <section>
                <div className="container-fluid about-container">
                    <div className="row">
                                <div className={(this.state.visible) ? "col about-title animated fadeIn":"col about-title invisible"}>
                                    about&nbsp;<span className="dash"></span> 
                                </div>
                    </div>
                    <div className="row">
                    <VisibilitySensor scrollCheck={true} active={!this.state.visible} partialVisibility={true} onChange={this.onVisibilityChange} />
                        <div className={(this.state.visible)?"col about-text animated fadeInUp":"col about-text invisible"}>
                        Abacus, the national level technical symposium, conducted by CSEA, primarily focuses on showcasing the skills of some of the best brains in the country. Abacus, over the years, has weaved a technical web, connecting smart minds in digital era, thus helping them unleash their technical prowess. With an interesting array of events and workshops lined up, Abacus 2018 is all geared up to set trends.<br/>
                        <br/>CSEA (Computer Science and Engineering Association), the student body of the Department of Computer Science and Engineering has always been successful in its mission of quenching the technical thirst of tech-wizards both on campus and around the country. Sync, the intra-college symposium and Abacus, the inter-college symposium are the two juggernauts of this enthralling team of students. Undoubtedly, they have always been great triumphs in emboldening the student community.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}