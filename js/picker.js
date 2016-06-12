'use strict';

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Picker,
} from 'react-native';

import { Nav } from './component';

//
import ComponentPicker from 'react-native-picker';

const PickerItem = Picker.Item;

class MyPicker extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let items = this.props.data.map(function(item, i) {
			return (
				<PickerItem 
				  key={item}
				  label={item.label}
				  value={item.value} />
			)
		});

		return (
			<Picker 
			  selectedValue={this.props.value}
			  onValueChange={(value) => this.props.changeSelect(value)}>
				{items}
			</Picker>
		)
	}
}

class PickerExample extends Component {
	constructor(props) {
		super(props);

		this.state= {
			sexValue: '女',
			selectedValue: 3,
		}
	}

	changeSexSelect(sex) {
		this.setState({
			sexValue: sex,
		})
	}

	_picker(selectedValue) {
		this.setState({
			selectedValue: selectedValue,
		})
	}

	_onPressHandle() {
		this.picker.toggle();
	}

	render() {
		return (
			<View style={styles.container}>
				<Nav navigator={this.props.navigator} />
				<View>
					<Text>Native Picker: {this.state.sexValue}</Text>
				</View>
				<MyPicker
				  data = { [{label: '男', value: '男'}, {label: '女', value: '女'}] }
				  value={this.state.sexValue} 
				  changeSelect={this.changeSexSelect.bind(this)} />

				<TouchableHighlight
				  onPress={this._onPressHandle.bind(this)}>
					<Text>show picker</Text>
				</TouchableHighlight>

				<View>
					<Text>react-native-picker: {this.state.selectedValue}</Text>
				</View>

				<ComponentPicker
					ref={picker => this.picker = picker}
			        style={{
			            height: 300
			        }}
			        showDuration={300}
			        showMask={true}
			        pickerData={[1, 2, 3, 4]} //picker`s value List
			        selectedValue={this.state.selectedValue} //default to be selected value
			        onPickerDone={this._picker.bind(this)} //when confirm your choice
			    />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
});


export default PickerExample;