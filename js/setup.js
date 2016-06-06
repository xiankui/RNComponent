import React, { Component } from 'react';
import {
  View,
  Navigator,
} from 'react-native';

import Layout from './layout';

class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navigator
			  initialRoute={{name: 'layout', component: Layout}}
			  configureScene={() => {
			      return Navigator.SceneConfigs.PushFromRight;
			  }}
			  renderScene={(route, navigator) => {
			  	let Component = route.component;
			  	return <Component {...route.params} navigator={navigator} />
			  }}
			/>
		)
	}
}

export default Navigation;