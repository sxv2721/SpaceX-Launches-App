import React from 'react';
import Launch  from '../Launch/container';
import { BrowserRouter, NavLink } from 'react-router-dom';
import "./styles.scss";

export class Launches extends React.Component {
    render(){
        return (
            <div className="launches">
                <BrowserRouter className="browserRouter">
                    <NavLink to="/"></NavLink>
                {this.props.launchesData !== undefined &&
                    this.props.launchesData.map((launch, index) => {
                        return (
                        <NavLink to={"/"+launch.mission_name} className="navLink" activeClassName="activeLink" key={"Launch" + index}>
                            <Launch
                            index={index}
                            data={launch}
                            isFavorited={this.props.favorites.includes(launch)}
                        />
                        </NavLink>)
                    }) }
                    </BrowserRouter>
            </div>
        );
    }
}


