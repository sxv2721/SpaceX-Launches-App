import { connect } from 'react-redux';
import {Favorites} from './index';

const mapStateToProps = (state) => {
    return{
        favorites: state.dateReducer.favoritesData
    }
}

export default connect(mapStateToProps)(Favorites);