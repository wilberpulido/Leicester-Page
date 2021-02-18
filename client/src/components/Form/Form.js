import React from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from '../Input/Input';

function Form(props){
  const formStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "30px 30px 30px",
    gridRowGap: "10px",
    width: "480px",
  }

  const buttonBoxStyle = {
    gridColumnStart: 1,
    gridColumnEnd:3,
  }

    return(         
      <form style = {formStyle}>
        <div className = "centeredFlex">
          <Label > {props.firstLabel} </Label>
        </div>
        <div className = "centeredFlex">
          <Label > {props.secondLabel} </Label>
        </div>
        <div className = "centeredFlex">
          <Input type = {props.typeFirstInput} onChange={props.onChange} name={props.nameFirstInput}/>
        </div>
        <div className = "centeredFlex">
          <Input type = {props.typeSecondInput} onChange={props.onChange} name={props.nameSecondInput}/>
        </div>
        
        <div className = "centeredFlex" style = {buttonBoxStyle}>
          <Button onClick={props.onClick}>
            SEARCH 
          </Button>
        </div>

      </form>
    )
}


export default Form;