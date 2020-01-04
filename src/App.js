import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from './react-redux/react-redux';
import ButtonAdd from './component/add';
import ButtonSub from './component/sub';

const addCountAction = {
  type: 'add',
}

const subCountAction = {
  type: 'sub',
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: () => {
      dispatch(addCountAction);
    },
    subCount: () => {
      dispatch(subCountAction);
    }
  }
}

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
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
            React-redux-simple: {this.props.count}
            <button onClick={ () => this.props.addCount()}>增加</button>
            <button onClick={ () => this.props.subCount()}>减少</button>
            <ButtonAdd />
            <ButtonSub />
          </div>
        </header>
      </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);