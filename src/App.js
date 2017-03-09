import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainNavigation from './components/MainNavigation'
import WrapperNavigation from './components/WrapperNavigation'
import { StreamContainer, MessagesContainer, CameraContainer } from './containers'

export default class App extends Component{
  render() {
    return (
      <WrapperNavigation 
        routes={[
          <CameraContainer/>,
          <MainNavigation 
            routes={[  
              <StreamContainer/>,
              <MessagesContainer/>
            ]}/>
        ]}/>
        
    )
  }
}
