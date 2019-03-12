import React, {Component} from 'react';

export class CountDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clock: 0
        };
        this.handleStart = this.handleStart.bind(this);
    }

    handleStart() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(
            () => {
                this.setState((state) => ({clock: state.clock + 500}));
            },
            500
        );
    }

    handlePause = () => {
        clearInterval(this.intervalId);
    };

    componentWillUnmount() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    
    render() {
        return (
            <div>
                <span>{this.state.clock}</span>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handlePause}>Pause</button>
                <button
                    onClick={
                        () => {
                            if(this.intervalId) {
                                clearInterval(this.intervalId);
                            }
                            this.setState({clock: 0});
                        }
                    }>
                    Reset
                </button>
            </div>
        );
    }
};

export default CountDown;