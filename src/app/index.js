// src/app/index.js
import React, { Component } from 'react';
//import Almanaque from '../almanaque';
//import GPS from '../gps';
//import GitHub from '../github';
import CountDown from '../countdown';
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
                <CountDown/>
            </div>
        );
    }
}

export default App;
