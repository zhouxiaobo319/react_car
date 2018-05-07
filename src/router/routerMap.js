import Home from '../components/Home'
import Buy from '../components/Buy'; // 买
import Sell from '../components/Sell'; // 卖
import Mine from '../components/Mine'
import City from '../components/City';
import TopCity from '../components/City/TopCity';

export const ROUTER_MAP = {
    NAV: [
        {
            title: '首页',
            to: '/home',
            active: 'active',
            icon: 'iconfont icon-shouye'
        },
        {
            title: '买车',
            to: '/buy',
            active: 'active',
            icon: 'iconfont icon-fenlei'
        },
        {
            title: '卖车',
            to: '/sell',
            active: 'active',
            icon: 'iconfont icon-xuewei'
        },
        {
            title: '我的',
            to: '/mine',
            active: 'active',
            icon: 'iconfont icon-wode'
        }
    ],
    ROUTER_VIEW: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/buy',
            component: Buy
        },
        {
            path: '/sell',
            component: Sell
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/topcity',
            component: TopCity
        }
    ]
}