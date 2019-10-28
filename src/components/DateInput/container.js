import { connect } from "react-redux";
import { DateInput } from "./index";
import { fetchLaunches, receiveLaunches } from "./actions";

const mapStateToProps = ({ dateReducer }) => ({
    // startDate: dateReducer.startDate,
    // endDate: dateReducer.endDate
});
const mapDispatchToProps = (dispatch) => ({
    fetchLaunches: (payload) => {
        dispatch(fetchLaunches(payload));
    },
    receiveLaunches: (payload) => {
        dispatch(receiveLaunches(payload));
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateInput);
