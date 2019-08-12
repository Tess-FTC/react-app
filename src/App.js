import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Cards from './components/cards';
import Sorting from './components/sorting';
import Loading from './components/loading';

// library
import axios from 'axios';

class App extends Component {
  state = { 
    title:"", 
    backgroundColor:"",
    cards: [],
    isLoading: true
   }
  componentDidMount() {
    this.getTrip();
	}
	
	// Get Trip from API
	getTrip = async () => { 
		try {
			const response =  await axios.get('https://canadavacations.com/wp-json/wp/v2/find-trips/');
			console.log(response.data);
			const cards = response.data;
			this.setState({ 
        cards,
        isLoading: false
      })
		} catch(error) {
			console.error(error);
		}
  }

  handleSelect = (e) => {
    const oldcards = this.state.cards;
    console.log(e.target.value);
    if(e.target.value === "high-low") {
      let newcards = oldcards.sort((a, b) => (a.price_cad_low < b.price_cad_low) ? 1 : -1);
      this.setState({
        cards: newcards
      });
    } else if (e.target.value === "low-high") {
      let newcards = oldcards.sort((a, b) => (a.price_cad_low > b.price_cad_low) ? 1 : -1);
      this.setState({
        cards: newcards
      });
    } else if (e.target.value === "a-z") {
      let newcards = oldcards.sort((a, b) => (a.name > b.name) ? 1 : -1);
      this.setState({
        cards: newcards
      });
    } else if (e.target.value === "z-a") {
      let newcards = oldcards.sort((a, b) => (a.name < b.name) ? 1 : -1);
      this.setState({
        cards: newcards
      });
    }
  }

  render() { 
    console.log(this.state.cards);

    return ( 
      <React.Fragment>
      <NavBar 
        title={"Header"}
        backgroundColor={"#e42f3a"}/>
      <main className="container">
        <Sorting
          handleSelect={this.handleSelect} 
          />
        {this.state.isLoading ? <Loading /> : <Cards cards={this.state.cards}/>}
      </main>
      <NavBar 
        title={"Footer"}
        backgroundColor={"#2f2632"}/>
    </React.Fragment>
     );
  }
}
 
export default App;
