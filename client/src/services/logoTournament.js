function urlLogoTournament(abbreviation){

    if (abbreviation === "EN_PR") {
      return "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/23.png";
        
    }
    if (abbreviation === "EU_UC") {
        return "https://upload.wikimedia.org/wikipedia/an/9/9f/Liga_Europea_de_la_UEFA_Logo.png";

    }
    if (abbreviation === "EN_LC") {
        return "https://www.fifa6886.com/wp-content/uploads/2018/09/fB4STJ.png"

    }
    if (abbreviation === "IG_OF") {
        return "https://cdn.mybookie.ag/wp-content/uploads/club-friendlies-betting-odds.png";

    }
    if (abbreviation === "EN_FA") {
        return "https://3.bp.blogspot.com/-HPjAPqdBWLs/WPEE1s9pB8I/AAAAAAAAAwE/ESOopyeTz048mqkG0ZpqXpXQflaigDXJwCLcB/s1600/The%2BFA%2BCup%2BLogo.png";
    }
}

function classLogo(abbreviation){
    if (abbreviation === "EN_PR") {
        return "logoPremierLeague";

    }
      if (abbreviation === "EU_UC") {
        return "logoEuropeLeague";
  
    }
    if (abbreviation === "EN_LC") {
        return "logoEFL";
  
    }
    if (abbreviation === "IG_OF") {
        return "logoFriendly";
  
    }
    if (abbreviation === "EN_FA") {
        return "logoFaCup";
    }
}

export {urlLogoTournament,classLogo};