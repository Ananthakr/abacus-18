import React,{Component} from 'react';
import Menu from '../../components/menu'
import './sa.css';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC90aMVW0OGhUKFIjlA1VM2xMkPJvOp7SM",
    authDomain: "abacus-18.firebaseapp.com",
    databaseURL: "https://abacus-18.firebaseio.com",
    projectId: "abacus-18",
    storageBucket: "abacus-18.appspot.com",
    messagingSenderId: "51357261044"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var db=firebase.firestore();

export default class SA extends Component{
    
    constructor(){
        super();
        this.state = {
            firstName:"",lastName:"",address:"",city:"",phone:"",email:"",college:"",collegeLoc:"",dept:"",year:'1',gender:'Male',homeTown:"",alertVisible:false,successVisible:false,formVisible:false,gpa:"",whySA:"",extraCur:"",leadership:"",bestQs:"",loading:false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        //console.log("data : "+this.state.firstName+this.state.gender+this.state.email );
        this.setState({loading:true});
        if(this.state.firstName!==""&&this.state.city!==""&&this.state.phone!==""&&this.state.email!==""&&this.state.college!==""&&this.state.dept!==""&&this.state.whySA!==""&&this.state.bestQs!==""){
            console.log("submitting");
            
            db.collection("student-ambassador").add({
            firstName:this.state.firstName,lastname:this.state.lastName,address:this.state.address,email:this.state.email,college:this.state.college,collegeLocation:this.state.collegeLoc,year:this.state.year,gender:this.state.gender,hometown:this.state.homeTown,gpa:this.state.gpa,whySA:this.state.whySA,extraCur:this.state.extraCur,leadership:this.state.leadership,bestQs:this.state.bestQs
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

            this.setState({successVisible:true,alertVisible:false});
        }else{
            this.setState({alertVisible:true});
        }
        this.setState({loading:false});

    }

    /**
     * returns element based on state
     */
    displayContent(){
        if(this.state.formVisible){
            return (
                <div className="col-lg-8 col-md-10 form-holder">
                <div className="row"><div className="back-btn" onClick={()=>{this.setState({formVisible:false})}}>&larr; Read the criteria</div></div>
                <form>
                    <div className="row">
                        <div class="form-group col-sm-6">
                            <label htmlFor="first-name">First Name*</label>
                            <input value={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})} id="first-name" type="text" class="form-control" placeholder="First Name"/>
                        </div>
                        <div class="form-group col-sm-6">
                            <label htmlFor="last-name">Last Name</label>
                            <input value={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})} id="last-name" type="text" class="form-control" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})} id="address" class="form-control" rows="2" placeholder="Your Street and Area"></textarea>
                    </div>
                    <div className="row">
                            <div class="form-group col-sm-6">
                            <label htmlFor="city">City*</label>
                            <input value={this.state.city} onChange={(e)=>this.setState({city:e.target.value})} id="city" type="text" class="form-control" placeholder="Your City"/>
                        </div>
                        <div class="form-group col-sm-6">
                            <label htmlFor="phone-no">Phone number*</label>
                            <input value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} id="phone-no" type="text" class="form-control" placeholder="(+91)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email-address">Email address*</label>
                        <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} id="email-address" type="email" class="form-control" placeholder="name@mail.com"/>
                    </div>
                    <div className="row">
                        <div class="form-group col-sm-8">
                            <label htmlFor="college">College/Univerisity*</label>
                            <input value={this.state.college} onChange={(e)=>this.setState({college:e.target.value})} id="college" type="text" class="form-control" placeholder="Your College/Univerisity"/>
                        </div>
                        <div class="form-group col-sm-4">
                            <label htmlFor="college-location">College/Univerisity Location</label>
                            <input value={this.state.collegeLoc} onChange={(e)=>this.setState({collegeLoc:e.target.value})} id="college-location" type="email" class="form-control" placeholder="Your College/Univeristy's Location"/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="form-group col-sm-6">
                            <label htmlFor="dept">Department*</label>
                            <input value={this.state.dept} onChange={(e)=>this.setState({dept:e.target.value})} id="dept" type="text" class="form-control" placeholder="Your Dept"/>
                        </div>
                        <div class="form-group col-sm-6">
                            <label htmlFor="year">Year</label>
                            <select value={this.state.year} onChange={(e)=>this.setState({year:e.target.value})} id="year" class="form-control" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                         </div>
                    </div>
                    <div className="row">
                        <div class="form-group col-sm-6">
                            <label htmlFor="gender">Gender</label>
                            <select value={this.state.gender} onChange={(e)=>this.setState({gender:e.target.value})} class="form-control" id="gender">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer not to say</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6">
                            <label htmlFor="hometown">Hometown</label>
                            <input value={this.state.homeTown} onChange={(e)=>this.setState({homeTown:e.target.value})} id="hometown" type="text" class="form-control" placeholder="Your Hometown"/>
                        </div>
                    </div>
                    <div class="form-group">
                            <label htmlFor="gpa">GPA</label>
                            <input value={this.state.gpa} onChange={(e)=>this.setState({gpa:e.target.value})} id="gpa" type="text" class="form-control" placeholder="Your GPA"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="why-sa">Why do you want to be a Student Ambassador?*</label>
                        <textarea value={this.state.whySA} onChange={(e)=>this.setState({whySA:e.target.value})}id="why-sa" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>
                    <div class="form-group">
                        <label htmlFor="extra-curricular">Have you been a part of any volunteering/extra curricular activities..? If any mention. </label>
                        <textarea value={this.state.extraCur} onChange={(e)=>this.setState({extraCur:e.target.value})} id="extra-curricular" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>
                    <div class="form-group">
                        <label htmlFor="leadership-roles">Leadership roles if any? </label>
                        <textarea value={this.state.leadership} onChange={(e)=>this.setState({leadership:e.target.value})} id="leadership-roles" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>
                    <div class="form-group">
                        <label htmlFor="best-qualities">What are the best qualities you possess that can help you to be a Student Smbassador?*</label>
                        <textarea value={this.state.bestQs} onChange={(e)=>this.setState({bestQs:e.target.value})} id="best-qualities" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>

                    { (this.state.alertVisible) ?
                            <div class="alert alert-warning alert-dismissible fade show">
                                <button onClick={()=>this.setState({alertVisible:false})} type="button" class="close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Sorry!</strong> You should check in on some of those fields above.
                            </div>
                        : ""
                    }
                    { (this.state.successVisible) ?
                            <div class="alert alert-success alert-dismissible fade show">
                                <button onClick={()=>this.setState({successVisible:false})} type="button" class="close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Thank you!</strong> We will get back to you soon
                            </div>
                        : ""
                    }

                    <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">Submit{(this.state.loading)?<span>&nbsp;&nbsp;<div className="spinner"/></span>:""}</button>
                </form>
            </div>
            ) ;
        }else{
            return  (
                        <div className="col-lg-8 col-md-10 criteria-holder">
                            <h5>Criteria</h5>
                            <div className="criteria-content">
                                <p className="info-text">(Read Criteria before applying)</p>
                                <ul>
                                    <li>Must be an undergraduate with second year standing and above.</li>
                                    <li>Must maintain a satisfactory academic score.</li>
                                    <li>Must be available to contact at any time.</li>
                                    <li>Must make atleast 10 teams of students to join workshops & 15 persons to join the events.</li>
                                    <li>Represent him/her as a representative of their college.</li>
                                    <li>Must maintain a network of contacts of students in their college.</li>
                                    <li>Must have a decent communication skill.</li>
                                </ul>
                            </div>
                            <div className="frwd-btn" onClick={()=>{this.setState({formVisible:true})}}>Proceed to apply &rarr;</div>
                        </div>) ;
        }
    }

    render(){
        return(
            <main>
            <div className="generic-view-container container-fluid">
                <Menu/>
                <div className="generic-view-title">
                    <h1>Student Ambassador</h1>
                </div>
            </div>
            <div className="container-fluid sa-container">
                <div className="row">
                   {this.displayContent()}
                </div>
            </div>
        </main>
        )
    }
}