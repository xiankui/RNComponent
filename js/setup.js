import React, { Component } from 'react';
import {
  View,
  Navigator,
} from 'react-native';

import Index from './index';

class Setup extends Component {
	constructor(props) {
		super(props);
	}

	/**
	* 配置场景动画
	* @param route 路由
	* @param routeStack 路由栈
	* @returns {*} 动画
	*/
	configureScene(route, routeStack) {
		console.log('configureScene route ', route)
		console.log('configureScene routeStack ', routeStack)


		if (route.type == 'Bottom') {
		  return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
		}
		
        return {
			...Navigator.SceneConfigs.HorizontalSwipeJump,
			gestures: {
		      jumpBack: {},
		      jumpForward: {},
			}
		}
	}

	/**
	* 使用动态页面加载
	* @param route 路由
	* @param navigator 导航器
	* @returns {XML} 页面
	*/
	renderScene(route, navigator) {

		return <route.component navigator={navigator}  {...route.params} />;
	}

	render() {
		return (
			<Navigator
			  initialRoute={{name: 'Index', component: Index}}
	  		  configureScene={this.configureScene}
			  renderScene={this.renderScene}
			/>
		)
	}
}

export default Setup;