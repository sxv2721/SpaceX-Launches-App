import Axios from 'axios';

export const getLaunches = (start, end) => {
    return (dispatch) => {
        dispatch(fetchLaunches({ start, end }));
        return Axios.get('https://api.spacexdata.com/v3/launches/past?start=' + start + '&end=' + end)
            .then(
                (response) => {
                    return response.data
                },

                (error) => (console.log("an error occurred" + error))
            )
            .then((response) => {
                return dispatch(receieveLaunches(response))
            }
            )
    }

}

export const fetchLaunches = (payload) => {
    return {
        type: "CHANGE_DATES",
        payload
    }
}
export const receieveLaunches = (payload) => {
    return {
        type: "RECEIVE_LAUNCHES",
        payload
    }
}
export const addFavorite = (payload) => {
    return {
        type: "ADD_FAVORITE",
        payload
    }
}
export const removeFavorite = (payload) => {
    return {
        type: "REMOVE_FAVORITE",
        payload
    }
}
