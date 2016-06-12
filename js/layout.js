import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavButton } from './component';

import RefreshControlExample from './refresh';
import AudioExample from './audio';
import ListViewSimpleExample from './listview';
import SwipeListViewExample from './swipelistview';
import ModalExample from './modal';
import PickerExample from './picker';
import AnimationExamples from './animation';


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

				<NavButton
				  navigator={navigator}
				  name='RefreshControlExample'
				  component={RefreshControlExample}>
				    RefreshControlExample
				</NavButton>

				<NavButton
				  navigator={navigator}
				  name='AudioExample'
				  component={AudioExample}>
				    AudioExample
				</NavButton>

				<NavButton
				  navigator={navigator}
				  name='ListViewSimpleExample'
				  component={ListViewSimpleExample}>
				    ListViewSimpleExample
				</NavButton>

				<NavButton
				  navigator={navigator}
				  name='SwipeListViewExample'
				  component={SwipeListViewExample}>
				    SwipeListViewExample
				</NavButton>

				<NavButton
				  navigator={navigator}
				  name='ModalExample'
				  component={ModalExample}>
				    ModalExample
				</NavButton>

				<NavButton
				  navigator={navigator}
				  name='PickerExample'
				  component={PickerExample}>
				    PickerExample
				</NavButton>

				<NavButton
				  navigator={navigator}
				  name='AnimationExamples'
				  component={AnimationExamples}>
				    AnimationExamples
				</NavButton>

			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});

export default Layout;