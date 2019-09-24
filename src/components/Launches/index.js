import React from 'react';
import Axios from 'axios';
import { Launch } from '../Launch';
import "./styles.scss";

export class Launches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: []
        }
    }
    componentDidMount = () => {
        
    }
    UNSAFE_componentWillReceiveProps = ({start, end}) => {
        const queryString = ("start=" + start + "&end=" + end);
        Axios.get('https://api.spacexdata.com/v3/launches/past?' + queryString)
            .then((response) => {
                this.setState({
                    launches: response.data.map((launch, index) => {
                        return <Launch
                            key={"Launch" + index}
                            links={launch.links}
                            title={launch.mission_name}
                            date={launch.launch_date_utc}
                            desc={launch.details}
                            payloads={launch.rocket.second_stage.payloads}
                            number={launch.flight_number}
                            favoriteCallBack={this.props.favoriteCallBack}
                            heart={false}
                        />;

                    })
                });
            }).catch((response) => {
                console.log("error " + response);
            });
    }

    componentWillUnmount = () => {
    }
    render = () => {
        return (
            <div className="launches">
                {this.state.launches}
            </div>
        );
    }
}

