import React,{useEffect,useState} from 'react';
import SectionBox from '../SectionBox/SectionBox';
import SectionTitle from '../SectionTitle/SectionTitle';
import Match from '../Match/Match';
import Form from '../Form/Form';
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
    gridTemplateRows: "60px 300px 60px 410px 60px 400px",
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
    startDate: '',
    endDate: '',
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
      setData({
        ...data,
        matchIdDate: matchIdDate,
      });
    }else {
      alert("No se ha conseguido el juego")
    }

  }
  async function handlerOnClickDateRange(e){
    e.preventDefault();

    const matchesForRange = await handlerOnClickDateRangeFetch(search.startDate,search.endDate);

    if (matchesForRange.length > 0) {
      setData({
        ...data,
        matchesForRange: matchesForRange,
      });
    }else {
      alert("No se ha conseguido el juego")
    }
  }

  async function handlerOnClickStandingsRange(e){
    e.preventDefault();

    const standingsForRange = await handlerOnClickSearchStandingsFetch(search.startDate,search.endDate);

    if (standingsForRange.length > 0) {
      setData({
        ...data,
        standingsForRange: standingsForRange,
      });
    }else {
      alert("No se ha conseguido el juego")
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
        firstLabel = "START DATE" typeFirstInput = "date" nameFirstInput = "startDate"
        secondLabel = "END DATE" typeSecondInput="date"  nameSecondInput = "endDate"/>

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
    <SectionBox styleBox = {{height: "400px"}} >
      <div className = "centeredFlex">
        <Form onChange = {handlerOnChange} onClick = {handlerOnClickStandingsRange}
            firstLabel = "START DATE" typeFirstInput = "date" nameFirstInput = "startDate"
            secondLabel = "END DATE" typeSecondInput="date"  nameSecondInput = "endDate"/>
      </div>

    </SectionBox>
  </div>

</div>
)
}

export default Main;