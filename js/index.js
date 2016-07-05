
'use strict';

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavButton } from './component';

// import Layout from './layout';
// import NavigatorExample from './navigator';
// import RefreshControlExample from './refresh';
// import AudioExample from './audio';
// import ListViewSimpleExample from './listview';
// import SwipeListViewExample from './swipelistview';
// import ModalExample from './modal';
// import PickerExample from './picker';
// import AnimationExamples from './animation';
// import WebViewExample from './webview';
// import TextInputExample from './textinput';
import LoadingExample from './loading';

var components = [
	// Layout,
	// NavigatorExample,
	// RefreshControlExample,
	// AudioExample,
	// ListViewSimpleExample,
	// SwipeListViewExample,
	// ModalExample,
	// PickerExample,
	// AnimationExamples,
	// WebViewExample,
	// TextInputExample,
	LoadingExample,
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
				  component={component}
				  title={component.name}>
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
		paddingTop: 64,
		backgroundColor: '#eee',
	}
});

export default Index;