import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RefreshControlExample from './refresh';
import AudioExample from './audio';
import ListViewSimpleExample from './listview';
import SwipeListViewExample from './swipelistview';
import ModalExample from './modal';
import PickerExample from './picker';


/**
 * @props name
 * @props component
 * @props children
 **/
class Button extends Component {
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
			  	})
			  }}>
			  	<Text style={styles.text}>{children}</Text>
			</TouchableOpacity>
		)
	}
}

class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { navigator } = this.props;

		return (
			<ScrollView style={styles.container}>

				<Button
				  navigator={navigator}
				  name='RefreshControlExample'
				  component={RefreshControlExample}>
				    RefreshControlExample
				</Button>

				<Button
				  navigator={navigator}
				  name='AudioExample'
				  component={AudioExample}>
				    AudioExample
				</Button>

				<Button
				  navigator={navigator}
				  name='ListViewSimpleExample'
				  component={ListViewSimpleExample}>
				    ListViewSimpleExample
				</Button>

				<Button
				  navigator={navigator}
				  name='SwipeListViewExample'
				  component={SwipeListViewExample}>
				    SwipeListViewExample
				</Button>

				<Button
				  navigator={navigator}
				  name='ModalExample'
				  component={ModalExample}>
				    ModalExample
				</Button>

				<Button
				  navigator={navigator}
				  name='PickerExample'
				  component={PickerExample}>
				    PickerExample
				</Button>

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