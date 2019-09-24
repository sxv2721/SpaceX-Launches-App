import React from 'react';
import { Payload } from './components/Payload';
import { LaunchImage } from './components/LaunchImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Moment from 'moment';
import "./styles.scss";

//{img, title, date, desc, payload}
export class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heartBool: props.heart,
            descBool: false
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.heart === true) {
            this.setState({
                heartBool: true
            })
        }
        else {
            this.setState({
                heartBool: false
            })
        }
    }
    
    render() {
        return (
            <section className="launch">
                <LaunchImage links={this.props.links} />
                <h2 className="launchTitle">{this.props.title}</h2>
                <button className="favoriteButton"
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            heartBool: !this.state.heartBool
                        });
                        this.props.favoriteCallBack(this.props.number);
                    }
                    }>{this.state.heartBool === true ?
                        <FontAwesomeIcon icon={faHeart} /> :
                        <FontAwesomeIcon icon={far.faHeart} />}
                </button>
                <h2 className="launchDate">{Moment(this.props.date).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                {this.props.desc !== null &&
                    <button className="descButton" onClick={() => {
                        this.setState({
                            descBool: !this.state.descBool
                        })
                    }}>
                        {this.state.descBool === false ? <>Show Description</> : <>Hide Description</>}
                    </button>
                }
                {this.state.descBool === true && <p className="launchDesc">{this.props.desc}</p>}

                <Payload payloads={this.props.payloads} />
            </section>
        );
    }
}