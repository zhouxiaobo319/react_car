1、应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
this.state = {} // 管理组件自身的状态的
const store = {food: null} // 管理全局数据状态的

store 仓库 放着全局的数据状态

2、唯一改变 state 的办法是触发 action，一个描述发生什么的对象。
this.setState = ({})
触发action {type: 'buyFood'}

action 是 {
    type: '只是说一下并不是做'
}是一个指令、命令、描述（没有做实事呢）

3、为了描述 action 如何改变 state 树，你需要编写 reducers。
reducers [function] {food: '鱼香肉丝'}

reducer 是改变 state 状态的
就是描述 这个命令是怎么实现 怎么完成买饭这个任务的