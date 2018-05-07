import * as types from '../actionTypes/cityListTypes'

const initalState = {
    name: 'cityList',
    cityActive: []
}

const reducer = (state=initalState.cityActive, action) => {
    // console.log(action.txt, '33333')
    switch (action.type) {
    case types.GET_CITYACTIVE:
        return [...state, action.cityActive]
    case types.GET_CITYCHANGE:
        if (state.indexOf(action.cityChange) !== -1) {
            state.splice(state.indexOf(action.cityChange), 1)
            // console.log(action.cityChange)
        }
        return [...state]
    default:
        return state
    }
}

export default reducer