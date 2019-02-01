import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './../sections/Header.js';

export class Home extends React.Component {
  render() {
    return (
      <View>
        <Header message="Press to login"></Header>
        <Text>This is home components Line 1</Text>
        <Text>This is home components Line 2</Text>
        <Text>This is home components Line 3</Text>
      </View>
    );
  }
}