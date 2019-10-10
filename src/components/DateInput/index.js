import React from 'react';
import Moment from 'moment';
import "./styles.scss";

export class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: "2002-05-06",
            end: Moment().format('YYYY-MM-DD'),
        }
    }

    startChange = (e) => {
        this.setState({
            start: e.target.value
        });
    }
    endChange = (e) => {
        this.setState({
            end: e.target.value
        });
    }
    componentDidMount(){
        this.props.getLaunches(this.state.start, this.state.end);
    }
    render = () => {

        return (
            <form className="dateInput">
                <label htmlFor="startDate" className="dateLabel">Start Date:</label>
                <input type="date" id="startDate"
                    value={this.state.start}
                    onChange={this.startChange}
                    max={this.state.end}
                />
                <label htmlFor="endDate" className="dateLabel">End Date:</label>
                <input type="date" id="endDate"
                    value={this.state.end}
                    onChange={this.endChange}
                    min={this.state.start}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    this.props.getLaunches(this.state.start, this.state.end);
                }
                }
                    className="dateSubmit">Submit</button>
            </form >
        );
    }
}