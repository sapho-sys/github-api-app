import React from 'react';
import { Link } from 'react-router';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(res => res.json())
        .then(
            user => {
                this.setState({
                    user: user
                });

            }
        )
    };
}