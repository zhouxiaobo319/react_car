import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import './assets/fonts/iconfont.css'
import './assets/style/base.css'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
// import { createStore } from 'redux'; // 一个创建的方法
import store from './store';

import mock from './mock';
if (process.env.NODE_ENV === 'development') mock() // 区分环境变量

// const store = createStore((state = {name: 'zs', age: 9, jdList: null}, action) => {
//     switch (action.type) {
//     case 'CHANGE_NAME':
//         return {...state, name: 'ls'}
//     case 'CHANGE_AGE':
//         return {...state, age: action.age}
//     case 'GET_JDLIST':
//         return {...state, jdList: action.jdList}
//     default:
//         return state
//     }
// }) // 创建仓库, 函数() => {} 是 reducer

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
