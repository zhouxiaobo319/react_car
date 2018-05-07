import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { cityListAction } from '../../../store/action/cityList'
import { cityListChange } from '../../../store/action/cityList'

class CityList extends Component {
    render () {
        const { cityLIst } = this.props;
        return (
            <Fragment>
                <li ref='cont' onClick={this.cityActive.bind(this, cityLIst)}>
                    {cityLIst}
                </li>
            </Fragment>
        )
    }
    cityActive (txt) {
        // console.log(txt)
        const { dispatch } = this.props;
        if (this.refs.cont.className !== 'active') {
            this.refs.cont.className = 'active'
         
            dispatch(cityListAction(txt))
            
        } else {
            this.refs.cont.className = ''
            dispatch(cityListChange(txt))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state.cityList)
    return {
        cityActive: state.cityList
    }
}

export default connect(mapStateToProps)(CityList);