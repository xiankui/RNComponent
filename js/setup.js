
/**
 * @source https://medium.com/@dabit3/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.y09ugf2wf
 * @source http://blog.paracode.com/2016/01/05/routing-and-navigation-in-react-native/
 * @source http://www.jianshu.com/p/91fa0f34895e
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Navigator,
  StyleSheet,
} from 'react-native';

import Index from './index';

class Setup extends Component {
	constructor(props) {
		super(props);

		this.navigatorInit = true;
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

		if (route.type === 'PushFromRight') {
			return Navigator.SceneConfigs.PushFromRight;
		}

		if (route.type === 'FloatFromRight') {
			return Navigator.SceneConfigs.FloatFromRight;
		}


		if (route.type === 'FloatFromBottom') {
		  return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
		}

		if (route.type === 'HorizontalSwipeJumpNoGestures') {
	        return {
				...Navigator.SceneConfigs.HorizontalSwipeJump,
				gestures: {
			      jumpBack: {},
			      jumpForward: {},
				}
			}
		}

		if (route.type === 'HorizontalSwipeJumpFromRight') {
			return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
		}

        return Navigator.SceneConfigs.HorizontalSwipeJump;
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

	/**
	 * 控制导航栏的功能和样式
	 */
	renderRouteMapper() {
		// 导航栏的Mapper
		var NavigationBarRouteMapper = {
		  // 左键
		  LeftButton(route, navigator, index, navState) {
		    // ...
		    if (index === 0) {
		    	return null;
		    }

		    return (
	            <View style={styles.navContainer}>
	              <TouchableOpacity
	                underlayColor='transparent'
	                onPress={() => {if (index > 0) {navigator.pop()}}}>
	                <Text style={styles.leftNavButtonText}>
	                  后退
	                </Text>
	              </TouchableOpacity>
	            </View>
	        );

		  },
		  // 右键
		  RightButton(route, navigator, index, navState) {
		    // ...
		    if (route.noPress) {
		    	return (
	    	        <View style={styles.navContainer}>
	    	          <TouchableOpacity
	    	            onPress={() => route.noPress()}>
	    	            <Text style={styles.rightNavButtonText}>
	    	              {route.rightText || '右键'}
	    	            </Text>
	    	          </TouchableOpacity>
	    	        </View>
	    	    );
		    } else {
		    	return null;
		    }
		  },
		  // 标题
		  Title(route, navigator, index, navState) {
		  	console.log('route ', route)
		  	console.log('navigator ', navigator)
		  	console.log('index ', index)
		  	console.log('navState ', navState)


		    if (route.title) {
		    	return (
		    		<View style={styles.navContainer}>
	    		        <Text style={styles.title}>
	    		          {route.title || 'title'}
	    		        </Text>
	    		    </View>
		    	)
		    } else {
		    	return null;
		    }
		  }
		};

		return NavigationBarRouteMapper;
	}

	render() {
		return (
			<Navigator
			  initialRoute={{name: 'Index', component: Index, title: '首页'}}
	  		  configureScene={this.configureScene}
			  renderScene={this.renderScene}
			  
			/>
		)
	}
}

const styles = StyleSheet.create({
  // 导航栏
  _navContainer: {
  	// height: 64,
  	backgroundColor: '#ff0',
  },
  navContainer: {
    backgroundColor: '#aaa',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  // 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    
  }
})


export default Setup;