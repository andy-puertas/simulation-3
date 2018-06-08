import React, {Component} from 'react';
//import axios from 'axios';
import './Auth.css'

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='Auth'>
                <h1>Helo</h1>

                Username: <input />
                <br />
                <br />

                Password: <input />
                <br />
                <br />

                <button>Login</button>
                <button>Register</button>
            
            </div>
        )
    }
}