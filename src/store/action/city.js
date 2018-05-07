import * as types from '../actionTypes/cityTypes'

export const addCityListAction = (cityList) => {
    return {
        type: types.GET_CITYLIST,
        cityList: cityList
    }
}