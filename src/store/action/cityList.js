import * as types from '../actionTypes/cityListTypes'

export const cityListAction = (cityActive) => {
    // console.log(cityActive, '2222222')
    return {
        type: types.GET_CITYACTIVE,
        cityActive
    }
}

export const cityListChange = (cityChange) => {
    // console.log(cityChange, '2222222')
    return {
        type: types.GET_CITYCHANGE,
        cityChange
    }
}