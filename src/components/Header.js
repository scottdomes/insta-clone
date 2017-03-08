import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default class Header extends Component{
  static propTypes = {
    
  }

  render() {
    // console.log((this.props.currentTab * window.width) / 2)
    console.log()
    const multiplier = Math.abs((this.props.currentTab - 1) / 2)
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <Image 
            style={styles.sideIcons} 
            resizeMode="contain" 
            source={require('../assets/camera.png')}/>
          <Image 
            style={styles.image} 
            resizeMode="contain" 
            source={require('../assets/logo-big.png')}/>
          <Image 
            style={styles.sideIcons} 
            resizeMode="contain" 
            source={require('../assets/messages.png')}/>
        </View>
        <View style={styles.underlineContainer}>
          <View style={[styles.underline, { left: ((this.props.currentTab * window.width) / 2 - 50), width: 100 - (100 * multiplier)  }]}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 999
  },
  underlineContainer: {

  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 100
  },
  sideIcons: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    width: 28,
  },
  underline: {
    height: 2,
    width: 100,
    backgroundColor: 'black'
  }
})  