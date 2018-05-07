import React, { Component } from 'react';

class Content extends Component {
    render () {
        const { homeContent } = this.props;
        return (
            <div>
                {
                    homeContent.map((item, ind) => {
                        // console.log(item.carList)
                        return item.carList.map((items, index) => {
                            // console.log(items)
                            return <dl key={index}>
                                <dt>{items.carName}</dt>
                                <dd>
                                    <span>{items.price}</span>
                                    <i className="iconfont icon-cuo"></i>
                                </dd>
                            </dl>
                        })
                    })
                }
            </div>
        )
    }
}

export default Content;