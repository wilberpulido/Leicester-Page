import './App.css';
import Navegator from '../Navegator/Navegator';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import React from 'react';

function App() {

  return (
    <div className="desktop">
      <div className="container">

      <Navegator/>

      <Main/>

      <Footer/>

      </div>
    </div>
  );
}

export default App;
