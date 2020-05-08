import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const color = this.props.highlight ? 'black' : 'red';

    return (
      <TouchableOpacity onPress={() => {
        this.props.dispatch({ type: 'CHANGE_COLOR' });
      }}>
        <Text style={{ color }}>Change Color</Text>
      </TouchableOpacity>
    );
  }
}

export default connect(
  function(state) {
    return { highlight: state.highlight };
  }

)(ChangeColor);
