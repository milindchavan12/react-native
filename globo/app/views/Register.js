import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export class Register extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmpassword: ''
        };
    }

    cancellation =() =>{
        Alert.alert("Cancelled Registration");
        this.props.navigation.navigate("HomeRT");
    }

    registerAccount = () =>{
        if(!this.state.userName){
            Alert.alert("UserName can not blank");
        }
        else if(this.state.password !== this.state.confirmpassword){
            Alert.alert("Password do not match");
        }
        else{
            AsyncStorage.getItem(this.state.userName, (err, result) => {
                if(result !== null){
                    Alert.alert(`${this.state.userName} already exists`);
                }
                else{
                    AsyncStorage.setItem(this.state.userName, this.state.password, (err, result) => {
                        Alert.alert(`${this.state.userName} registered successfully!`);
                        this.props.navigation.navigate("HomeRT");
                    })
                }
            });
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>

            <TextInput
              style={styles.inputs}
              onChangeText={text => this.setState({ userName: text })}
              value={this.state.userName}
            />
            <Text>User Name</Text>

            <TextInput
              style={styles.inputs}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />
            <Text>Password</Text>

            <TextInput
              style={styles.inputs}
              onChangeText={text => this.setState({ confirmpassword: text })}
              value={this.state.confirmpassword}
            />
            <Text>Confirm Password</Text>

            <TouchableHighlight
              onPress={this.registerAccount}
              underlayColor="#31e981">
              <Text style={styles.buttons}>Register</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.cancellation}
              underlayColor="#31e981">
              <Text style={styles.buttons}>Cancel</Text>
            </TouchableHighlight>
          </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '40%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInputs: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});