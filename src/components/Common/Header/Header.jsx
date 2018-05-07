import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Header.css';

let className = 'header';

@withRouter
class Header extends Component {
    goCity () {
        const { history } = this.props;
        // history.goBack(); // 后退
        history.push('/city');
    }
    render () {
        const { location } = this.props;
        return (
            <div className={className}>
                <p onClick={this.goCity.bind(this)}>北京市</p>
                <span className='iconfont icon-fangdajing back'></span>

            </div>
        )
    }
}

export default Header;