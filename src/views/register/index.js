import React,{Component} from 'react';
import Menu from '../../components/menu';
import {Link} from 'react-router-dom';
import './register.css';
import Firebase from '../../firebase.config';

var db=Firebase.firestore();
export default class Register extends Component{    

    constructor(props){
        super(props);
        this.state = {
            firstName:"",lastName:"",address:"",city:"",phone:"",email:"",college:"",collegeLoc:"",dept:"",year:'1',gender:'Male',homeTown:"",alertVisible:false,successVisible:false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //to clear form after submit
    clearForm(){
        this.setState({
            firstName:"",lastName:"",address:"",city:"",phone:"",email:"",college:"",collegeLoc:"",dept:"",year:'1',gender:'Male',homeTown:"",
        });
    }

    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.setState({loading:true});
        //console.log("data : "+this.state.firstName+this.state.gender+this.state.email );
        if(this.state.firstName!==""&&this.state.city!==""&&this.state.phone!==""&&this.state.email!==""&&this.state.college!==""&&this.state.dept!==""){
            //console.log("submitting");
            
            db.collection("registration").doc(this.state.firstName+"-"+this.uuidv4().substr(0,7)).set({
                firstName:this.state.firstName,lastname:this.state.lastName,address:this.state.address,email:this.state.email,college:this.state.college,collegeLocation:this.state.collegeLoc,year:this.state.year,gender:this.state.gender,hometown:this.state.homeTown,loading:false,
            })
            .then(function() {
                //console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            

            this.clearForm();
            this.setState({successVisible:true,alertVisible:false});
        }else{
            this.setState({alertVisible:true});
        }

        this.setState({loading:false});

    }

    render(){
        return(
            <main>
            <div className="generic-view-container container-fluid">
                <Menu/>
                <div className="generic-view-title">
                    <h1>Register</h1>
                </div>
            </div>
            <div className="container-fluid reg-container">
                <div className="row">
                <div className="col-lg-8 col-md-10 form-holder">
                <div className="row"><div className="reg-frwd-btn"><Link to="/sa">Interested to be Student Ambassador? &rarr;</Link></div></div>
                    <form>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="first-name">First Name*</label>
                                <input value={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})} id="first-name" type="text"  className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="last-name">Last Name</label>
                                <input value={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})} id="last-name" type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})} id="address" className="form-control" rows="2" placeholder="Your Street and Area"></textarea>
                        </div>
                        <div className="row">
                                <div className="form-group col-sm-6">
                                <label htmlFor="city">City*</label>
                                <input value={this.state.city} onChange={(e)=>this.setState({city:e.target.value})} id="city" type="text" className="form-control" placeholder="Your City"/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="phone-no">Phone number*</label>
                                <input value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} id="phone-no" type="text" className="form-control" placeholder="(+91)"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-address">Email address*</label>
                            <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} id="email-address" type="email" className="form-control" placeholder="name@mail.com"/>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-8">
                                <label htmlFor="college">College/Univerisity*</label>
                                <input value={this.state.college} onChange={(e)=>this.setState({college:e.target.value})} id="college" type="text" className="form-control" placeholder="Your College/Univerisity"/>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="college-location">College/Univerisity Location</label>
                                <input value={this.state.collegeLoc} onChange={(e)=>this.setState({collegeLoc:e.target.value})} id="college-location" type="email" className="form-control" placeholder="Your College/Univeristy's Location"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="dept">Department*</label>
                                <input value={this.state.dept} onChange={(e)=>this.setState({dept:e.target.value})} id="dept" type="text" className="form-control" placeholder="Your Dept"/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="year">Year</label>
                                <select value={this.state.year} onChange={(e)=>this.setState({year:e.target.value})} id="year" className="form-control" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="gender">Gender</label>
                                <select value={this.state.gender} onChange={(e)=>this.setState({gender:e.target.value})} className="form-control" >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="hometown">Hometown</label>
                                <input value={this.state.homeTown} onChange={(e)=>this.setState({homeTown:e.target.value})} id="hometown" type="text" className="form-control" placeholder="Your Hometown"/>
                            </div>
                        </div>
                        { (this.state.alertVisible) ?
                            <div className="alert alert-warning alert-dismissible fade show">
                                <button onClick={()=>this.setState({alertVisible:false})} type="button" className="close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Sorry!</strong> You should check in on some of those fields above.
                            </div>
                        : ""
                        }
                        { (this.state.successVisible) ?
                            <div className="alert alert-success alert-dismissible fade show">
                                <button onClick={()=>this.setState({successVisible:false})} type="button" className="close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Thank you!</strong> We will get back to you soon
                            </div>
                        : ""
                        }
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit{(this.state.loading)?<span>&nbsp;&nbsp;<div className="spinner"/></span>:""}</button>
                    </form>
                </div>
                </div>
            </div>
        </main>
        )
    }
}