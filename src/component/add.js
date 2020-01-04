import React from 'react';
import { createStore } from '../react-redux/store';
import { reducer } from '../react-redux/reducer';

export default class ButtonAdd extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = createStore(reducer);
  }

  componentDidMount() {

  }

  onClick(index) {
    this.store.dispatch({type: 'add'});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClick.bind(this, 0)}>增加</button>
      </div>
    );
  }
} 
