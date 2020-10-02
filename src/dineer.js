import React from 'react';
import './App.css';

function Dinner (props) {
    return(
        <div>
        <h1>today seving {props.dishname}</h1>
        <h1>today seving {props.sweetdish}</h1>
        
        </div>
    )
}
export default Dinner;