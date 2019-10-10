import { connect } from 'react-redux';
import { DateInput } from './index';
import { getLaunches } from './actions';


const mapStateToProps = ({ dateReducer }) => ({
    // startDate: dateReducer.startDate,
    // endDate: dateReducer.endDate
}
)
const mapDispatchToProps = (dispatch) => ({
    getLaunches: (start, end) => { dispatch(getLaunches(start, end)) }
}
)
export default connect(mapStateToProps, mapDispatchToProps)(DateInput);