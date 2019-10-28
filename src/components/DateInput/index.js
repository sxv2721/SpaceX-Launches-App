import React from "react";
import Moment from "moment";
import Axios from "axios";
import "./styles.scss";

export class DateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: "2002-05-06",
            endDate: Moment().format("YYYY-MM-DD"),
        };
        this.getLaunches = this.getLaunches.bind(this);
    }

    onStartDateChange = (e) => {
        if (e.target.value < this.state.endDate) {
            this.setState({
                startDate: e.target.value,
            });
        }
    };
    onEndDateChange = (e) => {
        this.setState({
            endDate: e.target.value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const { startDate, endDate } = this.state;
        this.getLaunches(startDate, endDate);
    };
    componentDidMount() {
        const { startDate, endDate } = this.state;
        this.getLaunches(startDate, endDate);
    }
    getLaunches(start, end) {
        const { fetchLaunches, receiveLaunches } = this.props;
        fetchLaunches({ start, end });
        return Axios.get(
            "https://api.spacexdata.com/v3/launches/past?start=" +
                start +
                "&end=" +
                end
        )
            .then(
                (response) => {
                    return response.data;
                },

                (error) => console.log("an error occurred" + error)
            )
            .then((response) => {
                return receiveLaunches(response);
            });
    }
    render() {
        return (
            <form className="dateInput">
                <label htmlFor="startDate" className="dateLabel">
                    Start Date:
                </label>
                <input
                    type="date"
                    className="startDate"
                    value={this.state.startDate}
                    onChange={this.onStartDateChange}
                    max={this.state.endDate}
                />
                <label htmlFor="endDate" className="dateLabel">
                    End Date:
                </label>
                <input
                    type="date"
                    className="endDate"
                    value={this.state.endDate}
                    onChange={this.onEndDateChange}
                    min={this.state.startDate}
                />
                <button onClick={this.onSubmit} className="dateSubmit">
                    Submit
                </button>
            </form>
        );
    }
}
