/**
 * source https://github.com/SpikeKing/WclNavigator/blob/master/navigator_uniform.js
 */
 
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import SecondPage from './secondpage';

var navigators = [{
	button: 'SecondPage default',
	component: SecondPage,
	scene: 'default',
	title: 'secondpage default'
}, {
	button: 'SecondPage from bottom',
	component: SecondPage,
	scene: 'FloatFromBottom',
	title: 'SecondPage FloatFromBottom'
}];


class NavigatorExample extends Component {
	constructor(props) {
		super(props);
	}

	renderButton(navInfo, i) {
		return (
			<TouchableOpacity
			  key={'navigator' + i}
			  style={styles.button}
			  onPress={() => this._navigate(navInfo)}>
			    <Text style={styles.text}>{navInfo.button}</Text>
			</TouchableOpacity>
		)
	}

	_navigate(navInfo) {
		this.props.navigator.push({
			name: navInfo.component.name,
			component: navInfo.component,
			type: navInfo.scene,
			title: navInfo.title,
		});
	}

	render() {
		let btns = navigators.map((navInfo, i) => {
			return this.renderButton(navInfo, i);
		});

		return (
			<View style={styles.container}>
				{btns}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 64,
	},
	button: {
		height: 44,
		backgroundColor: '#aaa',
		marginTop: 15,
		justifyContent: 'center',
	},
	text: {
		fontSize: 14,
		color: '#333',
		textAlign: 'center',
	}
})


export default NavigatorExample;