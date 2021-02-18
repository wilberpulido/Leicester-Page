import React from 'react';
import './Input.css';

function Input(props){

  return(<input 
    className = "inputStyle" 
    type = {props.type} 
    onChange = {props.onChange} 
    name = {props.name} 
  />)
}

export default Input;