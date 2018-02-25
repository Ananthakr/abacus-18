import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const content = [
    "<p><em>&lsquo;The only place where your dream becomes impossible is in your dreams&rsquo;</em></p><p>Are you an eccentric creator with the ability to think out of the box? Then fire up that grey matter and show th world what you&rsquo;re capable of. Come up with an idea that can change life as we know it and use your potential to bring your idea to life with Abacus&rsquo; Re&rsquo;Present. Wow the judges with your innovative ideas in the form of a model, prototype, apps or any software product.<br/>Date: Feb 28 and Mar 1</p>",
    "<p><strong>Round 1:</strong></p><ul><li>Participants have to mail the abstract electing their topic of interest provided in the list of domains.</li><li>Create a document containing the following details</li></ul><ol><li>Name of Team</li><li>Name of Team-Leader</li><li>Number of members in the team</li><li>Details of Team members (including Team Leader, Name, Email ID, Contact number)</li><li>Title of the paper</li><li>Abstract</li><li>Innovation (explain how your design is unique)</li><li>Underlying principles/technical details</li></ol><ul><li>Participants should mail the above document to <a href='mailto:paperpresentation@abacus.org.in'>paperpresentation@abacus.org.in</a></li><li>Last date for submission is 15th Feb, 2018.</li></ul><p><strong>Round2:</strong></p><ul><li>On the basis of the submissions received, respective teams will be selected for the final presentation.</li><li>A confirmation mail will be sent to the selected teams to take part in the event during ABACUS&rsquo;18 and present their paper.</li><li>Presentations should not exceed 15 minutes.</li><li>The maximum time allotted for single presentation is 12 minutes, followed by a question answer session section for 3 minutes. Additional time will be considered a penalty and affect scoring.</li><li>The presentation will be judged on the basis of innovation, in depth knowledge of the field and presentation skills.</li></ul><p><strong>DOMAINS</strong></p><p>1) Natural User Interface (NUI)</p><p>2) Human Computer Interface (HCI)</p><p>3) Blockchain</p><p>4) Virtual Reality(VR) &amp; Augmented Reality(AR)</p><p>5) Computational Linguistics</p><p>6) Brain Computer Interface (BCI)</p><p>7) Internet of Things (IoT)</p><p>8) Smart Home Environment (SHE)</p><p>9) Advanced Machine Learning(ML)</p><p>10) Deep Learning (DT)</p><p>11) Data Mining</p><p>12) Software defined Networks</p><p>13) Virtualization Technologies</p><p>14) Wireless Technologies</p><p>15) Cyber Crime and Security</p>",
    "<ul><li>Maximum number of participants per team should not exceed 3.</li><li>Participants may be part of only one team at a time.</li><li>Each participant should bring their respective college ID proof.</li><li>Teams may consist of participants from different colleges.</li><li>Plagiarism is not encouraged.</li><li>Any number of teams can come from same college.</li><li>In case of any discrepancy, decision made by the judge is final.</li></ul>",
    "<p>Send your abstracts to : <a href='mailto:paperpresentation@abacus.org.in'>paperpresentation@abacus.org.in </a></p><p>For more details contact: Vijay 9489029770 <br/>Srinath  9790893949</p>"
];

export default class Menu extends Component{
    
    constructor(){
        super();
        this.state = {checked:false};
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(e) {
        let chked = !this.state.checked;
        this.setState({ checked:chked });
        //console.log("menu: "+chked);
    }

    render(){
        return(
            <label>
                <input type='checkbox'  checked={this.state.checked} onClick={this.toggle} />
                <span className='menu'>
                    <span className='hamburger'></span>
                </span>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/workshops">Workshops Registration</Link>
                    </li>
                    {/*<li>
                        <Link to={{pathname: "/events/Re'present",state: { info: content} }}>Paper Presentation</Link>
                    </li>*/}
                    <li>
                        <a href="https://goo.gl/forms/MI95q83eJOwV5Q8T2">Accomodation</a>
                    </li>
                    <li>
                        <a href="https://github.com/Ananthakr/abacus-18/raw/formx/build/abacus18_schedule.pdf" target="_blank">Download Schedule</a>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    {/*<li>
                        <Link to="/">Experiments</Link>
                    </li>*/}
                </ul>
            </label>
        )
    }
}