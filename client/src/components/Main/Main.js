import React,{useEffect,useState} from 'react';
import SectionBox from '../SectionBox/SectionBox';
import SectionTitle from '../SectionTitle/SectionTitle';
import Match from '../Match/Match';
import {handlerOnClickIdDateFetch,handlerOnClickDateRangeFetch,handlerOnClickSearchStandingsFetch,searchLastGame,searchLastFiftyGame} from "../../services/requestsServices";


function Main(props){

  const styleMain = {
    marginTop: "100px",
    width: "1200px",
    border: "2px solid black",
    display: "grid",
    padding: "30px 75px",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "80px",
    gridTemplateRows: "60px 300px 60px 500px 60px 300px",
    gridRowGap: "30px",
  }
  
  const styleFirstSection = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    overflowY: "auto",
    scrollSnapType:"y mandatory",
  }

  const [data,setData] = useState({
    lastGame: [],
    lastFiftyGame: [],
  })

  useEffect(()=>{

    async function fetchMydb(){

      const lastGame = await searchLastGame();
      const lastFiftyGame = await searchLastFiftyGame();
      
      setData({
        ...data,
        lastGame: lastGame,
        lastFiftyGame: lastFiftyGame,
      });
    }
    fetchMydb();
      
  },[])

return(<div style = {styleMain}>

  <SectionTitle>
    LAST GAME
  </SectionTitle>

  <SectionTitle>
    LAST FIFTY GAME
  </SectionTitle>

  <SectionBox styleSectionBox = {styleFirstSection}>
    {/* data is an array the return of a request for backend */}
    <Match data = {data.lastGame}/>

  </SectionBox>

  <SectionBox styleSectionBox = {styleFirstSection}>
    {/* data is an array the return of a request for backend */}
    <Match data = {data.lastFiftyGame}/>
    
  </SectionBox>

  <SectionTitle>
    SEARCH MATCH FOR ID AND DATE
  </SectionTitle>

  <SectionTitle>
    SEARCH MATCH FOR RANGE DATE
  </SectionTitle>

    <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>
  <SectionBox styleSectionBox = {styleFirstSection}>
    HOLAAAAAAAAAAAAA
  </SectionBox>

</div>
)
}

export default Main;