// src/app/index.js
import React, { Component } from 'react';
import Padre from '../padre';
import './styles.css';

// Componente tipo función
function Welcome(props){
    // props contiene {name: 'Juanjo'}
    return (
        <div>Welcome {props.name} to ReactJS!</div>
    );
}

class Fecha extends Component {
    render() {
        return (
            <div className='Fecha'>{this.props.fecha}</div>
        );
    }
}
class Hora extends Component {
    render() {
        return (
            <div className='Hora'>{this.props.hora}</div>
        );
    }
}

function RelojDigital(props) {
    return (
        <div className='RelojDigital'>
            <div className='Timezone'>{props.name}</div>
            <Fecha fecha={props.fecha}/>
            <Hora hora={props.hora}/>
        </div>
    );
}

function Almanaque(props) {
    const fechaCompleta = new Date();
    const fecha = fechaCompleta.toLocaleDateString();
    const hora = fechaCompleta.toLocaleTimeString();

    const fechaNY = fechaCompleta.toLocaleDateString("en-US", {timeZone: "America/New_York"});
    const horaNY = fechaCompleta.toLocaleTimeString("en-US", {timeZone: "America/New_York"});

    return (
        <div className='Almanaque'>
            <RelojDigital
                name='Murcia'
                fecha={fecha}
                hora={hora}/>
            <RelojDigital
                name='New York'
                fecha={fechaNY}
                hora={horaNY}/>
        </div>
    );
}

// class Welcome extends Component {
//     // this.props contiene {name: 'Juanjo'}
//     render() {
//         return <div>Welcome {this.props.name} to ReactJS!</div>;
//     }
// }

// Componente tipo Clase
class App extends Component {
    hablaAlAbuelo(msgFromChildren) {
        console.log('Mensaje del hijo', msgFromChildren);
    }
    render() {
        return (
            <div className='App'>
                <Welcome
                    name='Juanjo'/>
                <Padre hablaAlAbuelo={this.hablaAlAbuelo}>
                    <div>Soy el Hijo</div>
                </Padre>
            </div>
        );
    }
}

export default App;
