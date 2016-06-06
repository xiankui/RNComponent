import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RefreshControlExample from './refresh';
import AudioExample from './audio';

class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { navigator } = this.props;

		return (
			<ScrollView style={styles.container}>
				<TouchableOpacity
				  style={styles.button}
				  onPress={() => {
				  	navigator.push({
				  		name: 'refresh',
				  		component: RefreshControlExample,
				  	})
				  }}>
				  	<Text style={styles.text}>RefreshControlExample</Text>
				  </TouchableOpacity>

				  <TouchableOpacity
				  style={styles.button}
				  onPress={() => {
				  	navigator.push({
				  		name: 'refresh',
				  		component: AudioExample,
				  	})
				  }}>
				  	<Text style={styles.text}>AudioExample</Text>
				  </TouchableOpacity>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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

export default Layout;