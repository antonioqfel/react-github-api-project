import React from 'react';
import GithubUser from './GithubUser';
import Infinite from 'react-infinite';


class Following extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            loading: false,
            followers: []
        }
        this.loadingSpinner = this.loadingSpinner.bind(this);
    }

    renderFollower(follower) {

        return <li key={follower.id}><GithubUser user={follower} /></li>;
    }

    fetchData() {

        // Before doing the AJAX call in fetchData, set the loading state to true.
        this.setState({
            loading: true
        })

        // Variables for the URL
        var API_KEY = '42ab4ee4226cbd840df1a0cded2db2d22137748c';
        var url = `https://api.github.com/users/${this.props.params.username}/following?access_token=${API_KEY}&page=${this.state.page}&per_page=50`;

        // AJAX Call
        fetch(url)
            .then(response => response.json())
            .then(data => {

                var myCurrentArray = this.state.followers;
                var myCurrentPage = this.state.page;

                this.setState({
                    // Concat method to add the new items to my existing this.state.followers array.
                    followers: myCurrentArray.concat(data),
                    loading: false,
                    page: myCurrentPage + 1
                });

            });
    }

    loadingSpinner() {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    render() {

        return (
            <div className="followers-page">
                <h2>{this.props.params.username} is following</h2>
                <ul>
                    <Infinite
                        isInfiniteLoading={this.state.loading}
                        onInfiniteLoad={this.fetchData.bind(this)}
                        useWindowAsScrollContainer
                        elementHeight={40}
                        infiniteLoadBeginEdgeOffset={100}
                        loadingSpinnerDelegate={this.loadingSpinner()}
                    >
                        {this.state.followers.map(this.renderFollower.bind(this))}
                    </Infinite>
                </ul>
            </div>
        );
    }
};

export default Following;