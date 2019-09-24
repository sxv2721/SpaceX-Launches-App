import React from 'react';
import Axios from 'axios';
import { Launch } from '../Launch';
import "./styles.scss";

export class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: props.favorites,
            launches: []
        }
    }
    componentDidMount = () => {

    }
    UNSAFE_componentWillReceiveProps = ({ favorites }) => {
        console.log(favorites);
        Axios.get('https://api.spacexdata.com/v3/launches/past')
            .then((response) => {
                const favs = favorites.map((fav) => {
                    return response.data[fav - 1]
                });
                this.setState({
                    launches: favs.map((launch, index) => {
                        return <Launch
                            key={"Launch" + index}
                            links={launch.links}
                            title={launch.mission_name}
                            date={launch.launch_date_utc}
                            desc={launch.details}
                            payloads={launch.rocket.second_stage.payloads}
                            number={launch.flight_number}
                            favoriteCallBack={this.props.favoriteCallBack}
                            heart={true}
                        />;

                    })
                });
            }).catch((response) => {
                console.log("error " + response);
            });
    }


    componentWillUnmount = () => {
        console.log("unmounted");
    }

    render = () => {
        return (
            <>
                {this.state.launches.length > 0 &&
                    <>
                        <h3 className="favTitle">Favorites:</h3>
                        <div className="favorites">
                            {this.state.launches}
                        </div>
                    </>
                }
            </>
        );
    }
}