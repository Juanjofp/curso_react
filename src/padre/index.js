import React from 'react';

export const Padre = (props) => {
    props.hablaAlAbuelo('Hola Abuelo');
    return (
        <div>
            <div>Yo soy tu PADRE</div>
            {props.children}
        </div>
    );
};

export default Padre;
