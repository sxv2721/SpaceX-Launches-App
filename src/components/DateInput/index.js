import React from 'react';
import Moment from 'moment';
import "./styles.scss";

export class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "2002-05-06",
            endDate: Moment().format('YYYY-MM-DD'),
        }
    }

    startDateChange = (e) => {
        this.setState({
            startDate: e.target.value
        });
    }
    endDateChange = (e) => {
        this.setState({
            endDate: e.target.value
        });
    }
    componentDidMount(){
        this.props.getLaunches(this.state.startDate, this.state.endDate);
    }
    render(){

        return (
            <form className="dateInput">
                <label htmlFor="startDate" className="dateLabel">Start Date:</label>
                <input type="date" id="startDate"
                    value={this.state.startDate}
                    onChange={this.startDateChange}
                    max={this.state.endDate}
                />
                <label htmlFor="endDate" className="dateLabel">End Date:</label>
                <input type="date" id="endDate"
                    value={this.state.endDate}
                    onChange={this.endDateChange}
                    min={this.state.startDate}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    this.props.getLaunches(this.state.startDate, this.state.endDate);
                }
                }
                    className="dateSubmit">Submit</button>
            </form >
        );
    }
}