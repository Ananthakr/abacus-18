import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default class Menu extends Component{
    
    constructor(){
        super();
        this.state = {checked:false};
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(e) {
        let chked = !this.state.checked;
        this.setState({ checked:chked });
        console.log("menu: "+chked);
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