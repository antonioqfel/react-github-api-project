import React from 'react';


class GithubRepo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var repo  = this.props.repo;

        return (
            <a
                className="linkRepos"
                href={repo.html_url}>{repo.full_name}
                <span className="spanRepoForks">&nbsp;&nbsp;
                    {repo.forks}&nbsp;
                    <i className="fa fa-star" aria-hidden="true"></i>
                </span>
            </a>
        );
    }
};

export default GithubRepo;