import React from 'react';
import Launch from '../Launch/container';
import "./styles.scss";

export class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: []
        }
    }
    componentDidMount = () => {

    }
    // UNSAFE_componentWillReceiveProps = ({ favorites }) => {
    //     Axios.get('https://api.spacexdata.com/v3/launches/past')
    //         .then((response) => {
    //             const favs = favorites.map((fav) => {
    //                 return response.data[fav - 1]
    //             });
    //             this.setState({
    //                 launches: favs.map((launch, index) => {
    //                     return <Launch
    //                         key={"Launch" + index}
    //                         links={launch.links}
    //                         title={launch.mission_name}
    //                         date={launch.launch_date_utc}
    //                         desc={launch.details}
    //                         payloads={launch.rocket.second_stage.payloads}
    //                         number={launch.flight_number}
    //                         favoriteCallBack={this.props.favoriteCallBack}
    //                         heart={true}
    //                     />;
    //                 })
    //             });
    //         }).catch((response) => {
    //             console.log("error " + response);
    //         });
    // }


    componentWillUnmount = () => {
        console.log("unmounted");
    }

    render = () => {
        console.log(this.props.favorites);
        return (
            <>
                {this.props.favorites !== [] &&
                    <>
                        <h3 className="favTitle">Favorites:</h3>
                        <div className="favorites">
                            {this.props.favorites.map((launch, index) => {
                                return (<Launch
                                    key={"Launch" + index}
                                    index={index}
                                    data={launch}
                                    heart={this.props.favorites.includes(launch)}
                                />)
                            })}
                        </div>
                    </>
                }
            </>
        );
    }
}