# React Native

React Native generate a Native app from JavaScript unlike other Hybrid App development platform like Cordova and PhoneGap.

### Advantages of React Native:
- Performance on par with Native
- Easy to learn and quicker time to Market.
- Shared codebase for iOS and Android.
- Solid Community for plugin and Services.
- Easy to Submit app on App Stores.

## Installing React Native
- Install node and watchman with Homebrew

`brew install node`

`brew install watchman`

- And then install React Native CLI with npm

`npm install -g react-native-cli`

- Install React Native App

`npm i -g create-react-native-app`

- Then Create react-native app

`create-react-native-app globo`

### Install React Native DevTools
`npm install -g react-devtools`

## UI Components
### View
View component is basic container that holds other components, and can be child component other component.

### Props
Most components can be customized when they are created, with different parameters. These creation parameters are called props.

### State
There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

## Navigation
There is no in build navigation in React Native, to install the navigation from npm:

`npm install --save react-navigation@1.5.11`

## Install Expo Cli for StandAlone build
`npm install -g exp`

### To generate Android build of the project:
`exp build:android`

### To generate iOS build of the project:
`exp build:ios`
