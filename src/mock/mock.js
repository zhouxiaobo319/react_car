import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
// import jdList from './datas/jdList.json';
import cityList from './datas/city.js';
import topCity from './datas/provinceCity.js';
import homeContent from './datas/carClass.js';

const mock = new AxiosMockAdapter(axios);

const Data = () => {
    mock.onGet('/api/city').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, cityList])
        })
    })
    mock.onGet('/api/topCity').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, topCity])
        })
    })
    mock.onGet('/api/homeContent').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, homeContent])
        })
    })
}

export default Data;