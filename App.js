import React from 'react'
import { View, Text,TouchableOpacity,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Tabs from './screens/tabs/tabs'
import singleChat from './screens/chats/singleChat';
import ChatHeader from './screens/chats/chatHeader';
import { Provider } from 'react-redux'
import store from './redux/Store';
import Redux from './screens/status/redux'


const Stack = createNativeStackNavigator();




function About(){
  return (
    <View>
      <Text>
        About
      </Text>
    </View>
  )
}

const App = () => {
  return (
    
     <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'WhatsApp'}>
      <Stack.Screen name='Home' component={Tabs} options={{
        title:"WhatsApp",
        headerRight: ({  tintColor }) => {
          return (
            
            <View style={{ flexDirection:'row' }}>
              <TouchableOpacity>
              
                <Icon name='search' size={16} color="#ffff" onPress={() => console.log('pressed')} style={{ paddingHorizontal:8 }}/>
                </TouchableOpacity>
              <TouchableOpacity>
              <Icon2 name='more-vert'  size={16} color="#ffff" onPress={() => console.log('pressed')}/>
              </TouchableOpacity>
            </View>
            
          )
        },
        headerStyle:{
          backgroundColor: '#075e54',
        },
        headerTitleStyle:{
          color:'white'
        },
      }}/>
      <Stack.Screen name='About' component={About}/>
      <Stack.Screen name='singlechat' component={singleChat} initialParams={{
        userprofile: require('./assets/images/img1.jpg'),
        names: 'User',
        last_seen:'',
      }} 
      options={({ navigation,route }) => ({
        headerTitle: route.params.names,
        headerStyle:{
          backgroundColor:'#075e54'
        },
        headerTitleStyle:{
          color:'white'
        },
        header:() => ( <ChatHeader route={route} navigation={navigation}/>)
      })}/>
      <Stack.Screen name='redux' component={Redux}/>
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
export default App;
