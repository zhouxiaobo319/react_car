import * as types from '../actionTypes/homeTypes'

export const addHome = (homeContent) => {
    return {
        type: types.GET_HOMELIST,
        homeContent
    }
}