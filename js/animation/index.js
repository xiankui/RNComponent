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
import Flix from './tinder';

class AnimationExamples extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { navigator } = this.props;

		return (
			<View style={styles.container}>
				<Nav navigator={navigator} />
				<View style={styles.content}>
					<NavButton
					  navigator={navigator}
					  name='TimingExample'
					  component={TimingExample}>
					    TimingExample
					</NavButton>

					<NavButton
					  navigator={navigator}
					  name='BounceExample'
					  component={BounceExample}>
					    BounceExample
					</NavButton>

					<NavButton
					  navigator={navigator}
					  name='AnExChained'
					  component={AnExChained}>
					    AnExChained
					</NavButton>

					<NavButton
					  navigator={navigator}
					  name='ParallelExample'
					  component={ParallelExample}>
					    ParallelExample
					</NavButton>

					<NavButton
					  navigator={navigator}
					  name='ControlExample'
					  component={ControlExample}>
					    ControlExample
					</NavButton>

					<NavButton
					  navigator={navigator}
					  name='Flix'
					  component={Flix}>
					    Flix
					</NavButton>
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