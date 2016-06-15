import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';

import { Nav, NavButton } from '../component';

import TimingExample from './timing';
import BounceExample from './bounce';
import AnExChained from './anexchained';
import ParallelExample from './parallel';
import ControlExample from './control';
import DragAndDrop from './draganddrop';
import Flix from './flix';
import LayoutAnimationExample from './layoutAnimation';

var components = [
	TimingExample,
	BounceExample,
	ParallelExample,
	ControlExample,
	DragAndDrop,
	Flix,
	LayoutAnimationExample,
];

class AnimationExamples extends Component {
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
			<View style={styles.container}>
				<Nav navigator={navigator} />
				<View style={styles.content}>
					{navs}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	},
})

export default AnimationExamples;