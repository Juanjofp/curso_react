import React, {Component} from 'react';
import Loading from '../loading';
import Warning from '../warning';

function getUserdata(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(
            (response) => {
                if(response.status !== 404) {
                    return response.json();
                }
                else {
                    throw new Error('User not found');
                }
            }
        );
}

export class GitHub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: this.props.username || 'juanjofp',
            login: '',
            avatar_url: '',
            name: '',
            company: '',
            public_repos: 0,
            public_gists: 0,
            followers: 0,
            following: 0,
            isLoading: false,
            error: false
        };

        this.getNewUser = this.getNewUser.bind(this);
    }

    getNewUser() {
        if(!this.state.search) return;

        this.setState({isLoading: true, error: false});
        getUserdata(this.state.search)
            .then(
                (user) => {
                    this.setState({
                        login: user.login,
                        avatar_url: user.avatar_url,
                        name: user.name,
                        company: user.company,
                        public_repos: user.public_repos,
                        public_gists: user.public_gists,
                        followers: user.followers,
                        following: user.following,
                        isLoading: false,
                        error: false
                    });
                },
                (error) => {
                    this.setState({
                        error: true,
                        isLoading: false
                    });
                }
            );
    };

    componentDidMount() {
        this.getNewUser();
    }

    handleRequest() {

    }
    
    render() {
        let ComponentBody;
        if(this.state.isLoading) {
            ComponentBody = (<Loading/>);
        }
        else {
            ComponentBody = (
                <div>
                    <div>{this.state.login}</div>
                    <div><img src={this.state.avatar_url} alt='Avatar del usuario' width='100px' height='100px'/></div>
                    <div>{this.state.name}, {this.state.company}</div>
                    <div>Repos: {this.state.public_repos}, Gist: {this.state.public_gists}, Seguidores: {this.state.followers}, Siguiendo: {this.state.following}</div>
                </div>
            );
        }
        return (
            <div>
                <div>
                    <label>
                        Usuario de GitHub
                        <input type='text' onChange={(e) => this.setState({search: e.target.value || ''})} value={this.state.search}/>
                        <button onClick={this.getNewUser}>Buscar</button>
                    </label>
                    {ComponentBody}
                    <Warning error={this.state.error} message={`El usuario ${this.state.search} no existe!`}/>
                </div>
                
            </div>
        );
    }
};

export default GitHub;