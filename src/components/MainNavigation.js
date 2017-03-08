import React, { Component, PropTypes } from 'react'
import { ScrollView, Dimensions, View, StyleSheet, Text } from 'react-native';
import Header from './Header'

const window = Dimensions.get('window');

export default class MainNavigation extends Component{
  state = { currentTab: 1 }

  static propTypes = {
    routes: PropTypes.array,
    horizontal: PropTypes.bool,
  }

  static defaultProps = {
    routes: [],
    horizontal: true,
  }

  constructor(props) {
    super(props);
    this._scrollView = null;
  }

  componentDidMount() {
    if (this.props.horizontal) {
      const offset = window.width *  this.state.currentTab;
      this._scrollView.scrollTo({ x: offset, animated: false });
    } else {
      const offset = window.height * this.state.currentTab;
      this._scrollView.scrollTo({ y: offset, animated: false });
    }
  }

  renderScreens() {
    const { horizontal, routes } = this.props;
    const itemStyle = horizontal ? styles.item : styles.verticalItem;

    return this.props.routes.map((route, index) => {
      return (
        <View key={index} style={itemStyle}>
          <route.component />
        </View>
      );
    });
  }

  handleScroll(e) {
    this.setState({ currentTab: e.nativeEvent.contentOffset.x / window.width })
  }

  render() {
    const { horizontal } = this.props;
    const scrollViewStyle = horizontal ? styles.scrollView : styles.scrollViewVertical;
    const headerOffset = this.state.currentTab < 1 ? ((1 - this.state.currentTab) * 100) + '%' : 0
    return (
      <View style={styles.container}>
        <Header currentTab={this.state.currentTab} offset={{ left: headerOffset }}/>
        <ScrollView
          ref={(c) => this._scrollView = c}
          horizontal={horizontal}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={scrollViewStyle}
          scrollEventThrottle={32}
          bounces={false}
          onScroll={this.handleScroll.bind(this)}
          directionalLockEnabled={true}
        >
          {this.renderScreens()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: 'row',
  },
  scrollViewVertical: {
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    width: window.width,
  },
  verticalItem: {
    flex: 1,
    height: window.height,
    width: window.width,
  },
});
