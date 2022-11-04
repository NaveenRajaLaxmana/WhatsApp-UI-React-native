import React from 'react';
import { useWindowDimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StatusTab from './StatusTab';
import ChatsTab from './ChatsTab';
import Calls from './Calls';
import { color } from 'react-native-reanimated';




const Tab = createMaterialTopTabNavigator();

const Tabs = ({ navigation }) => {
    const { height,width } =useWindowDimensions();
  return (
    <Tab.Navigator initialRouteName="Chats" screenOptions={{
        tabBarStyle:{ 
            backgroundColor: '#075e54',
        },
        tabBarLabelStyle:{
            color:'white',
           fontSize: 14,
           fontWeight:"500"
        },
        tabBarIndicatorStyle:{
            height:3,
            backgroundColor:'white'
        }
    }}>
    <Tab.Screen name="Chats" component={ChatsTab} />
    <Tab.Screen name="Status" component={StatusTab} />
    <Tab.Screen name='Calls' component={Calls}/>
  </Tab.Navigator>
  );
};

export default Tabs;
