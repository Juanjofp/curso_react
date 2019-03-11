// src/app/index.js
import React, { Component } from 'react';
import './styles.css';

function formatName(user) {
    return <p>{user.name + ' ' + user.lastname}</p>
}
class App extends Component {
    render() {
        const user = {name: 'Juanjo', lastname: 'Franco'}
        const message = <span>Hello {formatName(user)}</span>
        return (
            <div className="App">
                {message}
            </div>
        );
    }
}

export default App;
