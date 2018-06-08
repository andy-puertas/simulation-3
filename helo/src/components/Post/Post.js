import React, {Component} from 'react';

export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }
    render() {
        return (
            <div>
                <h3>Post</h3>
            </div>
        )
    }
}