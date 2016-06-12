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

class ControlExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anim: [1,2,3].map(() => new Animated.Value(0)),  // 初始化3个值
		}
	}
	 
	startAnim() {
		// this.state.anim.map((item) => item.setValue(0));

	    var timing = Animated.timing;
	    Animated.sequence([
	        Animated.stagger(200, this.state.anim.map(left => {
	            return timing(left, {
	                toValue: 1,
	              });
	            }).concat(
	                this.state.anim.map(left => {
	                    return timing(left, {
	                        toValue: 0,
	                    });
	                })
	            )), // 三个view滚到右边再还原，每个动作间隔200ms
	            Animated.delay(400), // 延迟400ms，配合sequence使用
	            timing(this.state.anim[0], {
	                toValue: 1 
	            }),
	            timing(this.state.anim[1], {
	                toValue: -1
	            }),
	            timing(this.state.anim[2], {
	                toValue: 0.5
	            }),
	            Animated.delay(400),
	            Animated.parallel(this.state.anim.map((anim) => timing(anim, {
	                toValue: 0
	            }))) // 同时回到原位置
	        ]
	    ).start();
	}

	componentDidMount() {
		this.startAnim();
	}

	render() {
	    var views = this.state.anim.map(function(value, i) {
	        return (
	            <Animated.View
	                key={i}
	                style={[styles.demo, styles['demo' + i], {
	                    left: value.interpolate({
	                        inputRange: [0,1],
	                        outputRange: [0,200]
	                    })
	                }]}>
	                <Text style={styles.text}>我是第{i + 1}个View</Text>
	 
	            </Animated.View>
	        );
	    });
	    return <View style={styles.container}>
	    			<Nav navigator={this.props.navigator} />
	    			<View style={styles.content}>
	    				<Text>sequence/delay/stagger/parallel演示</Text>
	    				{views}

		    			<TouchableHighlight
						  style={{marginTop: 45}}
						  onPress={this.startAnim.bind(this)}>
						  <Text>start animation</Text>
						</TouchableHighlight>
	    			</View>	               
	           </View>;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	demo: {
		marginTop: 25,
	},
	demo0: {
		backgroundColor: 'red',
	},
	demo1: {
		backgroundColor: 'green',
	},
	demo2: {
		backgroundColor: 'blue',
	},
	text: {
		fontSize: 14,
	}
});

export default ControlExample;