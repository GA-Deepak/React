import React from 'react';
import "./Button.css";

const Button =(props)=> {
    
        return(
            <button
                className="Button"
                onClick={props.onClick}
                data-size={props.size}
                data-value={props.value}>
                {props.label}
            </button>
        );
    }


export default Button;