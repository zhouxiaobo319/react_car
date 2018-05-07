import React, { Component } from 'react';

class Detail extends Component {
    render () {
        // console.log(this.props)
        const { location } = this.props
        return (
            <div>
                <img src={location.state.imageurl} alt=""/>
                <p>{location.state.wname}</p>
                <span><p>{location.state.jdPrice}</p></span>
            </div>
        )
    }
}

export default Detail;