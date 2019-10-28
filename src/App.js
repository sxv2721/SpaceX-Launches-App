import React from "react";
import Moment from "moment";
import { Switch, Route } from "react-router-dom";
import RoutedMission from "./components/RoutedMission/container";
import DateInput from "./components/DateInput/container";
import Favorites from "./components/Favorites/container";
import Launches from "./components/Launches/container";
import "./App.scss";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: "2002-05-06",
            endDate: Moment().format("YYYY-MM-DD"),
            favorites: [],
        };
    }
    componentDidMount() {}

    LaunchCardList = () => {
        return (
            <>
                <header>
                    <h1 className="headerTitle">Launches</h1>
                    <DateInput />
                </header>
                <main>
                    <Favorites />
                    <h3 className="searchTitle">Results:</h3>
                    <Launches />
                </main>
            </>
        );
    };

    render() {
        return (
            <div className="app">
                <link
                    href="https://fonts.googleapis.com/css?family=Audiowide|Notable|Roboto|Saira+Stencil+One|Turret+Road&display=swap"
                    rel="stylesheet"
                />
                <Switch>
                    <Route
                        path="/missions/:missionId"
                        component={RoutedMission}
                    />
                    <Route path="/">{this.LaunchCardList}</Route>
                </Switch>
            </div>
        );
    }
}

export default App;

/* Idea for routing
Switch

route exact path = '/' most specific path 1st
  render normal app
route path = '/mission/'
  fetch and render launch card who's mission name comes after the slash
route path = '/' catch all that returns "can't find that mission" message
*/
