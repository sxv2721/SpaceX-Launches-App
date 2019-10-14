import React from 'react';
import { Payload } from './components/Payload';
import { LaunchImage } from './components/LaunchImage';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Moment from 'moment';
import "./styles.scss";

export class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingDescription: false,
            isCurrentRoute: false
        }
    }
    /*
            links
            mission_name
            launch_date_utc
            details
            rocket.second_stage.payloads
            flight_number
    */

    render() {
        const data = this.props.data;
        return (
            <section className="launch" >
                <Route path={"/" + data.mission_name}
                    children={({ match }) => {
                        if (match !== null) {
                            return (
                                <LaunchImage links={data.links} isShowingImages={true} isCurrentRoute={true}/>
                            );
                        }
                        else{
                            return (
                                <LaunchImage links={data.links} isShowingImages={false} isCurrentRoute={false}/>
                            );
                        }
                    }} />
                <h2 className="launchTitle">{data.mission_name}</h2>
                <button className="favoriteButton"
                    onClick={(e) => {//dispatch favorites actions here.
                        if (!this.props.isFavorited) {
                            this.props.addFavorite(this.props.data);
                        }
                        else {
                            this.props.removeFavorite(this.props.data);
                        }
                    }
                    }>{this.props.isFavorited === true ?
                        <FontAwesomeIcon icon={faHeart} /> :
                        <FontAwesomeIcon icon={far.faHeart} />}
                </button>
                <h2 className="launchDate">{Moment(data.launch_date_utc).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                <Route path={"/" + data.mission_name} render={() => {
                    return (data.details !== null ?
                        <p className="launchDesc">{data.details}</p> :
                        <p className="launchDesc">No Details</p>
                    );
                }} />

                <Payload payloads={data.rocket.second_stage.payloads} />
            </section>
        );
    }
}

/*
<button className="descButton" onClick={() => {
                            this.setState({
                                isShowingDescription: !this.state.isShowingDescription
                            })
                        }}>
                            {this.state.isShowingDescription === false ? <>Show Description</> : <>Hide Description</>}
                        </button>
*/