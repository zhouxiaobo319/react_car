import { combineReducers } from 'redux';
import home from './home';
import mine from './mine';
import buy from './buy';
import sell from './sell';
import city from './city';
import cityList from './cityList';
import topCity from './topCity';

const rootReducer = combineReducers({
    home,
    mine,
    buy,
    sell,
    city,
    cityList,
    topCity
})

export default rootReducer