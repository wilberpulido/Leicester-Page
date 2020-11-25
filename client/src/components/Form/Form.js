import React from "react";

function Form(props){

    return(
    <React.Fragment>
        <form action={props.action} onSubmit={props.onSubmit} id={props.id}>
            {props.children}
        </form>
    </React.Fragment>
    )
}


export default Form;