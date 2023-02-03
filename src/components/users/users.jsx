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

    renderStat(stat) {
        return (
            <li key={stat.name} className='user-info_stat'>
                <Link to={stat.url}>
                    <p className='user-info_stat-value'>{stat.value}</p>
                    <p className='user-info_stat-name'>{stat.name}</p>
                </Link>
            </li>
        )
    }

    render() {
        if(!this.state.user) {
            return (
                <div className='user-page'>LOADING DATA...</div>
            )
        }
        const user = this.state.user;

        const stats = [

            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.params.username}/following`
            }

        ];

        return (
            <div className='user-page'>
                <div className='user-info'>
                    <Link className='user-info_text' to={`/user/${user.login}`}>
                        <img className='user-info_avatar' src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info_title">{user.login} ({user.name})</h2>
                        <p className='user-info_bio'>{user.bio}</p>
                    </Link>

                    <ul className='user-info_stats'>
                        {stats.map(this.renderStat)}
                    </ul>
                </div>
            </div>
        )


    }
};

export default Users