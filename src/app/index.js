// src/app/index.js
import React, { Component } from 'react';
import Almanaque from '../almanaque';
//import GPS from '../gps';
//import GitHub from '../github';
//import CountDown from '../countdown';
//import Calculadora from '../calculadora';
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
                <Almanaque
                    timezones={[
                        {name: 'Murcia', country:'es-ES', timeZone:'Europe/Madrid'},
                        {name: 'Nueva York', country:'en-US', timeZone:'America/New_York'},
                        {name: 'Tazmania', country:'au-AU', timeZone:'Australia/Hobart'},
                        {name: 'Londres', country:'en-EN', timeZone:'Europe/London'},
                        {name: 'Shanghai', country:'as-AS', timeZone:'Asia/Shanghai'},
                    ]}/>
            </div>
        );
    }
}

export default App;
