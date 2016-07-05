'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import LoadingContainer from 'react-native-loading-container';

export default class LoadingExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stories: {}
		};
	}

	renderBody() {
		return (
			<View style={styles.container}>
				<Text>hello loading</Text>
			</View>
		)
	}

	render() {
		return (
			<LoadingContainer
		        onLoadStartAsync={this._loadInitialDataAsync.bind(this)}
		        onReadyAsync={this._onReadyAsync.bind(this)}>
		        { this.renderBody() }
		    </LoadingContainer>
		)
	}

	async _loadInitialDataAsync() {
	    let response = await fetchWithTimeout('https://www.reddit.com/r/reactnative.json');
	    // let response = await fetch('../mockdata/story.json');
	    return response.json();
	}

	async _onReadyAsync({data: {children: stories}}) {
	    return new Promise((resolve) => {
	      this.setState({stories}, resolve);
	    });
	}
}

function timeoutAsync(promise, ms) {
  return new Promise((resolve, reject) => {
    let _timer = setTimeout(() => {
      reject(new Error('API timeout'));
    }, ms);

    promise.then((result) => {
      clearTimeout(_timer);
      return resolve(result);
    }, reject);
  });
}

function fetchWithTimeout(url, options = {}, timeout = 3000) {
  return timeoutAsync(fetch(url, options), timeout);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: 64,
		alignItems: 'center',
	}
})