import React from 'react';
import {Link} from 'react-router';


class GithubUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var user  = this.props.user;

        return (
            <Link to={`/user/${user.login}`}>
                <img src={user.avatar_url} alt={`Avatar of ${user.login}`} className="imgFollowers"/>
                <span>{user.login}</span>
            </Link>
        );
    }
};

export default GithubUser;