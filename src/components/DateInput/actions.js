import Axios from 'axios';

export const getLaunches = (start, end) => {
    console.log(start, end);
    return (dispatch) => {
        dispatch(fetchLaunches({start, end}));
        return Axios.get('https://api.spacexdata.com/v3/launches/past?start=' + start + '&end=' + end)
        .then(
            (response) => {console.log(response);
                console.log("1st then");
                return response.data},

            (error) => (console.log("an error occurred" + error))
        )
        .then((response) => {console.log(response);
            console.log("2nd then");
            return dispatch(receieveLaunches(response))}
        )
    }
    
}

export const fetchLaunches = (payload) => {
    console.log("fetchLaunches");
    console.log(payload);
    return {
        type: "CHANGE_DATES",
        payload
    }
}
export const receieveLaunches = (payload) => {
    console.log("receiveLaunches");
    console.log(payload);
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
