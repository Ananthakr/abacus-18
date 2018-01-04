import React,{Component} from 'react';
import { Link } from 'react-router-dom'

export default class Menu extends Component{
    
    constructor(){
        super();
        console.log("Menu Initiated");
    }
    componentDidMount(){
        console.log("Menu mounted");
    }

    render(){
        return(
            <label>
                <input type='checkbox' defaultValue="off"/>
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
                        <Link to="/workshops">Workshops</Link>
                    </li>
                    <li>
                        <Link to="/sa">Student Ambassador</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/">Experiments</Link>
                    </li>
                </ul>
            </label>
        )
    }
}