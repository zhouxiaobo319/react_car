import * as types from '../actionTypes/homeTypes'

const initalState = {
    name: 'home',
    homeContent: null
}

const reducer = (state=initalState, action) => {
    // console.log(action.homeContent, '0000')
    switch (action.type) {
    case types.GET_HOMELIST:
        return {...state, homeContent: action.homeContent}
    default:
        return state
    }
}

export default reducer