import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from './react-redux/store';
import { reducer } from './react-redux/reducer';
import ButtonAdd from './component/add';
import ButtonSub from './component/sub';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = createStore(reducer);
    this.store.state = this.store.getState();

    this.state = {
      count: this.store.state.count,
    }
  }

  componentDidMount() {
    this.store.subscribe(() => {
      console.log('subscribe', this.store.getState());

      
      const newState = this.store.getState();
      
      this.setState({
        count: newState.count,
      });

      console.log('this.state', this.state);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            React-redux-simple: {this.state.count}
            <ButtonAdd />
            <ButtonSub />
          </div>
        </header>
      </div>
    );
  }
} 
