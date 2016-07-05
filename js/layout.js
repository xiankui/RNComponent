/**
 * @understand flexbox
 * @source http://moduscreate.com/react-native-layout-system/
 **/

'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.mainContainer}>
			
				<View style={styles.toolbar}>
	                <Text style={styles.toolbarButton}>Add</Text>
	                <Text style={styles.toolbarTitle}>This is the title</Text>
	                <Text style={styles.toolbarButton}>Like</Text>
	            </View>

	            <View style={styles.content}>           
                    <Text>This is the content</Text>
                </View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
        paddingTop: 64,
	},
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },
    content: {
    	backgroundColor: '#ebeef0',
    	flex: 1,
    }
});

export default Layout;