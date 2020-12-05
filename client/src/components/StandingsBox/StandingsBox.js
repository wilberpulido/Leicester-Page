import React from 'react';
import Standings from '../Standings/Standings';

const styleBox = {
  width: "300px",
  height: "150px",
  margin: "0px 20px",
}


function StandingsBox(props){
return(props.data.map(standingsLeague=>{

  console.log(standingsLeague);

  return <div key={standingsLeague.competition} style={styleBox}>

    <Standings data = {standingsLeague}  />

  </div>
}))
}


export default StandingsBox;