import React from "react";

function Form(props){
    const formStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "30px 30px 30px",
      gridRowGap: "5px",
      
    }

    return(         
      <form style = {formStyle}>

        <label className = "centeredFlex" > {props.firstLabel} </label>
        <label className = "centeredFlex" > {props.secondLabel} </label>

        <input type = {props.typeFirstInput} onChange={props.onChange} name={props.nameFirstInput}/>
        <input type = {props.typeSecondInput} onChange={props.onChange} name={props.nameSecondInput}/>

        <button style = {{gridColumnStart: 1,gridColumnEnd:3}} onClick={props.onClick}>
            SEARCH 
        </button>

      </form>
    )
}


export default Form;