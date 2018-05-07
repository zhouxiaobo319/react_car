import React, { Component, Fragment } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { addTopCity } from '../../../store/action/topCity';
import './TopCity.css';
import BScroll from 'better-scroll';

class TopCity extends Component {
    constructor() {
        super();
        this.state = {
            scroll: null,
            id: null,
            citylist: null,
            ind: 0
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get('/api/topCity')
            .then((res) => {
                // console.log(res.data.city, '1111111')
                // console.log(res.data.provinceArr, '22222')

                dispatch(addTopCity(res.data)) // 方法 (存)

            })
            .catch(e => {
                throw Error(e)
            })

        const options = {
            scrollY: true, // 因为scrollY默认为true，其实可以省略
            click: true
        }

        let leftCity = this.refs.leftCity;
        this.setState({
            scroll: new BScroll(leftCity, options)
        })
    }
    indexClick(items, e) {
        let citylist = this.props.topCity.city[items.id];
        // console.log(citylist, '......')
        this.setState({
            id: items.id,
            citylist
        })
    }
    scrollClick(index) {
        this.setState({
            ind: index
        })
        let arrs = []
        let arrTop = this.refs.leftCity.querySelectorAll('.every');
        for (let i = 0; i < arrTop.length; i++) {
            arrs.push(arrTop[i].offsetTop);
        }
        this.state.scroll.scrollTo(0, -arrs[index], 1000);
    }
    goprev () {
        const { history } = this.props;
        history.push('/city');
    }
    render() {
        const { topCity } = this.props;
        const { citylist } = this.state;
        // console.log(citylist)
        return (
            <Fragment>
            <div className="city_head">
                <span className='iconfont icon-xiangzuo' onClick={this.goprev.bind(this)}></span>
                <h3>选择您的上牌城市</h3>
            </div>
            <div className='topCity'>
                <aside className='leftCity' id="leftCity" ref='leftCity'>
                    <div className='left'>
                        {
                            topCity.provinceArr !== undefined && topCity.provinceArr.map((item, key) => {
                                return (
                                    <div key={key} className='every'>
                                        <h3>{item.letter}</h3>
                                        {
                                            item.province.map((items, ind) => {
                                                return <p key={ind} onClick={this.indexClick.bind(this, items)}>{items.name}</p>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </aside>
                <div className='center'>
                    {
                        citylist != null && citylist.map((item, index) => {
                            return <p key={index}>{item.name}</p>
                        })
                    }
                </div>
                <div className='right'>
                    {
                        topCity.provinceArr !== undefined && topCity.provinceArr.map((item, key) => {
                            return (
                                <h3 key={key} onClick={this.scrollClick.bind(this, key)}>{item.letter}</h3>
                            )
                        })
                    }
                </div>
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, oweProps) => { // 取
    console.log(state.topCity, '**************');
    return {
        topCity: state.topCity
    }
}

export default connect(mapStateToProps)(TopCity);
