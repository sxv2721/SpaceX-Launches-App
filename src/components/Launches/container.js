import { connect } from 'react-redux';
import { Launches } from './index';

const mapStateToProps = ({dateReducer}) => {
    return { launchesData: dateReducer.launchesData,
            isFetching: dateReducer.isFetching,
            favorites: dateReducer.favoritesData }
}
export default connect(mapStateToProps)(Launches);