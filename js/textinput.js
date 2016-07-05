'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

export default class TextInputExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		}
	}

	render() {
		return (
			<View style={{flex: 1,paddingTop: 64, backgroundColor: '#eee'}}>
				<Text>aa </Text>
				<TextInput 
				  style={{height: 44, fontSize: 16, backgroundColor: '#fff', color: '#333'}}
				  placeholder='添加备忘录，最多50个字'
				  keyboardType='default'
				  value={this.state.text}
				  onChangeText={text => this.setState({text})} />
			</View>
		)
	}
}