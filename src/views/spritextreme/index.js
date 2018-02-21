import React,{Component} from 'react';
import renderHTML from 'react-render-html';
import Menu from '../../components/menu/index';
import Footer from '../../components/footer/index.js';

export default class SpriteXtreme extends Component{
    
    constructor(){
        super();
        this.state = {
             content:["<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><p>Do you want to solve problems that can help billions of people? Do you believe that technology can make life simpler? Does designing, architecting, coding and marketing apps to solve tough problems excite you? Then we have an interesting opportunity for you.</p><p>You may think you have an inkling of what happens in a hackathon -you're wrong. <strong>SpriteXtreme</strong> is not just any hackathon. It&rsquo;s an initiative by <a href='https://www.spritle.com/'>Spritle</a> to promote young developers and wannabe entrepreneurs to learn, build and deploy apps on their own. SpriteXtreme goes beyond just developing an app and is ultimately a platform for you and your team to build solutions to a problem and create a working app. The culture of it encapsulates so much more and what we have lined up for you will make you realize what it really means to be a creator. Go ahead, take a look and prepare to be enthralled.</p>",
             "<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><ul><li>You have got precisely 12 hours to develop your app during the hackathon.</li><li>The hackathon kicks off at 9PM IST on 28th Feb 2018 and ends at 9AM IST 1st March 2018</li><li>After those 12 hours are up, evaluation will start. No additional features or bug fixes are allowed during evaluation.</li><li>Towards the end of the hackathon, you will be asked to present your app to the panel. Post the panel review, the top teams will get to present their ideas and demo their apps on stage with their go-to market strategy and ROI plans</li><li>The jury will evaluate the teams that present on stage based on the originality of the idea, the completeness of the product, the tech implemented in the app, and the Marketing and ROI(Return of Investment) plans.</li></ul>",
             "<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><ul><li>Please bring your own laptop</li><li>Teams are composed of 1 to 4 individuals. No more than four people are allowed on a team. Since the hackathon involves more than just developing an app and consists of a pitching session and a solid marketing and ROI(Return on Investment) plan, individuals don't need to be programmers.</li><li>Libraries, plugins, and modules that are public and freely available are allowed and encouraged.</li><li>Teams can pick from the list of tasks given by us or bring up a new idea. The new idea should be submitted before and approved by the jury.</li><li>Funding or business association can be offered only to teams who pick their own ideas and turn out as winners.</li><li> Timings: 8pm-8am </li></ul>",
             "<a href='https://www.spritle.com/' target='_blank'><img src='../SpriteXtreme.png' alt='SpriteXtreme'/></a><p>The problem statement is open ended where you have the freedom to choose any problem you want and propose a solution. If you can&rsquo;t think of any, then don&rsquo;t worry, we have some ideas which you can use to develop solutions in your own way.</p><br/><div>The following are a few sample problems that you can take as a basis for your app. You are free to select any one of the following, or, take a different problem and propose a solution.</div><div><table class='table'><colgroup><col /><col /></colgroup><tbody><tr><td>1</td><td>Should I break up or not? Should I divorce her/him or not? - An app which can interact with people, get to know their problems, analyse and suggests a solution for their problems(AI &amp; ML driven app)</td></tr><tr><td>2</td><td>Scans the prescription and shows the availability of medicines (location wise, name of the store). Or the other use case is Searching the medicine in the app, wherein registered medical shops with the medicines will be displayed according to location nearby</td></tr><tr><td>3</td><td>Blood bank centralization app- Every user can initiate an emergency request for a blood type. similar to uber/ola request p&zwnj;ing, request is sent to all the blood banks in 3km radius. If time out then goes to blood banks in 15 km radius. Then to doners in 3 km radius, and so on. We need to have all blood bank and doner details registered and app installed.</td></tr><tr><td>4</td><td>Eatsoon- QR codes barcode scan on the food jars and medicines in mobile app to keep track the Best before dates and remind users in time I should consume something really soon.</td></tr><tr><td>5</td><td>A social network between students and companies which should help students expose their skills to industries</td></tr></tbody></table></div><p>You're open to come up with your own idea and get it approved.<br/> timings: 8pm-8am - hackathon<br/>Onsite payment for registration-150 per team</p><a href='https://www.surveymonkey.com/r/RTVV3JW' style='text-decoration:underline;text-laign:center;'>For Registrations click here</a><br/>Sangameshwaran R S -  9677947957"],
             active:0,  
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <main>
                <div className="generic-view-container container-fluid">
                    <Menu/>
                    <div className="generic-view-title">
                        <h1>SpriteXtreme</h1>
                    </div>
                </div>
                
            <div className="item-container container-fluid">
                <span className="back-btn text-center" onClick={() => this.context.router.history.goBack()}>&larr;Back</span>
                <ul className="nav justify-content-center animated fadeIn">
                    <li className="nav-item">
                        <div className={(this.state.active===0)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:0})}>Description</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===1)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:1})}>Format</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===2)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:2})}>Rules</div>
                    </li>
                    <li className="nav-item">
                        <div className={(this.state.active===3)?"nav-link active":"nav-link"} onClick={()=> this.setState({active:3})}>Register</div>
                    </li>
                </ul>
                <div className="tab-container container col-md-8 mx-auto">
                    <p>{renderHTML(this.state.content[this.state.active])}</p>
                </div>
            </div>
            <Footer/>
            </main>
        )
    }
}