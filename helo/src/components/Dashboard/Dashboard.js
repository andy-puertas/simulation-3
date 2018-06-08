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
        return (
            <div>
                <h3>Dashboard</h3>
            </div>
        )
    }
}