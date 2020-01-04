import React from 'react';
import PropTypes from 'prop-types';

export class Provider extends React.Component {

  // 声明静态属性 childContextTypes 指定 context 对象的属性，是 context 的固定写法
  static childContextTypes = {
    store: PropTypes.object,
  }

  // getChildContext 方法，返回 context 对象，固定写法
  getChildContext() {
    console.log('getChildContext this.store', this.store)
    return {
      store: this.store,
    }
  }

  constructor(props, context) {
    super(props, context);
    this.store = props.store;

    console.log('Provider props', props);
  }

  render() {
    return this.props.children;
  }
}


export function connect (mapStateToProps, mapDispathToProps) {
  return function (Component) {
    class Connect extends React.Component { 

      constructor(props, context) {
        super(props, context);

        console.log('Connect props', props);
        console.log('context', context);
      }

      componentDidMount() {
        this.context.store.subscribe(this.handleStoreChange.bind(this));
      }

      handleStoreChange() {
        // 触发更新
        this.forceUpdate();
      }

      render() {
        return (
          <Component
            // 传入该组件的 props，需要由 connect 这个高阶组件传回原组件
            {...this.props}
            // 根据 mapStateToProps 将 state 挂载到 props 上
            {...mapStateToProps(this.context.store.getState())}
            // 根据 mapDispathToProps 将 dispatch(action) 挂载到 this.props 上
            {...mapDispathToProps(this.context.store.dispatch)}
          />
        )
      }
    }

    // 接受 context 的固定写法
    Connect.contextTypes = {
      store: PropTypes.object,
    }

    return Connect;
  }
}