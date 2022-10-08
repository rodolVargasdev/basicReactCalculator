import React from "react";
import '../stylesheets/Buttons.css'


const Buttons = (props) => {

    const operatorTrue = (valor) => 
    {
        return isNaN(valor) && valor !== '.' && valor !== '=';
    };

    return(
        <div 
            className = {`Buttons ${operatorTrue(props.children) ? 'operator' : ''}`.trimEnd()} 
            onClick={() => props.holdClick(props.children)}>
            {props.children}
        </div>
    );
};

export default Buttons; 