import React,{useEffect} from 'react';
import Score from '../Score/Score';
import {urlLogoTournament,classLogo} from '../../services/logoTournament';
import './Match.css';

function Match(props){

  
  return(<div>
    {props.data.map((match) => {

    const classLogoLeague = classLogo(match.gameweek.compSeason.competition.abbreviation);

    const urlLogo = urlLogoTournament(match.gameweek.compSeason.competition.abbreviation);

    return (<div className = "containerMatch" key= {match.id}>
      <div className = "cardHearder">
        <img src = {urlLogo} className = {`imgPosition ${classLogoLeague}`} alt="league logo images "/>
        <h3 id ="cardMatchTitle" > 
          {match.gameweek.compSeason.competition.description}
        </h3>
      </div>
      <div className = "cardMatchBody">
        <div className = "matchClubName">
          {match.teams[0].team.club.name}
        </div>
        <div className = "centeredFlex">
          {<Score localTeam = {match.teams[0].score} visitorTeam = {match.teams[1].score} />}
        </div>
        <div className = "matchClubName">
          {match.teams[1].team.club.name}
        </div>
      </div>
      <div className = "cardMatchFooter centeredFlex">
      <p> <strong>{match.kickoff.label.slice(0,10)} </strong> : {match.ground.name}</p>
      </div>
    
    </div>)
  })}
</div>)

}

export default Match;