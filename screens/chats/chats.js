import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Chats = ({ chat }) => {
  let size = chat.content.length/5;
  let init=0
  return (
    <View style={[styles.block,{ flexDirection:'row'}]}>
      {chat.isme? <View style={[styles.backg,{  position:'absolute', right:15,backgroundColor:'green',padding:5,
        borderTopRightRadius:0, borderRadius:5,}]}>
            {chat.content.length >50? 
           <>
            
           <Text style={{ color:'white',}}>{chat.content.substring(init,size)}</Text>
           
          
           </>
             : 
             <Text style={{ color:'white',}}>{chat.content}</Text>}
        </View> : <View style={[styles.backg,{ position:'absolute', left:15,backgroundColor:'white',padding:5,
        borderTopLeftRadius:0, borderRadius:5,}]}>
            <Text style={{ color:'#000' }}>{chat.content}</Text>
        </View>
        }
       
    </View>
  )
}

const styles=StyleSheet.create({
    backg:{
        margin:5,
        padding:2,
        borderRadius:2,
    },
    block:{
      marginVertical:20,
      // width:'100%',
      flex:1,
     minHeight:15,
      // maxWidth:'60%'
    }
})

export default Chats