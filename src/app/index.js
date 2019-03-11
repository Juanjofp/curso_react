// src/app/index.js
import React, { Component } from 'react';
import './styles.css';

class App extends Component {

    render() {
        const count = parseInt(Date.now() / 1000);
        if(count % 2 === 0) {
            return (
                <div className="App">
                Soy un numero par {count}
                </div>
            );
        }
        return (
            <div className="App">
                Soy un numero impar {count}
            </div>
        );
    }
}

export default App;
