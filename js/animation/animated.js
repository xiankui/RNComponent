import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';

import { Nav } from '../component';

export default class AnimatedSpring extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bounceValue: new Animated.Value(0),
		};
	}

	startBounce() {
		this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
		Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
		  this.state.bounceValue,                 // 将`bounceValue`值动画化
		  {
		    toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
		    friction: 1,                          // Bouncier spring
		  }
		).start(); 
	}

	componentDidMount() {
	    this.startBounce();                              // 开始执行动画
	}

	render() {
		return (
			<View style={styles.container}>
				<Nav navigator={this.props.navigator} />
				<View style={styles.content}>
					<View style={styles.viewer}>
						<Animated.Image                         // 可选的基本组件类型: Image, Text, View
					        source={require('../../assets/starsky.jpg')}
					        style={{
					          width: 100,
					          height: 100,
					          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
					            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
					          ]
					        }}
					    />
					</View>

					<View style={styles.viewer}>
						<Animated.Image                         // 可选的基本组件类型: Image, Text, View
					        source={require('../../assets/starsky.jpg')}
					        style={{
					          width: 100,
					          height: 100,
					          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
					            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
					          ]
					        }}
					    />
					</View>


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
	viewer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})