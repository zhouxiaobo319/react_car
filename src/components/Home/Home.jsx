import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { addHome } from '../../store/action/home'
import './Home.css'

import Header from '../Common/Header'
import Content from './Content'
import Order from './Order'
import Brand from './Brand'
const Test = ({match}) => {
    return (
        <div className="home_item">
            <span>text</span>
        </div>
    )
}

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get('/api/homeContent')
            .then((res) => {
                // console.log(res.data, '----------')
                dispatch(addHome(res.data)) // 方法 (存)
         
            })
            .catch(e => {
                throw Error(e)
            })
    }
    changeClass () {
        // console.log(this.refs.icon.className)
        let { history } = this.props;
      
        if (this.refs.icon.className == 'iconfont icon-angle-down') {
            this.refs.icon.className = 'iconfont icon-angle-up'
        } else {
            this.refs.icon.className = 'iconfont icon-angle-down'
            history.goBack();
        }
    }
    render() {
        const { match, homeContent } = this.props;
        const { location } = this.props;
        console.log(location.state, '.....')
        return (
            <div className="home">
                <Header/>
                <Router>
                    <div className="home_cont">
                        <div className="home_title">
                            <Link to={`${match.url}/order`} onClick={this.changeClass.bind(this)}>排序<i ref='icon' className='iconfont icon-angle-down'></i></Link>
                            <Link to={`${match.url}/brand`} onClick={this.changeClass.bind(this)}>品牌<i ref='icon' className='iconfont icon-angle-down'></i></Link>
                            <Link to={`${match.url}/test`} onClick={this.changeClass.bind(this)}>价格<i ref='icon' className='iconfont icon-angle-down'></i></Link>
                            <Link to={`${match.url}/test`} onClick={this.changeClass.bind(this)}>筛选<i ref='icon' className='iconfont icon-angle-down'></i></Link>
                        </div>
                        <div className="list-box">
                            <Route className="home_item" path={`${match.url}/order`} component={Order}></Route>
                            <Route className="home_item" path={`${match.url}/brand`} component={Brand}></Route>
                            <Route className="home_item" path={`${match.url}/test`} component={Test}></Route>
                            <Route className="home_item" path={`${match.url}/test`} component={Test}></Route>
                            <div className="list_item">
                                {
                                    homeContent !== null && homeContent.map((item, key) => {
                                        // console.log(item)
                                        return (
                                            <Content key={key} homeContent={item}>{item}</Content>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state, oweProps) => { // 取
    // console.log(state.home.homeContent, '**************');
    return {
        homeContent: state.home.homeContent
    }
}

export default connect(mapStateToProps)(Home);