import React from 'react';

function Standings(props){

    const data = props.data


    const styleTitle = {
        height: "50px",
        backgroundColor: "#0B56A4",
        color: "white",
    }
    const containerStandingsStyle = {
        display: "grid",
        gridTemplateColumns: "50px 29px 29px 29px 29px 29px 29px 29px",
        gridColumnGap: "5px",
        gridTemplateRows: "50px 50px",
        padding: "0px 5px",
        border: "2px solid #0B56A4",
        fontSize: "15px",
    }
    const standingStyle = {
        fontSize: "20px",
    }

return(<div>
  <div className ="centeredFlex" style={styleTitle} >
    <h3>{data.competition}</h3>
  </div>
  <div style={containerStandingsStyle}>
    <div className ="centeredFlex">
      PLAYED
    </div>
    <div className ="centeredFlex">
      GF
    </div>
    <div className ="centeredFlex">
      GA
    </div>
    <div className ="centeredFlex">
      GD
    </div >
    <div className ="centeredFlex">
      W
    </div>
    <div className ="centeredFlex">
      L
    </div>
    <div className ="centeredFlex">
      D
    </div>
    <div className ="centeredFlex">
      P
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.played}
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.goalsFor}
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.goalsAgainst}
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.goalDifference}
    </div >
    <div style = {standingStyle} className ="centeredFlex">
      {data.won}
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.lost}
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.drawn}
    </div>
    <div style = {standingStyle} className ="centeredFlex">
      {data.points}
    </div>

  </div>
</div>)
}



export default Standings;