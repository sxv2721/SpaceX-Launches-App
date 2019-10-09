import React from 'react';
//import { DateInput } from './components/DateInput';
import DateInput from './components/DateInput/container';
import Favorites from './components/Favorites/container';
import Launches from './components/Launches/container';
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "1979-09-19",
      endDate: "2019-09-19",
      favorites: []
    }
  }
  componentDidMount() {
  }

  render = () => {
    return (
      <div className="app">
        <header>
          <link href="https://fonts.googleapis.com/css?family=Audiowide|Notable|Roboto|Saira+Stencil+One|Turret+Road&display=swap" rel="stylesheet" />
          <h1 className="headerTitle">Launches</h1>
          <DateInput />
        </header>
        <main>
          <Favorites />
          <h3 className="searchTitle">
            {"SpaceX launches from " +
              this.state.startDate + " to " +
              this.state.endDate}
          </h3>
          <Launches />
        </main>
      </div>
    );
  }
}

export default App;
