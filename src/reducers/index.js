import {combineReducers} from "redux";

const weatherReducer = (state = [], action) => {

    if (action.type === "WEATHER") return [action.payload];
    return state
}

const cityReducer = (state = [], action) => {
    if (action.type === "CITY") return action.payload
    return state
}

export default combineReducers({
    weatherReducer,
    cityReducer
})