import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class venligboerneapp extends Component {
  render() {
    var forSaleItems = [];
    for (var i = 0; i < 100; i++)
      forSaleItems.push(
        <Text style={styles.forSale} key={i}>Item {i}</Text>
      );

    return (
      <ScrollableTabView style={styles.tabBar}>
        <View tabLabel='Welcome'>
          <Text style={styles.welcome}>
            Welcome to the Venligboerne App!
          </Text>
          <Text style={styles.instructions}>
            There is some tabbed navigation up above, and each of these panes can scroll individually. If you try it on a device I think you will find it's nice to navigate.
          </Text>
          <Text style={styles.instructions}>
            In this version I also merged the index code for iOS and Android into one place (main.js)
          </Text>
        </View>
        <ScrollView tabLabel='Free'>
          {/* If this gets very long, and there are
          performance issues, use FlatList instead */}
          {forSaleItems}
        </ScrollView>
        <View tabLabel='Map'>
          <Text>Here we can add a map of nearby friendly neighbors, etc</Text>
        </View>
        <View tabLabel='Settings'></View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  forSale: {
    height: 40,
    paddingLeft: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('venligboerneapp', () => venligboerneapp);
