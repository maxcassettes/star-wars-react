import React, { Component } from 'react';
import './App.css';
import List from './List';
import logo from './logo.png';

class App extends Component {
 
 constructor(props){
  super(props);
  this.state = {
    choice: "",
    films : [],
    people : [],
    ships: [],
    vehicles: [],
    planets: [],
    data: [],
  }
 }

getPeople = () => {
    let url = `https://swapi.co/api/people/0`;
    //this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          films: res.results,      
        });
        //console.log(this.state.films);     
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };


getFilms = () => {  
    let url = `https://swapi.co/api/films`;
    //this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          films: res.results,      
        });
        //console.log(this.state.films);     
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };


 componentDidMount(){
 
 }

render() {
  const films = this.state.films;
 
//let pic = "./src/logo.png";
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="SW-logo App-logo-spin" alt="logo" />
       
        </header>
        <nav>
        <button className='navBtn' onClick={this.getFilms} >Films</button>
        <button className='navBtn' onClick={this.getPeople} >People</button>
        <button className='navBtn' onClick={this.getPlanets} >Planets</button>
        <button className='navBtn' onClick={this.getPeople} >Ships</button>
        <button className='navBtn' onClick={this.getPeople} >Vehicles</button>
        <button className='navBtn' onClick={this.getPeople} >Species</button>
        </nav>
        <List className='filmList' films={films} />     
    </div>
    );
  }
}

export default App;
