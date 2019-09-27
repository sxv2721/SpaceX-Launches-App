import {combineReducers} from 'redux'
const DESC = "DESCRIPTION";
const HEART = "HEART";
const IMG = "IMAGES";
const PAYLOAD = "PAYLOADS";
const ALL = "ALL";
const ADD = "ADD";
const REMOVE = "REMOVE";
const START = "START";
const END = "END";

const descFlip = (val) => {
    return {type: DESC, value: val}
}
const heartFlip = (val) => {
    return {type: HEART, value: val}
}
const imgFlip = (val) => {
    return {type: IMG, value: val}
}
const payloadFlip = (val) => {
    return {type: PAYLOAD, value: val}
}
const allFlip = (val) => {
    return {type: ALL, value: val}
}
const addLaunch = (val) => {
    return {type: ADD, value: val}
}
const removeLaunch = (val, index) => {
    return {type: REMOVE, value: val, index: index}
}
const startDateUpdate = (val) => {
    return {type: START, value: val}
}
const endDateUpdate = (val) => {
    return {type: END, value: val}
}
const defaultState = {
    desc: false,
    heart: false,
    img: false,
    payload: false,
    favorites: [],
    startDate: "1979-09-19",
    endDate: "2019-09-19"
}
export const mapStateToLaunches = (state) => {
    return {
      startDate: state.startDate,
      endDate: state.endDate,
      favorites: state.favorites
    }
}
export const mapDispatchToLaunches = (dispatch) => {
    return {
      startDateUpdate: (date) => {
        dispatch(startDateUpdate(date));
      },
      endDateUpdate: (date) => {
        dispatch(endDateUpdate(date));
      },
      addLaunch: (launch) => {
        dispatch(addLaunch(launch));
      },
      removeLaunch: (launch, index) => {
        dispatch(removeLaunch(launch, index));
      }
      
    }
}
export const mapStateToFavorites = (state) => {
    return {
      favorites: state.favorites,
    }
}
export const mapDispatchToFavorites = (dispatch) => {
    return {
      addLaunch: (launch) => {
        dispatch(addLaunch(launch));
      },
      removeLaunch: (launch, index) => {
        dispatch(removeLaunch(launch, index));
      }
      
    }
}
export const mapStateToDate = (state) => {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
    }
}
export const mapDispatchToDate = (dispatch) => {
    return {
        startDateUpdate: (date) => {
            dispatch(startDateUpdate(date));
          },
          endDateUpdate: (date) => {
            dispatch(endDateUpdate(date));
          }
    }
}
const boolReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DESC:
            return { ...state, desc: action.value };
        case HEART:
            return { ...state, heart: action.value };
        case IMG:
            return { ...state, img: action.value };
        case PAYLOAD:
            return { ...state, payload: action.value };
        case ALL:
                return { ...state, desc: action.value, 
                     img: action.value, 
                     payload: action.value };
        default:
            return state;
    }
}
const favReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD: 
            return {...state, favorites: [...state.favorites, action.value] };
        case REMOVE:
            let myArr = [...state.favorites];
            myArr.splice(action.index, 1);
            return {...state, favorites: [...myArr] };
        default:
            return state;
    }
}
const dateReducer = (state=defaultState, action) => {
    switch(action.type){
        case START:
            return {...state, startDate: action.value};
        case END: 
            return {...state, endDate: action.value}
        default:
            return state;
    }
}
export const baseReducer = combineReducers({boolReducer, favReducer, dateReducer})