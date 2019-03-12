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
    const Relojes = props.timezones.map(
        (tz) => (
            <RelojDigital
                key={tz.name}
                name={tz.name}
                country={tz.coutry}
                timeZone={tz.timeZone}
            />
        )
    );
    return (
        <div className='Almanaque'>
        {Relojes}
        </div>
    );
}

export default Almanaque;

/*
<Almanaque
    timezones={[
        {name: 'Murcia', country:'es-ES', timeZone:'Europe/Madrid'},
        {name: 'Nueva York', country:'en-US', timeZone:'America/New_York'},
        {name: 'Tazmania', country:'au-AU', timeZone:'Australia/Hobart'},
        {name: 'Londres', country:'en-EN', timeZone:'Europe/London'},
        {name: 'Shanghai', country:'as-AS', timeZone:'Asia/Shanghai'},
    ]}/>
*/