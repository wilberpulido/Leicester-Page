import React from 'react';

function Score(props){

    const style = {
        height: "50px",
        width: "80px",
        backgroundColor: "coral",
        background: "linear-gradient(#152638, #0B56A4 50%, #0A2F57 50%)",
        display: "flex",
    }
    const styleScoreBox = {
      height: "50px",
      width: "40px",
      border: "1px solid black",
      fontSize: "34px",
      color: "white",
    }

  return(<div style = {style}>
    <div style = {styleScoreBox} className = "centeredFlex">
      {props.localTeam}
    </div>
    <div style = {styleScoreBox} className = "centeredFlex">
      {props.visitorTeam}
    </div>
  </div>
  )


}

export default Score;