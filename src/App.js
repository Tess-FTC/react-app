import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Cards from './components/cards';


class App extends Component {
  state = { 
    title:""
   }
  render() { 
    return ( 
      <React.Fragment>
      <NavBar title={"Header"}/>
      <main className="container">
        <Cards />
      </main>
      <NavBar title={"Footer"}/>
    </React.Fragment>
     );
  }
}
 
export default App;
