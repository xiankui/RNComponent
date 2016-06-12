import React, { Component } from 'react';
import {
	View,
	Text,
	Animated,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

import { Nav } from '../component';

class BounceExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bounceValue: new Animated.Value(0),
		}
	}

	startBounce() {
		this.state.bounceValue.setValue(1);
		
		Animated.spring(this.state.bounceValue, {
			toValue: 1.5,
			friction: 1,
		}).start();
	}

	componentDidMount() {
		this.startBounce();
	}

	render() {
		return (
			<View style={styles.container}>
				<Nav navigator={this.props.navigator} />
				<View style={styles.content}>
					<Animated.Image
					  source={require('../../assets/starsky.jpg')}
					  style={{
				          width: 100,
				          height: 100,
				          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
				            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
				          ]
				        }}>
					</Animated.Image>

					<TouchableHighlight
					  style={{marginTop: 45}}
					  onPress={this.startBounce.bind(this)}>
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

export default BounceExample;