import React from "react";
import { Payload } from "./components/Payload";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";
import Moment from "moment";
import "./styles.scss";

export class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingDescription: false,
        };
    }
    /*
            links
            mission_name
            launch_date_utc
            details
            rocket.second_stage.payloads
            flight_number
    */
    onFavorite = (e) => {
        if (!this.props.isFavorited) {
            this.props.addFavorite(this.props.data);
        } else {
            this.props.removeFavorite(this.props.data);
        }
    };
    onShowDescription = (e) => {
        this.setState({
            isShowingDescription: !this.state.isShowingDescription,
        });
    };
    renderDescription() {
        const { details } = this.props.data;
        const { isShowingDescription } = this.state;
        return (
            <>
                <button className="descButton" onClick={this.onShowDescription}>
                    {isShowingDescription === false ? (
                        <>Show Description</>
                    ) : (
                        <>Hide Description</>
                    )}
                </button>
                {isShowingDescription === true && (
                    <p className="launchDesc">{details}</p>
                )}
            </>
        );
    }
    renderFavoriteButton() {
        return (
            <button className="favoriteButton" onClick={this.onFavorite}>
                {this.props.isFavorited === true ? (
                    <FontAwesomeIcon icon={solidHeart} />
                ) : (
                    <FontAwesomeIcon icon={heartOutline} />
                )}
            </button>
        );
    }
    render() {
        const {
            flight_number,
            links,
            mission_name,
            launch_date_utc,
            rocket,
            details,
        } = this.props.data;
        return (
            <section className="launch">
                <NavLink to={`/missions/${flight_number}`}>
                    <img
                        src={links.mission_patch}
                        alt="mission patch"
                        className="launchImg"
                    />
                </NavLink>
                <h2 className="launchTitle">{mission_name}</h2>
                {this.renderFavoriteButton()}
                <h2 className="launchDate">
                    {Moment(launch_date_utc).format("MMMM Do YYYY, h:mm:ss a")}
                </h2>
                {details !== null && this.renderDescription()}
                <Payload payloads={rocket.second_stage.payloads} />
            </section>
        );
    }
}
