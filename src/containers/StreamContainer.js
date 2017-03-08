import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class StreamContainer extends Component{
  static propTypes = {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Stream</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red'
  }
})