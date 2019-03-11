import React, { Component } from 'react';
import './styles.css';

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

function calculateDate(country, timeZone) {
    const fechaCompleta = new Date();
    const fecha = fechaCompleta.toLocaleDateString(country, {timeZone: timeZone});
    const hora = fechaCompleta.toLocaleTimeString(country, {timeZone: timeZone});
    return {fecha, hora};
}

class RelojDigital extends Component {
    constructor(props) {
        super(props);
        // Establecemos el state del componente
        this.state = calculateDate(this.props.country, this.props.timeZone);
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.setState(calculateDate(this.props.country, this.props.timeZone))
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    
    render() {
        return (
            <div className='RelojDigital'>
                <div className='Timezone'>{this.props.name}</div>
                <Fecha fecha={this.state.fecha}/>
                <Hora hora={this.state.hora}/>
            </div>
        );
    }
}

function Almanaque(props) {
    return (
        <div className='Almanaque'>
            <RelojDigital
                name='Murcia'
                country='es-ES'
                timeZone='Europe/Madrid'/>
            <RelojDigital
                name='New York'
                country='en-US'
                timeZone='America/New_York'/>
            <RelojDigital
                name='Tazmania'
                country='au-AU'
                timeZone='Australia/Hobart'/>
        </div>
    );
}

export default Almanaque;