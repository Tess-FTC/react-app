import React from 'react';
import './App.css';
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Cards from './components/cards';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters/> 
        <Cards />
      </main>
    </React.Fragment>
  );
}

export default App;
