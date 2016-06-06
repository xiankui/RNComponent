import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {navigator} = this.props;

		return (
			<View style={styles.nav}>
				<TouchableOpacity
				  style={styles.button}
				  onPress={() => {
				  	navigator.pop();
				  }}>
				  	<Text style={styles.text}>返回</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	nav: {
		height: 44,
		backgroundColor: '#000',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	button: {
		width: 100,
		height: 44,
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	text: {
		fontSize: 14,
		color: '#fff',
	}
});