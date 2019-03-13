import React from 'react';
import './styles.css';

export const Padre = (props) => {
    props.hablaAlAbuelo('Hola Abuelo');
    return (
        <div className='Padre'>
            <div>Yo soy tu PADRE</div>
            <div className='Hijo'>{props.children}</div>
        </div>
    );
};

export default Padre;
