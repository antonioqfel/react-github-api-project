import React from 'react';
import GithubUser from './GithubUser';


class Following extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    renderFollower(follower) {

        return <li key={follower.id}><GithubUser user={follower} /></li>;
    }

    componentDidMount() {

        var API_KEY = '42ab4ee4226cbd840df1a0cded2db2d22137748c';
        var url = `https://api.github.com/users/${this.props.params.username}/following?access_token=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    followers: data
                })

            });
    }

    render() {

        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        }

        return (
            <div className="followers-page">
                <h2>{this.props.params.username} is following</h2>
                <ul>
                    {this.state.followers.map(this.renderFollower.bind(this))}
                </ul>
            </div>
        );
    }
};

export default Following;