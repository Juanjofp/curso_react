import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            guestName: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleReservation = this.handleReservation.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    handleReservation() {
        window.alert(`Reserva ${this.state.isGoing ? 'Aceptada' : 'Denegada'} a nombre de ${this.state.guestName} para ${this.state.numberOfGuests} invitados`);
    }

    render() {
        return (
            <form onSubmit={this.handleReservation}>
                <label>
                Aceptada:
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Titular de la reserva:
                <input
                    name="guestName"
                    type="text"
                    value={this.state.guestName}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Numero de invitados:
                <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange} />
                </label>
                <button type='submit'>Enviar</button>
            </form>
        );
    }
}

export default Reservation;