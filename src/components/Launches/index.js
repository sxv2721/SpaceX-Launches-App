import React from "react";
import Launch from "../Launch/container";
import "./styles.scss";

export class Launches extends React.Component {
    checkFavorites = (launch) => {
        const { favorites } = this.props;
        for (let i = 0; i < favorites.length; i++) {
            if (launch.flight_number === favorites[i].flight_number) {
                return true;
            }
        }
        return false;
    };

    render() {
        const { launchesData } = this.props;
        return (
            <div className="launches">
                {launchesData !== undefined &&
                    launchesData.map((launch, index) => {
                        return (
                            <Launch
                                key={"Launch" + index}
                                index={index}
                                data={launch}
                                isFavorited={this.checkFavorites(launch)}
                            />
                        );
                    })}
            </div>
        );
    }
}
