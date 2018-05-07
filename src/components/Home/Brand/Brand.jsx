import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Brand.css'

class Brand extends Component {
    getCarList (carList) {
        let { history } = this.props;
        // console.log(carList)
        history.push({
            pathname: '/home',
            state: {
                carList
            }
        })
    }
    render () {
        const { homeContent } = this.props;
        // console.log(homeContent)
        return (
            <div className='home_item'>
                {
                    homeContent.map((item, ind) => {
                        // console.log(item)
                        return item.map((items, index) => {
                            // console.log(items.carList)
                            return <p key={index} onClick={this.getCarList.bind(this, items.carList)}>{items.carClass}</p>
                        })
                    })
                }
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


export default connect(mapStateToProps)(Brand);