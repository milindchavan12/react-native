import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export class Hero extends React.Component {
  render() {
    return (
        <Image
            style={styles.heroImage}
            source={require('./img/lead7.jpg')}>
        </Image>
    );
  }
}

let styles = StyleSheet.create({
    heroImage: {
        flex: 3,
        width: undefined,
        height: undefined
    }
});