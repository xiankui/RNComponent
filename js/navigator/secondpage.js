import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class SecondPage extends Component {
	constructor(props) {
		super(props);
	}

	renderButton(text) {
		return (
			<TouchableOpacity
			  key={text}
			  style={styles.button}
			  onPress={() => this.props.navigator.pop()}>
			    <Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderButton('back')}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 64,
		backgroundColor: 'lightblue',
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

export default SecondPage;