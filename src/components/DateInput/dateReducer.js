const DATE = "CHANGE_DATES";
const RECEIVE = "RECEIVE_LAUNCHES";
const ADD = "ADD_FAVORITE";
const REMOVE = "REMOVE_FAVORITE";

//default state
const defaultState = {
    startDate: null,
    endDate: null,
    isFetching: false,
    launchesData: [],
    favoritesData: [],
};
export const dateReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DATE:
            const { start, end } = payload;
            return {
                ...state,
                startDate: start,
                endDate: end,
                isFetching: true,
            };
        case RECEIVE:
            return {
                ...state,
                launchesData: payload,
                isFetching: false,
            };
        case ADD:
            return {
                ...state,
                favoritesData: [...state.favoritesData, payload],
            };
        case REMOVE:
            let favs = [...state.favoritesData];
            let favIndex = favs.indexOf(payload);
            favs.splice(favIndex, 1);
            return {
                ...state,
                favoritesData: favs,
            };
        default:
            return state;
    }
};
