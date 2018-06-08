import React, {Component} from 'react';
//import { Link } from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux';
import { getUser } from './../../ducks/reducer';
import './Auth.css';

class Auth extends Component {
    constructor(props){
        super(props);
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
            this.props.getUser(res.data);
            this.props.history.push('/dashboard');
        })
    }

    loginUser() {
        const {username, password} = this.state;
        axios.post('/api/login', {username, password})
        .then( res => {
            this.props.getUser(res.data);
            this.props.history.push('/dashboard');
        })
    }

    render() {
        console.log(this.props)
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



export default connect(null, { getUser })(Auth)
                