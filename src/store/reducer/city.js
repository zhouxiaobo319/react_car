import { GET_CITYLIST } from '../actionTypes/cityTypes'

const initalState = {
    name: 'city',
    cityList: null
}

const reducer = (state=initalState, action) => {
    switch (action.type) {
    case GET_CITYLIST:
        return {...state, cityList: action.cityList}
    default:
        return state
    }
}

export default reducer