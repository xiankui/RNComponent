import React, { Component } from 'react';
import {
	View,
	Text,
	Animated,
	Easing,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

import { Nav } from '../component';

class TimingExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fadeInOpacity: new Animated.Value(0),
		}
	}

	startFadeIn() {
		this.state.fadeInOpacity.setValue(0);
		
		Animated.timing(this.state.fadeInOpacity, {
			toValue: 1,
			duration: 2500,
			easing: Easing.linear,
		}).start();
	}

	componentDidMount() {
		this.startFadeIn();
	}

	render() {
		return (
			<View style={styles.container}>
				<Nav navigator={this.props.navigator} />
				<View style={styles.content}>
					<Animated.View
					  style={{opacity: this.state.fadeInOpacity}}>
						<Text style={styles.text}>悄悄的，我出现了</Text>
					</Animated.View>

					<TouchableHighlight
					  style={{marginTop: 45}}
					  onPress={this.startFadeIn.bind(this)}>
					  <Text>start animation</Text>
					</TouchableHighlight>

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
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
	}
});

export default TimingExample;