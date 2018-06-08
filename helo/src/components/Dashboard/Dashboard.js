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
    render() {
        let posts = this.state.posts.map( el => {
            return(
                <div></div>
            )
        })
        return (
            <div>
                <h3>Dashboard</h3>
            </div>
        )
    }
}