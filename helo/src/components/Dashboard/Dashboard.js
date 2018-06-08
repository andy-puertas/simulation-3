import React, {Component} from 'react';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }
    }

    handleSearch(input){
        this.setState({
            search: input
        })
    }


    render() {
        // let posts = this.state.posts.map( el => {
        //     return(
        //         <div></div>
        //     )
        // })

        return (
            <div>
                
                <p>Search Bar</p>
                <br />
               
                <input onChange={(e) => {this.handlePassword(e.target.value)}} type='text'/>
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}