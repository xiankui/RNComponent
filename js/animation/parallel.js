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

class ParallelExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fadeInOpacity: new Animated.Value(0),
			rotation: new Animated.Value(0),
			fontSize: new Animated.Value(0),
		};
	}

	startAni() {
		this.state.fadeInOpacity.setValue(0);
		this.state.rotation.setValue(0);
		this.state.fontSize.setValue(0);

		Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(prop => {
			return Animated.timing(this.state[prop], {
				toValue: 1,
				duration: 1000,
				easing: Easing.linear,
			});
		})).start();
	}

	componentDidMount() {
		this.startAni();
	}

	render() {
		return (
			<View style={styles.container}>
				<Nav navigator={this.props.navigator} />

				<View style={styles.content}>
					<Animated.View
					  style={{
					  	opacity: this.state.fadeInOpacity,
					  	transform: [{
					  		rotateZ: this.state.rotation.interpolate({
  		                        inputRange: [0,1],
  		                        outputRange: ['0deg', '360deg']
  		                    })
					  	}]
					  }}>
						<Animated.Text style={{
							color: '#333',
			                fontSize: this.state.fontSize.interpolate({
			                    inputRange: [0,1],
			                    outputRange: [12,26]
			                })
			            }}>我骑着七彩祥云出现了😈💨</Animated.Text>
					</Animated.View>

					<TouchableHighlight
					  style={{marginTop: 45}}
					  onPress={this.startAni.bind(this)}>
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
});

export default ParallelExample;