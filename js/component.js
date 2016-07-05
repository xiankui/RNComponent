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
				  style={styles.backbutton}
				  onPress={() => {
				  	navigator.pop();
				  }}>
				  	<Text style={styles.backtext}>返回</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

/**
 * @props name
 * @props component
 * @props children
 **/
export class NavButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { navigator, name, component, children, } = this.props;

		return (
			<TouchableOpacity
			  style={styles.button}
			  onPress={() => {
			  	navigator.push({
			  		name: name,
			  		component: component,
			  		title: name,
			  	})
			  }}>
			  	<Text style={styles.text}>{children}</Text>
			</TouchableOpacity>
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
	backbutton: {
		width: 100,
		height: 44,
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	backtext: {
		fontSize: 14,
		color: '#fff',
	},
	button: {
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#aaa',
		marginTop: 10,
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
		color: '#333',
	}
});