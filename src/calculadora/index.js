import React, {Component} from 'react';
import './styles.css';

const INITAL_STATE = {
    resultado: 0,
    operando1: undefined,
    operando2: undefined,
    operacion: undefined
};
export class Calculadora extends Component {
    constructor(props) {
        super(props);

        this.state = INITAL_STATE;
        this.calculateResult = this.calculateResult.bind(this);
    }

    sendOperator(value) {
        if(!this.state.operacion) {
            if(this.state.operando1 >= 9999) return ;
            const op1 = Number((this.state.operando1 || '') + '' + value);
            this.setState({operando1: op1, resultado: op1});
        }
        else {
            if(this.state.operando2 > 9999) return ;
            const op2 = Number((this.state.operando2 || '') + '' + value);
            this.setState({operando2: op2, resultado: op2});
        }
    }

    sendOperation(op) {
        if(!this.state.operando1) {
            return;
        }
        if(['+', '-', '*', '/'].includes(op)) {
            this.setState({operacion: op});
        }
    }

    calculateResult() {
        if(this.state.operando1 && this.state.operando2) {
            let result = {...INITAL_STATE};
            switch(this.state.operacion){
                case '+':
                    result.resultado = this.state.operando1 + this.state.operando2;
                    break;
                case '-':
                    result.resultado = this.state.operando1 - this.state.operando2;
                    break;
                case '*':
                    result.resultado = this.state.operando1 * this.state.operando2;
                    break;
                case '/':
                    result.resultado = this.state.operando1 / this.state.operando2;
                    break;
                default:
                    result.resultado = 0;
                    break;
            }
            this.setState(result);
        }
    }

    render() {
        console.log('State', this.state);
        return (
            <div className='Calculadora'>
                <div className='Display'>
                    <span>{this.state.resultado}</span>
                </div>
                <div className='Botonera'>
                    <div className='Linea'>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 9)}>9</button>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 8)}>8</button>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 7)}>7</button>
                        <button className='Operacion' onClick={this.sendOperation.bind(this, '+')}>+</button>
                    </div>
                    <div className='Linea'>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 6)}>6</button>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 5)}>5</button>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 4)}>4</button>
                        <button className='Operacion' onClick={this.sendOperation.bind(this, '-')}>-</button>
                    </div>
                    <div className='Linea'>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 3)}>3</button>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 2)}>2</button>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 1)}>1</button>
                        <button className='Operacion' onClick={this.sendOperation.bind(this, '*')}>*</button>
                    </div>
                    <div className='Linea'>
                        <button className='Boton' onClick={this.sendOperator.bind(this, 0)}>0</button>
                        <button className='Boton' onClick={this.calculateResult}>=</button>
                        <button className='Boton' onClick={() => this.setState(INITAL_STATE)}>R</button>
                        <button className='Operacion' onClick={this.sendOperation.bind(this, '/')}>/</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Calculadora;