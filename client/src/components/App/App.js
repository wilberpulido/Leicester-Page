import './App.css';
import Form from '../Form/Form';
import Navegator from '../Navegator/Navegator';
import Main from '../Main/Main';
import React,{useEffect,useState} from 'react';

function App() {

  const [search,setSearch] = useState({
    id:'',
    date: '',
    startDate: '',
    endDate: '',
  });

  function handlerOnChange(e){
    const key = e.target.name;
    const value = e.target.value;
    return setSearch({...search,[key]:value})
  }

  return (
    <div className="desktop">
      <div className="container">

      <Navegator/>


      <Main/>

        {/* <Form>
          <div>
            <label> Ingresa la fecha </label>
            <input name="date" type="date" onChange={handlerOnChange} />
          </div>
          <div>
            <h2>
              Ó
            </h2>
          </div>
          <div>
            <label> Ingrese ID </label>
            <input name="id" type="number" onChange={handlerOnChange} />
          </div>

          <button onClick={handlerOnClickIdDate}> Enviar </button>

        </Form>
        <div style={{margin: "100px 0px"}}>
          <p>while</p>
        </div>
        <Form>
          <div>
            <label> Primera fecha </label>
            <input name="startDate" type="date" onChange={handlerOnChange} />
          </div>
          <div>
            <h2>
              Ó
            </h2>
          </div>
          <div>
            <label> Segunda fecha </label>
            <input name="endDate" type="date" onChange={handlerOnChange} />
          </div>

          <button onClick={handlerOnClickDateRange}> Enviar </button>

        </Form>
        <div style={{margin: "100px 0px"}}>
          <p>while</p>
        </div>

        <Form>
          <div>
            <label> Primera fecha para puntos </label>
            <input name="startDate" type="date" onChange={handlerOnChange} />
          </div>
          <div>
            <h2>
              Ó
            </h2>
          </div>
          <div>
            <label> Segunda fecha para puntos </label>
            <input name="endDate" type="date" onChange={handlerOnChange} />
          </div>

          <button onClick={handlerOnClickSearchStandings}> Enviar </button>

        </Form>
        <div style={{margin: "100px 0px"}}>
          <p>while</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
