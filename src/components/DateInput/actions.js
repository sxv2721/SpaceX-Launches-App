export const fetchLaunches = (payload) => {
    return {
        type: "CHANGE_DATES",
        payload,
    };
};
export const receiveLaunches = (payload) => {
    return {
        type: "RECEIVE_LAUNCHES",
        payload,
    };
};
export const addFavorite = (payload) => {
    return {
        type: "ADD_FAVORITE",
        payload,
    };
};
export const removeFavorite = (payload) => {
    return {
        type: "REMOVE_FAVORITE",
        payload,
    };
};
