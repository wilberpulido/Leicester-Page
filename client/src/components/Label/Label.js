import React from 'react';

function Label(props){

    const styleLabel = {
        fontSize: "1.2rem",
        fontWeight: "bold",
    }

  return(<label style = {styleLabel}>
      {props.children}
  </label>
)

}

export default Label;