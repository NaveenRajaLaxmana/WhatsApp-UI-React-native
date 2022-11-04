import { template } from '@babel/core';
import React,{ useState,useEffect } from 'react';
import { Text,View,ScrollView,TextInput,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Chats from './chats';


const ChatBox = () => {
  const [message,setMessage] = useState('');
 

  useEffect(() => {

  },[message])
  return (
    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{ position:'absolute',bottom:10,width:"100%",flexDirection:'row' }}>
          <TextInput
        style={styles.input}
        onChangeText={text=>setMessage(text)}
        value={message}
        placeholder="Message"
        keyboardType="default"
      />
      <TouchableOpacity>
        <View style={styles.button}>
          {message.length>0 && <Icon name='send' size={18} color='white' style={styles.icon,{ left:16,top:15 }}/>}
          { message.length==0 && <Icon name='microphone' size={20} color='white' style={styles.icon,{ left:20,top:15 }}/>}
        </View>
      </TouchableOpacity>
          </View>
        </View>
  )
}

const singleChat = () => {
  const chat = [
    {
      id:1,
      isme:true,
      content:"how are u?"
    },
    {
      id:2,
      isme:false,
      content:"fine"
    },
    {
      id:3,
      isme:true,
      content:"saptiya"
    },
    {
      id:4,
      isme:false,
      content:"illa"
    },
    {
      id:5,
      isme:true,
      content:"how are u?"
    },
    {
      id:6,
      isme:false,
      content:"fine"
    },
    {
      id:7,
      isme:true,
      content:"saptiya"
    },
    {
      id:8,
      isme:false,
      content:"illa"
    },
    {
      id:9,
      isme:true,
      content:"saptiya"
    },
    {
      id:10,
      isme:false,
      content:"dshdasdasdasdl[aspdpasd;aspdsd[sd"
    },
    {
      id:11,
      isme:true,
      content:"saptiya"
    },
    {
      id:12,
      isme:false,
      content:"seeaea"
    },
    {
      id:13,
      isme:false,
      content:"dshdasdasdasdl[aspdpasd;aspdsd[sd"
    },
    {
      id:14,
      isme:true,
      content:"saptiya"
    },
    {
      id:15,
      isme:false,
      content:"seeaea"
    },
    {
      id:16,
      isme:true,
      content:"saptiya"
    },
    {
      id:17,
      isme:false,
      content:"sdfdf"
    },
    {
      id:18,
      isme:false,
      content:"dfdsf"
    },
    {
      id:19,
      isme:true,
      content:"paaru"
    },
    {
      id:20,
      isme:false,
      content:"welcome"
    },
    {
      id:21,
      isme:true,
      content:"paaru"
    },
    {
      id:22,
      isme:false,
      content:"im back"
    },
    {
      id:23,
      isme:true,
      content: `Execution optimizations have been disabled for 9 invalid unit(s) of work during this build to ensure correctness.Please consult deprecation warnings for more details.`
    },
    {
      id:24,
      isme:false,
      content:"fine"
    },
    {
      id:25,
      isme:true,
      content:"saptiya"
    },
    {
      id:26,
      isme:false,
      content:"illa"
    },
    {
      id:27,
      isme:true,
      content:"how are u?"
    },
  ]

  return (
    <View style={{ flex:1 }}>
   <ScrollView style={{ position:'relative',flex:2,minHeight:'66%',flexDirection:'column' }} >
      <FlatList 
     
        data={chat}
        keyExtractor={item => item.id}
        renderItem={({item}) =><Chats chat={item}/>}
      />
    
    </ScrollView>
  
        <ChatBox />
       
    </View>
       
   
  );
};

const styles = StyleSheet.create({
  input:{
    height:50,
    width:"80%",
    borderRadius:30,
    marginVertical:10,
    marginLeft:15,
    backgroundColor:'white',
    paddingLeft:15
  },
  button:{
    height:50,
    width:50,
    backgroundColor:'#075e54',
    borderRadius:50,
    marginLeft:8,
    position:'relative',
    top:10
  },
  icon:{
    position:'relative',
    top:15,
    left:16,
  }
})

export default singleChat;
