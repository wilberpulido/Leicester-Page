  async function searchLastGame(){
    const respuesta = await fetch(`http://localhost:5000/lastGame`)
      .then(res=>res.json())
      .catch(err=> err)

    return respuesta.res;

  }
  async function searchLastFiftyGame(){
    const respuesta = await fetch(`http://localhost:5000/lastFiftyGame`)
      .then(res=>res.json())
      .catch(err=> err)
      
    return respuesta.res;

  }

  async function handlerOnClickIdDateFetch(date,id){

    const respuesta = await fetch(`http://localhost:5000/searchMatchForIdDate/?date=${date}&id=${id}`)
        .then(res=>res.json())
        .catch(err=> err)

    return respuesta;
    
  }

  async function handlerOnClickDateRangeFetch(startDate,endDate){

    const respuesta = await fetch(`http://localhost:5000/searchMatchRangeDates/?startDate=${startDate}&endDate=${endDate}`)
        .then(res=> res.json())
        .catch(err=> err)

    return respuesta;
  }

  async function handlerOnClickSearchStandingsFetch(startDate,endDate){

    const respuesta = await fetch(`http://localhost:5000/searchStandingsRangeDates/?startDate=${startDate}&endDate=${endDate}`)
        .then(res=> res.json())
        .catch(err=> err);


    return respuesta;
  }

export {handlerOnClickIdDateFetch,handlerOnClickDateRangeFetch,handlerOnClickSearchStandingsFetch,searchLastGame,searchLastFiftyGame};