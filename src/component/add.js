import React from 'react';
import { connect } from '../react-redux/react-redux';

const addCountAction = {
  type: 'add',
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
    }
  }
}

class ButtonAdd extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.addCount() }>增加</button>
      </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAdd);