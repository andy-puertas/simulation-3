import React, {Component} from 'react';
//import { Link } from 'react-router-dom'
import axios from 'axios';
import './Auth.css';

export default class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind( this )
        this.handlePassword = this.handlePassword.bind( this )
        this.registerUser = this.registerUser.bind( this )
        this.loginUser = this.loginUser.bind( this )
    }

    handleUsername(input) {
        this.setState({
            username: input
        })
    }

    handlePassword(input) {
        this.setState({
            password: input
        })
    }

    registerUser() {
        const {username, password} = this.state;
        axios.post('/api/register', {username, password})
        .then( res => {
            this.props.history.push('/dashboard');
        })
    }

    loginUser() {
        const {username, password} = this.state;
        axios.post('/api/login', {username, password})
        .then( res => {
            this.props.history.push('/dashboard');
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='Auth'>
                <h1>Helo</h1>

                <p>Username:</p> 
                <input onChange={(e) => {this.handleUsername(e.target.value)}} type='text'/>
                <br />
                <br />

                <p>Password:</p>
                <input onChange={(e) => {this.handlePassword(e.target.value)}} type='password'/>
                <br />
                <br />

                <button onClick={this.loginUser}>Login</button>

                <button onClick={this.registerUser}>Register</button>
                
            </div>
        )
    }
}
                