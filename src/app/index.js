// src/app/index.js
import React, { Component } from 'react';
import Almanaque from '../almanaque';
import './styles.css';

// Componente tipo función
function Welcome(props){
    // props contiene {name: 'Juanjo'}
    return (
        <div>Welcome {props.name} to ReactJS!</div>
    );
}

// Componente tipo Clase
class App extends Component {
    render() {
        return (
            <div className='App'>
                <Welcome
                    name='Juanjo'/>
                <Almanaque/>
            </div>
        );
    }
}

export default App;
