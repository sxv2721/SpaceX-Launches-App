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

    render = () => {
        return (
            <>
                {this.props.favorites.length > 0 &&
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