import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MessagesContainer extends Component{
  static propTypes = {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MessagesContainer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'yellow'
  }
})