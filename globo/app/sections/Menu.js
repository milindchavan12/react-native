import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export class Menu extends React.Component {
  onPress = () => {
      Alert.alert('You tapped the button');
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=> this.props.navigate('LessonsRT')}>
                    <Text style={styles.buttonText}>Lessons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=> this.props.navigate('RegisterRT')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                    <Text style={styles.buttonText}>Blog</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=> this.props.navigate('ContactRT')}>
                    <Text style={styles.buttonText}>Contact</Text>
                </TouchableOpacity>
            </View>

             <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                    <Text style={styles.buttonText}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: '#ffffff'
    },
    buttonStyle :{
        backgroundColor: '#35605a',
        height:'50%',
        width:'50%',
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText :{
        color:'#ffffff',
        fontSize:18
    }
});