import React from 'react';
import { DateInput } from './components/DateInput';
import { Favorites } from './components/Favorites';
import { Launches } from './components/Launches';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: "1979-09-19",
      endDate: "2019-09-19",
      favorites: []
    }
  }
  dateCallBack = (start, end) => {
    if (start < end) {
      this.setState({
        startDate: start,
        endDate: end,
      });
    }
  }
  favoriteCallBack = (number) => {
    for (let i = 0; i < this.state.favorites.length; i++) {
      if (this.state.favorites[i] === number) {
        this.removeFavorite(i);
        return;
      }
    }
    this.addFavorite(number);
  }
  removeFavorite = (index) => {
    const myArr = this.state.favorites;
    myArr.splice(index, 1);
    this.setState({
      favorites: myArr
    });
    console.log(this.state.favorites);
    this.render();
  }
  addFavorite = (number) => {
    this.setState({
      favorites: [...this.state.favorites, number]
    });
  }
  componentDidUpdate() {
  }

  render = () => {
    return (
      <div className="app">
        <header>
          <link href="https://fonts.googleapis.com/css?family=Audiowide|Notable|Roboto|Saira+Stencil+One|Turret+Road&display=swap" rel="stylesheet" />
          <h1 className="headerTitle">Launches</h1>
          <DateInput callBack={this.dateCallBack} />
        </header>
        <main>
          <Favorites favorites={this.state.favorites} favoriteCallBack={this.favoriteCallBack} />
          <h3 className="searchTitle">{"SpaceX launches from " + this.state.startDate + " to " + this.state.endDate}</h3>
          <Launches start={this.state.startDate} end={this.state.endDate} favoriteCallBack={this.favoriteCallBack} favorites={this.state.favorites}/>
        </main>
      </div>
    );
  }
}

export default App;
