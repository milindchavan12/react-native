import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { StackNavigator } from 'react-navigation';

import { Video } from './app/views/Video.js';
import { VideoDetails } from './app/views/VideoDetails.js';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';

const MyRoutes = StackNavigator({
  HomeRT : {
    screen : Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetails
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  }
},
{
  initialRouteName: 'HomeRT'
}
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes></MyRoutes>
    );
  }
}

