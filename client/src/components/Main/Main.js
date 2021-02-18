import React,{useEffect,useState} from 'react';
import SectionBox from '../SectionBox/SectionBox';
import SectionTitle from '../SectionTitle/SectionTitle';
import Match from '../Match/Match';
import Form from '../Form/Form';
import StandingsBox from '../StandingsBox/StandingsBox';
import {handlerOnClickIdDateFetch,handlerOnClickDateRangeFetch,handlerOnClickSearchStandingsFetch,searchLastGame,searchLastFiftyGame} from "../../services/requestsServices";
import './Main.css';

function Main(){

  const styleMain = {
    marginTop: "100px",
    width: "1200px",
    border: "2px solid black",
    display: "grid",
    padding: "30px 75px",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "80px",
    gridTemplateRows: "60px 300px 60px 410px 60px 500px",
    gridRowGap: "30px",
  }
  
  const styleScrollMatch = {
    overflowY: "auto",
    scrollSnapType:"y mandatory",
    height: "300px",
  }

  const [data,setData] = useState({
    lastGame: [],
    lastFiftyGame: [],
    matchIdDate: [],
    matchesForRange: [],
    standingsForRange: [],
  });

  const [search,setSearch] = useState({
    id:'',
    date: '',
    startDateMatches: '',
    endDateMatches: '',
    startDateStandings: '',
    endDateStandings: '',
  });

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
  
  function handlerOnChange(e){
    const key = e.target.name;
    const value = e.target.value;
    return setSearch({...search,[key]:value})
    
  }
  
  async function handlerOnClickIdDate(e){
    e.preventDefault();

    const matchIdDate = await handlerOnClickIdDateFetch(search.date,search.id);

    if (matchIdDate.length > 0) {
     return  setData({
        ...data,
        matchIdDate: matchIdDate,
      });
    }else {
      setData({
        ...data,
        matchIdDate: [],
      });
      alert("No se ha conseguido el juego")
    }

  }
  async function handlerOnClickDateRange(e){
    e.preventDefault();

    if (new Date(search.startDateMatches) > new Date(search.endDateMatches)) {
      alert("The start date is after the end date");

      return setData({
          ...data,
          matchesForRange: [],
        })
    }

    const matchesForRange = await handlerOnClickDateRangeFetch(search.startDateMatches,search.endDateMatches);

    if (matchesForRange.length > 0) {
      setData({
        ...data,
        matchesForRange: matchesForRange,
      });
    }else {
      setData({
        ...data,
        matchesForRange: [],
      });
      alert("No se ha conseguido el juego")
    }
  }

  async function handlerOnClickStandingsRange(e){
    e.preventDefault();

    if (new Date(search.startDateStandings) > new Date(search.endDateStandings)) {
      alert("The start date is after the end date");
      return setData({
          ...data,
          standingsForRange: [],
        })
    }

    const standingsForRange = await handlerOnClickSearchStandingsFetch(search.startDateStandings,search.endDateStandings);

    if (typeof standingsForRange === "undefined") {
      return setData({
        ...data,
        standingsForRange: [],
      });
    }

    if (standingsForRange.length > 0) {
      return setData({
        ...data,
        standingsForRange: standingsForRange,
      });
    }else {
      setData({
        ...data,
        standingsForRange: [],
      });
      
      return alert("No se ha conseguido el juego");
    }
  }

  return(<div style = {styleMain}>

  <SectionTitle>
    LAST GAME
  </SectionTitle>

  <SectionTitle>
    LAST FIFTY GAME
  </SectionTitle>

  <SectionBox>
    {/* data is an array the return of a request for backend */}
    <Match data = {data.lastGame}/>

  </SectionBox>

  <SectionBox>
    {/* data is an array the return of a request for backend */}
    <Match data = {data.lastFiftyGame}/>
    
  </SectionBox>

  <SectionTitle>
    SEARCH MATCH FOR ID AND DATE
  </SectionTitle>

  <SectionTitle>
    SEARCH MATCH FOR RANGE DATE
  </SectionTitle>

  <SectionBox>
    <Form onChange = {handlerOnChange} onClick = {handlerOnClickIdDate}
      firstLabel = "ENTER ID" typeFirstInput = "number" nameFirstInput = "id"
      secondLabel = "ENTER DATE" typeSecondInput="date" nameSecondInput = "date"/>
    <Match data = {data.matchIdDate}/>

  </SectionBox>

  <SectionBox>
    <Form onChange = {handlerOnChange} onClick = {handlerOnClickDateRange}
        firstLabel = "START DATE" typeFirstInput = "date" nameFirstInput = "startDateMatches"
        secondLabel = "END DATE" typeSecondInput="date"  nameSecondInput = "endDateMatches"/>

    <div className= "scrollBox" style = {styleScrollMatch}>
        <Match data = {data.matchesForRange}/>
    </div>
  </SectionBox>

  <div style = {{gridColumnStart: 1, gridColumnEnd:3,}}>
    <SectionTitle>
      STANDINGS RANGE DATES
    </SectionTitle>
  </div>

  <div style = {{gridColumnStart: 1, gridColumnEnd:3,}}>
    <SectionBox style = {{height: "500px"}} >
      <div className = "centeredFlex">
        <Form onChange = {handlerOnChange} onClick = {handlerOnClickStandingsRange}
            firstLabel = "START DATE" typeFirstInput = "date" nameFirstInput = "startDateStandings"
            secondLabel = "END DATE" typeSecondInput="date"  nameSecondInput = "endDateStandings"/>
      </div>

      <div style={{height: "390px" , flexWrap: "wrap"}} className = "centeredFlex">
        <StandingsBox  data = {data.standingsForRange}/>
      </div>

    </SectionBox>
  </div>

</div>
)
}

export default Main;