import React, {Component} from 'react';

export class Loading extends Component {
    constructor(props) {
        super(props);
        console.log('Soy el Constructor');
    }

    componentDidMount() {
        console.log('componentDidMount', 'Me ejecuto al montar el componente');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', 'Me ejecuto al repintarme');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount', 'Me ejecuto al eleminarme del DOM');
    }
    
    render() {
        return (
            <div>Cargando</div>
        );
    }
}

export default Loading;