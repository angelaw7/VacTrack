import React, { Component }from 'react';
import { Text } from 'react-native';


export default class AppText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 20 }}>
        {this.props.children}
      </Text>
    )

  }
}