import React, {Component} from 'react';

export class GPS extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            valid: false,
            latitude: 0,
            longitude: 0
        };
    }

    componentDidMount() {
        // Comenzaoms a escuchar al GPS
        if(window.navigator && window.navigator.geolocation) {
            this.gpsId = window.navigator.geolocation.watchPosition(
                (position) => {
                    console.log('Posicion GPS', position);
                    this.setState({
                        latitude: position.coords.latitude.toFixed(6),
                        longitude: position.coords.longitude.toFixed(6)
                    });
                }
            );
        }
        else {
            this.setState({
                error: 'GPN NO DISPONIBLE!'
            });
        }
    }

    componentWillUnmount = () => {
        // Liberamos el recurso de GPS
        if(this.gpsId) {
            window.navigator.geolocation.clearWatch(this.gpsId);
        }
    }
    
    render() {
        if(!!this.state.error) {
            return <div>{this.state.error}</div>
        }
        
        return (
            <div className='GPS'>
                <div>Latitude: {this.state.latitude}</div>
                <div>Longitude: {this.state.longitude}</div>
                <div>{this.state.error}</div>
                <div>Maps: <a href={`https://www.google.com/maps/?q=${this.state.latitude},${this.state.longitude}`}>Open maps</a></div>
            </div>
        );
    }
}

export default GPS;