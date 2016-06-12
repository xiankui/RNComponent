/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule AnExChained
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class AnExChained extends Component {

  constructor(props: Object) {
    super(props);
    this.state = {
      stickers: [new Animated.ValueXY()],                    // 1 leader
    };
    var stickerConfig = {tension: 2, friction: 3};           // soft spring
    for (var i = 0; i < 4; i++) {                            // 4 followers
      var sticker = new Animated.ValueXY();
      Animated.spring(sticker, {
        ...stickerConfig,
        toValue: this.state.stickers[i],               // Animated toValue's are tracked
      }).start();
      this.state.stickers.push(sticker);               // push on the followers
    }
    var releaseChain = (e, gestureState) => {
      this.state.stickers[0].flattenOffset();          // merges offset into value and resets
      Animated.sequence([                              // spring to start after decay finishes
        Animated.decay(this.state.stickers[0], {       // coast to a stop
          velocity: {x: gestureState.vx, y: gestureState.vy},
          deceleration: 0.997,
        }),
        Animated.spring(this.state.stickers[0], {
          toValue: {x: 0, y: 0}                        // return to start
        }),
      ]).start();
    };
    this.state.chainResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.stickers[0].stopAnimation((value) => {
          this.state.stickers[0].setOffset(value);           // start where sticker animated to
          this.state.stickers[0].setValue({x: 0, y: 0});     // avoid flicker before next event
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.state.stickers[0].x, dy: this.state.stickers[0].y}] // map gesture to leader
      ),
      onPanResponderRelease: releaseChain,
      onPanResponderTerminate: releaseChain,
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.chained}>
        {this.state.stickers.map((_, i) => {
          var j = this.state.stickers.length - i - 1; // reverse so leader is on top
          var handlers = (j === 0) ? this.state.chainResponder.panHandlers : {};

          return (
            <Animated.Image
              {...handlers}
              key={i}
              source={CHAIN_IMGS[j]}
              style={[styles.sticker, {
                transform: this.state.stickers[j].getTranslateTransform(), // simple conversion
              }]}
            />
          );
        })}
      </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chained: {
    alignSelf: 'flex-end',
    top: -160,
    right: 126
  },
  sticker: {
    position: 'absolute',
    height: 120,
    width: 120,
    backgroundColor: 'transparent',
  },
});

var CHAIN_IMGS = [
  require('../../assets/chain_imgs_0.png'),
  require('../../assets/chain_imgs_1.png'),
  require('../../assets/chain_imgs_2.png'),
  require('../../assets/chain_imgs_3.png'),
  require('../../assets/chain_imgs_4.png'),
];

export default AnExChained;