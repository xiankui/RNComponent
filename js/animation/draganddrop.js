
/**
 * http://moduscreate.com/animated_drag_and_drop_with_react_native/
 **/

'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Dimensions
} from 'react-native';

import { Nav } from '../component';


class DragAndDrop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pan: new Animated.ValueXY(),
			dropZoneValues: null,
			showDraggable: true,
		}

		this.panResponder = PanResponder.create({    //Step 2
	        onStartShouldSetPanResponder : () => true,
	        onPanResponderMove           : Animated.event([null,{ //Step 3
	            dx : this.state.pan.x,
	            dy : this.state.pan.y
	        }]),
	        onPanResponderRelease        : (e, gesture) => {
	        	if (this.isDropZone(gesture)) {
	        		this.setState({
	        			showDraggable: false,
	        		});
	        	} else {
	        		Animated.spring(            //Step 1
			            this.state.pan,         //Step 2
			            {toValue:{x:0,y:0}}     //Step 3
			        ).start();
	        	}
	        } //Step 4
	    });
	}

	isDropZone(gesture){     //Step 2
	    var dz = this.state.dropZoneValues;
	    
	    console.log('gesture.moveX, gesture.moveY', {moveX: gesture.moveX, moveY: gesture.moveY});

	    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
	}

	setDropZoneVales(event) {
    	this.setState({
    		dropZoneValues: event.nativeEvent.layout,
    	});
    	
    	setTimeout(() => {
    		console.log('dropZoneValues', this.state.dropZoneValues)
    	}, 10)
    	
    }

	renderDraggable(){
		if (this.state.showDraggable) {
	        return (
	            <View style={styles.draggableContainer}>
	                <Animated.View 
	                  {...this.panResponder.panHandlers}
	                  style={[this.state.pan.getLayout(), styles.circle]}>
	                    <Text style={styles.text}>Drag me!</Text>
	                </Animated.View>
	            </View>
	        );
    	} else {
    		return null;
    	}
    }

	render() {
		return (
			<View style={styles.mainContainer}>

				<Nav navigator={this.props.navigator} />

                <View 
                  onLayout={this.setDropZoneVales.bind(this)}
                  style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>

                {this.renderDraggable()}
            </View>
		)
	}
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});

export default DragAndDrop;