import * as types from '../actionTypes/topCityTypes'

export const addTopCity = (topCity) => {
    return {
        type: types.GET_TOPCITY,
        topCity
    }
}