import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { addCityListAction } from '../../store/action/city'
import './City.css';
import CityList from './CityList';
import { cityListChange } from '../../store/action/cityList'

class City extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get('/api/city')
            .then((res) => {
                // console.log(res.data, '----------')
                dispatch(addCityListAction(res.data)) // 方法 (存)
         
            })
            .catch(e => {
                throw Error(e)
            })
    }
    goprev () {
        const { history } = this.props;
        history.push('/');
    }
    cityDelete (txt) {
        const { dispatch } = this.props;
        dispatch(cityListChange(txt))
    }
    goTopCity () {
        const { history } = this.props;
        history.push('/topcity');
    }
    render () {
        const { cityList, cityActive } = this.props;
        // console.log(cityActive, '11111')
        return (
            <div className="city">
                <div className="city_head">
                    <span className='iconfont icon-xiangzuo' onClick={this.goprev.bind(this)}></span>
                    <h3>选择城市</h3>
                </div>
                <div className="city_main">
                    <p onClick={this.goTopCity.bind(this)}>
                        您的上牌地址
                        <span>北京市 <i className='iconfont icon-angle-right'></i></span>
                    </p>
                    <div className="yixuan">
                        <h3>您已选择城市</h3>
                        <ul>
                            <li>北京市</li>
                            {
                                // console.log(cityActive, '0000')
                                cityActive !== null && cityActive.map((item, ind) => {
                                    return <li key={ind} onClick={this.cityDelete.bind(this, item)}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                    {
                        cityList !== null && cityList.map((item, key) => {
                            return <div key={key} className="city_list">
                                <h3>{item.letter}</h3>
                                <ul>
                                    {
                                        item.city.map((items, ind) => {
                                            return <CityList 
                                                key={ind} 
                                                cityLIst = {items.province}
                                            >
                                            </CityList>
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, oweProps) => { // 取
    // console.log(state.cityList, '**************');
    return {
        cityList: state.city.cityList,
        cityActive: state.cityList
    }
}

export default connect(mapStateToProps)(City);