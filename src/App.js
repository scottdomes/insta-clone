import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainNavigation from './components/MainNavigation'
import { StreamContainer, MessagesContainer, CameraContainer } from './containers'

export default class App extends Component{
  render() {
    return (
      <MainNavigation 
        routes={[
          {  component: CameraContainer },
          {  component: StreamContainer },
          {  component: MessagesContainer }
        ]}/>
    )
  }
}
