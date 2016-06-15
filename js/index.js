import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavButton } from './component';

import Layout from './layout';
import NavigatorExample from './navigator';
import RefreshControlExample from './refresh';
import AudioExample from './audio';
import ListViewSimpleExample from './listview';
import SwipeListViewExample from './swipelistview';
import ModalExample from './modal';
import PickerExample from './picker';
import AnimationExamples from './animation';

var components = [
	Layout,
	NavigatorExample,
	RefreshControlExample,
	AudioExample,
	ListViewSimpleExample,
	SwipeListViewExample,
	ModalExample,
	PickerExample,
	AnimationExamples,
];


class Index extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { navigator } = this.props;

		let navs = components.map(component => {
			return (
				<NavButton
				  key={component.name}
				  navigator={navigator}
				  name={component.name}
				  component={component}>
				    {component.name}
				</NavButton>
			)
		})

		return (
			<ScrollView style={styles.container}>

				{navs}

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

export default Index;