import React from 'react';
import { View,Image,Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Feather'

const ChatHeader = ({ navigation,route }) => {
    return (
        <View style={{ backgroundColor: '#075e54',flexDirection:'row' }}>
            <Icon name='arrow-back' size={20} color={'white'} style={{ position:'relative',top:20,marginLeft:10 }} onPress={() => navigation.goBack()}/>
        <View style={{ marginLeft:15, }}>
      <Image source={route.params.userprofile} width={5} height={5} resizeMode='cover' style={{marginVertical:8,borderRadius:50,overflow:'hidden',height:40,width:40 }}/>
    </View>
    <View style={{ marginLeft:10,alignItems:'center',justifyContent:'center' }}>
      <Text style={{ textTransform:'capitalize',color:'white',fontSize:15,fontWeight:"900" }}>{route.params.names}</Text>
    </View>
    <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute',right:5,top:20}}>
      <Icon name='call' size={20} color={"white"} style={{ marginRight:10 }} />
      <Icon name='video-call' size={20} color={"white"} style={{ marginRight:10 }}/>
      <Icon2 name='more-vertical' size={20} color={"white"} style={{ marginRight:10 }}/>
    </View>
    </View>
      )
};

export default ChatHeader;
