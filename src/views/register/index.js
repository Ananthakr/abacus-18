import React,{Component} from 'react';
import Menu from '../../components/menu';
import {Link} from 'react-router-dom';
import './register.css';
import form_init from '../../utils/form_init';
import Fingerprint from 'fingerprintjs2';

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
    
    handleSubmit(status){
        //console.log("status"+status);
        if(status){
            this.clearForm();
            this.setState({successVisible:true,alertVisible:false});
        }else{
            this.setState({alertVisible:true});
        }

        this.setState({loading:false});

    }

    componentDidMount(){
            //for Formx 
            //console.log(document.getElementById("abacus_register"));
            form_init([{"uname":"abacus_register",'uid':'12017a98-53da-450c-a5b5-320b5f7f9709'}], Fingerprint,this);
        
    }
    render(){
        return(
            <main>
            <div className="generic-view-container container-fluid">
                <Menu/>
                <div className="generic-view-title">
                    <h1>Register</h1>
                    <p>(For workshops registration visit <Link to="/workshops">here</Link>)</p>
                </div>
            </div>
            
            <div className="container-fluid reg-container">
                <div className="row">
                <div className="col-lg-8 col-md-10 form-holder">
                <div className="row"><div className="reg-frwd-btn"><Link to="/sa">Interested in being a Student Ambassador? &rarr;</Link></div></div>
                    <form id="abacus_register">
                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="first-name">Name*</label>
                                <input value={this.state.firstName} name="first_name" onChange={(e)=>this.setState({firstName:e.target.value})} id="first-name" type="text"  className="form-control" placeholder="Name" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="email-address">Email address*</label>
                                <input value={this.state.email} name="email" onChange={(e)=>this.setState({email:e.target.value})} id="email-address" type="email" className="form-control" placeholder="name@mail.com" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="phone-no">Phone number*</label>
                                <input value={this.state.phone} name="phone_number" onChange={(e)=>this.setState({phone:e.target.value})} id="phone-no" type="text" className="form-control" placeholder="(+91)"/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="college">College/University*</label>
                                <input value={this.state.college} name="college" onChange={(e)=>this.setState({college:e.target.value})} id="college" type="text" className="form-control" placeholder="Your College/University" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="dept">Department*</label>
                                <input value={this.state.dept} name="department" onChange={(e)=>this.setState({dept:e.target.value})} id="dept" type="text" className="form-control" placeholder="Your Dept" required/>
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="year">Year</label>
                                <select value={this.state.year} name="year" onChange={(e)=>this.setState({year:e.target.value})} id="year" className="form-control" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
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
                        <button type="submit" className="btn btn-primary" disabled={this.state.loading}>{(this.state.loading)?<span>&nbsp;&nbsp;<div className="spinner"/></span>:"Submit"}</button>
                    </form>
                    
                </div>
                </div>
            </div>
        </main>
        )
    }
}