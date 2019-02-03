import React from "react";
import { StyleSheet, Text, View, Platform, Image, AsyncStorage, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class Header extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = { 
            isLoggedIn : false,
            loggedUser : false 
        };
    }

    toggleUser = ()=>{
        if(this.state.isLoggedIn){
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState = {
                    isLoggedIn: false,
                    loggedUser: false
                };
                Alert.alert('User logged out');
            });
        }
        else{
            Alert.alert('Please login');
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if(result==='none'){
                console.log('NONE');
            }
            else if(result===null){
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('User set to NONE');
                });
            }
            else{
                this.setState = {
                    isLoggedIn: true,
                    loggedUser: result
                };
            }
        });
    }

    render(){
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/logo.png')}>
                </Image>
                <Text 
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    headText: {
        textAlign : 'right',
        color: '#ffffff',
        fontSize: 20,
        flex:1
    },
    headStyle:{
        paddingTop:30,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Platform.OS === 'android' ? '#31e981':'#000000',
        flex:1,
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:'#000000'
    },
    logoStyle:{
        flex:0.3,
        width: undefined,
        height: undefined
    }
});