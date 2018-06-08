import React from "react";
import './Nav.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
    console.log('nav: ', props)
        return (
            <div className='Nav'>
              <h4>Nav</h4>
                <div>
                    <img src={props.profilePic} alt="profilePic" />
                    <p>{props.username}</p>
                        <Link to='/dashboard'>
                            <button>Home</button>
                            <br />
                        </Link>
                
                        <Link to='/new'>
                            <button>New Post</button>
                            <br />
                        </Link>

                        <Link to='/'>
                            <button>Logout</button>
                            <br />
                        </Link>    
                </div>    
            </div>
        )
    
    }

function mapStateToProps(state) {
    return{
        username: state.username,
        profilePic: state.profilePic
    }
}



export default connect(mapStateToProps)(Nav)
    