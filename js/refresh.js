'use strict';

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Nav } from './component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
});

class Row extends Component {
  _onClick() {
    this.props.onClick(this.props.data);
  }

  render() {
    return (
     <TouchableWithoutFeedback onPress={this._onClick.bind(this)} >
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class RefreshControlExample extends Component {
  // statics: {
  //   title: '<RefreshControl>',
  //   description: 'Adds pull-to-refresh support to a scrollview.'
  // },

  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row' + i, clicks: 0})),
    };
  }

  _onClick(row) {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  }

  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick.bind(this, row)}/>;
    });

    return (
      <View style={styles.container}>
        <Nav navigator={this.props.navigator} />
        <ScrollView
          style={styles.scrollview}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor="#ff0000"
              title="Loading..."
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }>
          {rows}
        </ScrollView>
      </View>
    );
  }

  _onRefresh() {
    let self = this;

    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: 'Loaded row' + (+self.state.loaded + i),
        clicks: 0,
      }))
      .concat(self.state.rowData);

      self.setState({
        loaded: self.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 2000);
  }
}

export default RefreshControlExample;