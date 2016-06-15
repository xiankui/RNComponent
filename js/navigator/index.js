import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';




class NavigatorExample extends Component {
	constructor(props) {
		super(props);
	}

	renderButton(text) {
		return (
			<TouchableOpacity
			  key={text}
			  style={styles.button}
			  onPress={() => this._navigate()}>
			    <Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		)
	}

	_navigate() {

	}

	render() {
		let btns = ['button1', 'button2'].map(text => {
			return this.renderButton(text);
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