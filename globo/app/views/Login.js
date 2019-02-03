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

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    cancellation =() =>{
        Alert.alert("Cancelled Login");
        this.props.navigation.navigate("HomeRT");
    }

    loginUser = () =>{
        if(!this.state.userName){
            Alert.alert("UserName can not blank");
        }
        else if(!this.state.password){
            Alert.alert("Password can not be blank");
        }
        else{
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if(result !== 'none'){
                    Alert.alert(`${this.state.userName} already logged in`);
                    this.props.navigation.navigate("HomeRT");
                }
                else{
                    AsyncStorage.getItem(this.state.userName, (err, result) => {

                        if(result !== null){
                            if(result !== this.state.password) {
                                 Alert.alert('Password is incorrect');
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn', this.state.userName, (err, result) => {
                                    Alert.alert(`${this.state.userName} logged in successfully!`);
                                    this.props.navigation.navigate("HomeRT");
                                })
                            }
                        }
                        else{
                            Alert.alert('No User Found');
                        }
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

            <TouchableHighlight
              onPress={this.loginUser}
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