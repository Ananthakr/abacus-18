import React,{Component} from 'react';
import Menu from '../../components/menu'
import './sa.css';
import form_init from '../../utils/form_init';
import Fingerprint from 'fingerprintjs2';

export default class SA extends Component{
    
    constructor(){
        super();
        this.state = {
            firstName:"",lastName:"",address:"",city:"",phone:"",email:"",college:"",collegeLoc:"",dept:"",year:'1',gender:'Male',homeTown:"",alertVisible:false,successVisible:false,formVisible:false,gpa:"",whySA:"",extraCur:"",leadership:"",bestQs:"",loading:false,formInit:false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //to clear form after submit
    clearForm(){
        this.setState({
            firstName:"",lastName:"",address:"",city:"",phone:"",email:"",college:"",collegeLoc:"",dept:"",year:'1',gender:'Male',homeTown:"",gpa:"",whySA:"",extraCur:"",leadership:"",bestQs:"",loading:false,
        });
    }


    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }

    handleSubmit(status){

       // console.log("handle submit" );
        if(status){
            this.clearForm();
            this.setState({successVisible:true,alertVisible:false});
        }else{
            this.setState({alertVisible:true});
        }
        this.setState({loading:false});

    }
    
    componentDidUpdate(){
        if(this.state.formVisible && !this.state.formInit){
            form_init([{"uname":"abacus_ambassador",'uid':'4eab0920-724e-492d-af06-d373d73098c8'}], Fingerprint,this);
            this.setState({formInit:true});
        }
    }

    /**
     * returns element based on state
     */
    displayContent(){
        if(this.state.formVisible){

            return (
                <div className="col-lg-8 col-md-10 form-holder">
                <div className="row"><div className="back-btn" onClick={()=>{this.setState({formVisible:false})}}>&larr; Read the criteria</div></div>
                <form id="abacus_ambassador">
                    <div className="row">
                        <div class="form-group col-sm-12">
                            <label htmlFor="first-name">Name*</label>
                            <input required value={this.state.firstName} name="first_name" onChange={(e)=>this.setState({firstName:e.target.value})} id="first-name" type="text" class="form-control" placeholder="Name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email-address">Email address*</label>
                        <input required value={this.state.email} name="email" onChange={(e)=>this.setState({email:e.target.value})} id="email-address" type="email" class="form-control" placeholder="name@mail.com"/>
                    </div>
                    <div className="row">
                        <div class="form-group col-sm-6">
                            <label htmlFor="phone-no">Phone number*</label>
                            <input required value={this.state.phone} name="phone_number" onChange={(e)=>this.setState({phone:e.target.value})} id="phone-no" type="text" class="form-control" placeholder="(+91)"/>
                        </div>
                        <div class="form-group col-sm-6">
                            <label htmlFor="college">College/University*</label>
                            <input required value={this.state.college} name="college" onChange={(e)=>this.setState({college:e.target.value})} id="college" type="text" class="form-control" placeholder="Your College/Univerisity"/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="form-group col-sm-6">
                            <label htmlFor="dept">Department*</label>
                            <input required value={this.state.dept} name="department" onChange={(e)=>this.setState({dept:e.target.value})} id="dept" type="text" class="form-control" placeholder="Your Dept"/>
                        </div>
                        <div class="form-group col-sm-6">
                            <label htmlFor="year">Year</label>
                            <select value={this.state.year} name="year" onChange={(e)=>this.setState({year:e.target.value})} id="year" class="form-control" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                         </div>
                    </div>
                    {/*<div className="row">
                        <div class="form-group col-sm-6">
                            <label htmlFor="gender">Gender</label>
                            <select value={this.state.gender} name="gender" onChange={(e)=>this.setState({gender:e.target.value})} class="form-control" id="gender">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                <option>Prefer not to say</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6">
                        <label htmlFor="gpa">GPA</label>
                        <input value={this.state.gpa} name="gpa" onChange={(e)=>this.setState({gpa:e.target.value})} id="gpa" type="text" class="form-control" placeholder="Your GPA"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="why-sa">Why do you want to be a Student Ambassador?*</label>
                        <textarea required value={this.state.whySA} name="why" onChange={(e)=>this.setState({whySA:e.target.value})}id="why-sa" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>
                    <div class="form-group">
                        <label htmlFor="extra-curricular">Have you been a part of any volunteering/extra-curricular activities? If any, please mention below. </label>
                        <textarea value={this.state.extraCur} name="voluteering_extra" onChange={(e)=>this.setState({extraCur:e.target.value})} id="extra-curricular" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>
                    <div class="form-group">
                        <label htmlFor="leadership-roles">Leadership roles, if any?</label>
                        <textarea value={this.state.leadership} name="leader_roles" onChange={(e)=>this.setState({leadership:e.target.value})} id="leadership-roles" class="form-control" rows="3" placeholder="Your Answer"></textarea>
                    </div>
                    <div class="form-group">
                        <label htmlFor="best-qualities">What qualities do you possess that will make you a suitable Student Ambassador?*</label>
                        <textarea required value={this.state.bestQs} names="qualities" onChange={(e)=>this.setState({bestQs:e.target.value})} id="best-qualities" class="form-control" rows="3" placeholder="Your Answer"></textarea>
            </div>*/}

                    { (this.state.alertVisible) ?
                            <div class="alert alert-warning alert-dismissible fade show">
                                <button onClick={()=>this.setState({alertVisible:false})} type="button" class="close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Sorry!</strong> Check your internet connection.
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

                    <button type="submit" class="btn btn-primary" disabled={this.state.loading}>{(this.state.loading)?<span>&nbsp;&nbsp;<div className="spinner"/></span>:"Submit"}</button>
                </form>
            </div>
            ) ;
        }else{
            return  (
                        <div className="col-lg-8 col-md-10 criteria-holder">
                            <h5>Criteria</h5>
                            <div className="criteria-content">
                                <p className="info-text">Interested in becoming a Student Ambassador for Abacus’18? Check out the criteria below.</p>
                                <ul>
                                    <li>Must be an undergraduate with second year standing and above.</li>
                                    <li>Must be available to contact at any time</li>
                                    <li>Must make atleast 10 teams of students to join workshops & 15 persons to join the events.</li>
                                    <li>Represent him/her as a representative of their college.</li>
                                    <li>Must maintain a network of contacts of students in their college.</li>
                                    <li>Must have a decent communication skill.</li>
                                </ul>
                            </div>
                            <div className="frwd-btn" onClick={()=>{this.setState({formVisible:true,formInit:false})}}>Proceed to apply &rarr;</div>
                        </div>
                    );
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