import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    renderFollower(repo) {

        return <li className="liRepos" key={repo.id}><GithubRepo repo={repo} /></li>;
    }

    componentDidMount() {

        var API_KEY = '42ab4ee4226cbd840df1a0cded2db2d22137748c';
        var url = `https://api.github.com/users/${this.props.params.username}/repos?access_token=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    repos: data
                })

            });
    }

    render() {

        if (!this.state.repos) {
            return <div>LOADING FOLLOWERS...</div>
        }

        return (
            <div className="followers-page">
                <h2>{`${this.props.params.username}'s repos`}</h2>
                <ul>
                    {this.state.repos.map(this.renderFollower.bind(this))}
                </ul>
            </div>
        );
    }
};

export default Repos;