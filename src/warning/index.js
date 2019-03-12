import React from 'react';
import './styles.css';

export const Warning = (props) => {
    if(!props.error) {
        return null;
    }
    return (
        <div className='ErrorMessage'>{props.message || 'Ups!! ha ocurrido un error!'}</div>
    );
};

export default Warning;