import React from 'react';
import { createStore } from '../react-redux/store';
import { reducer } from '../react-redux/reducer';

export default class ButtonSub extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = createStore(reducer);
  }

  componentDidMount() {

  }

  onClick(index) {
    this.store.dispatch({type: 'sub'});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClick.bind(this, 0)}>减少</button>
      </div>
    );
  }
} 
