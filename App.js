import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

class App extends Component {

  componentWillMount = () => {
    this.animatedWidth = new Animated.Value(50),
      this.animatedHeight = new Animated.Value(100)
  }

  animatedBox = () => {
    Animated.timing(this.animatedWidth, {
      toValue: 200,
      duration: 1000
    }).start()

    Animated.timing(this.animatedHeight, {
      toValue: 1000,
      duration: 500
    }).start()
  }

  render() {
    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.appText}>Animations in React Native</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={this.animatedBox}>
            <Animated.View style={[styles.animation, animatedStyle]}></Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    height: '9%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appText: {
    color: 'snow',
    fontSize: 21,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  animation: {
    backgroundColor: '#2980b9',
    width: 100,
    height: 50
  }
})