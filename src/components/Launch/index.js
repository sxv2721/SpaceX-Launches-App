import React from 'react';
import { Payload } from './components/Payload';
import { LaunchImage } from './components/LaunchImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Moment from 'moment';
import "./styles.scss";

export class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descBool: false
        }
    }

    render() {
        /*
            links={launch.links}
            title={launch.mission_name}
            date={launch.launch_date_utc}
            desc={launch.details}
            payloads={launch.rocket.second_stage.payloads}
            number={launch.flight_number}
        */
       const data = this.props.data;
        return (
            <section className="launch">
                <LaunchImage links={data.links} />
                <h2 className="launchTitle">{data.mission_name}</h2>
                <button className="favoriteButton"
                    onClick={(e) => {//dispatch favorites actions here.
                        e.preventDefault();//add if heart===false remove if true
                        if (!this.props.heart) {
                            this.props.addFavorite(this.props.data);
                        }
                        else {
                            this.props.removeFavorite(this.props.data);
                        }
                    }
                    }>{this.props.heart === true ?
                        <FontAwesomeIcon icon={faHeart} /> :
                        <FontAwesomeIcon icon={far.faHeart} />}
                </button>
                <h2 className="launchDate">{Moment(data.launch_date_utc).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                {data.details !== null &&
                    <button className="descButton" onClick={() => {
                        this.setState({
                            descBool: !this.state.descBool
                        })
                    }}>
                        {this.state.descBool === false ? <>Show Description</> : <>Hide Description</>}
                    </button>
                }
                {this.state.descBool === true && <p className="launchDesc">{data.details}</p>}

                <Payload payloads={data.rocket.second_stage.payloads} />
            </section>
        );
    }
}