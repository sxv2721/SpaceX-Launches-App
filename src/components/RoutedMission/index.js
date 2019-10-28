import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";
import "./styles.scss";

export class RoutedMission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            missionData: null,
            isFavorited: false,
        };
    }

    getMission(mission_id) {
        if (isNaN(mission_id)) {
            return;
        }
        Axios.get(`https://api.spacexdata.com/v3/launches/${mission_id}`)
            .then((response) => {
                this.setState({
                    missionData: response.data,
                });
            })
            .catch((error) => {
                console.dir(error);
                if (error.response.status === 404) {
                }
            });
    }

    componentDidMount() {
        const { favorites, match } = this.props;
        this.getMission(match.params.missionId);
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].flight_number === Number(match.params.missionId)) {
                this.setState({ isFavorited: true });
            }
        }
    }

    onFavorite = (e) => {
        const { missionData, isFavorited } = this.state;
        if (!isFavorited) {
            this.props.addFavorite(missionData);
        } else {
            this.props.removeFavorite(missionData);
        }
        this.setState({
            isFavorited: !isFavorited,
        });
    };

    favoriteButton() {
        return this.state.isFavorited === true ? (
            <FontAwesomeIcon
                icon={solidHeart}
                className="favoriteButton"
                onClick={this.onFavorite}
            />
        ) : (
            <FontAwesomeIcon
                icon={heartOutline}
                className="favoriteButton"
                onClick={this.onFavorite}
            />
        );
    }
    flickrImages() {
        if (this.state.missionData === null) {
            return;
        }
        const { flickr_images } = this.state.missionData.links || [];
        const images =
            flickr_images.length > 0 ? (
                flickr_images.map((img, index) => {
                    return (
                        <img
                            src={img}
                            alt={"flickr " + index}
                            className="flickrImg"
                            key={"flickr " + index}
                        />
                    );
                })
            ) : (
                <>No Images</>
            );
        return <div className="flickr">{images}</div>;
    }
    render() {
        const { mission_name, details, links, flight_number } = this.state
            .missionData || {
            mission_name: null,
            details: null,
            links: { mission_patch: null, flickr_images: [] },
            flight_number: null,
        };
        return (
            <div className="routedMission">
                <header className="routedHeader">
                    <NavLink to="/" className="linkHome">
                        Home
                    </NavLink>
                    <h3 className="flightNumber">{flight_number}</h3>
                </header>
                <img
                    src={links.mission_patch}
                    alt="mission patch"
                    className="launchImg"
                />
                {this.favoriteButton()}
                <h2 className="launchTitle">{mission_name}</h2>
                {details != null ? (
                    <p className="launchDesc">{details}</p>
                ) : (
                    <p className="launchDesc">No Details</p>
                )}
                {this.flickrImages()}
            </div>
        );
    }
}
