import React from 'react';
import Launch  from '../Launch/container';
import "./styles.scss";

export class Launches extends React.Component {
    render(){
        return (
            <div className="launches">
                {this.props.launchesData !== undefined &&
                    this.props.launchesData.map((launch, index) => {
                        return (<Launch
                            key={"Launch" + index}
                            index={index}
                            data={launch}
                            heart={this.props.favorites.includes(launch)}
                        />)
                    }) }
            </div>
        );
    }
}


