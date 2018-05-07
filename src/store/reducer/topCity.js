import * as types from '../actionTypes/topCityTypes'

const initalState = {
    name: 'topCity',
    topCity: null
}

const reducer = (state=initalState, action) => {
    switch (action.type) {
    case types.GET_TOPCITY:
        // return {...state, topCity: action.topCity}
        return action.topCity
    default:
        return state
    }
}

export default reducer