import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../DateInput/actions";
import { RoutedMission } from "./index";

const mapStateToProps = ({ dateReducer }) => ({
    favorites: dateReducer.favoritesData,
});
const mapDispatchProps = (dispatch) => ({
    addFavorite: (fav) => {
        dispatch(addFavorite(fav));
    },
    removeFavorite: (fav) => {
        dispatch(removeFavorite(fav));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchProps
)(RoutedMission);
