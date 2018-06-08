import React from "react";
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav() {
    
        return (
            <div>
                <h3>Nav</h3>
                <div>
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