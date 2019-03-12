import React, {Component} from 'react';

function getUserdata(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(
            (response) => {
                return response.json();
            }
        );
}

export class GitHub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            avatar_url: '',
            name: '',
            company: '',
            public_repos: 0,
            public_gists: 0,
            followers: 0,
            following: 0
        };
    }

    componentDidMount() {
        getUserdata(this.props.username)
            .then(
                (user) => {
                    console.log('Response', user);
                    this.setState({
                        login: user.login,
                        avatar_url: user.avatar_url,
                        name: user.name,
                        company: user.company,
                        public_repos: user.public_repos,
                        public_gists: user.public_gists,
                        followers: user.followers,
                        following: user.following
                    });
                }
            );
    }
    

    render() {
        return (
            <div>
                <div>{this.state.login}</div>
                <div><img src={this.state.avatar_url} alt='Avatar del usuario' width='100px' height='100px'/></div>
                <div>{this.state.name}, {this.state.company}</div>
                <div>Repos: {this.state.public_repos}, Gist: {this.state.public_gists}, Seguidores: {this.state.followers}, Siguiendo: {this.state.following}</div>
            </div>
        );
    }
};

export default GitHub;