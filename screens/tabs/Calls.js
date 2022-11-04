import React,{ useState } from 'react';
import {View,Text,ScrollView,FlatList,Image} from 'react-native'
import Icon from'react-native-vector-icons/MaterialIcons'

const Calls = () => {
 
  const [data,gets] =useState([
    {
      profile: require('../../assets/images/img1.jpg'),
      name:"kumar",
      datetime:'(2) January 23,09:42',
    },
    {
      profile: require('../../assets/images/img2.jpg'),
      name:"krishna",
      datetime:'12/6/21,23:25'
    },
    {
      profile: require('../../assets/images/img3.jpg'),
      name:"balram",
      datetime:'January 5,13:41'
    },
    {
      profile: require('../../assets/images/img4.jpg'),
      name:"chota bheem",
      datetime:'12/8/21,23:25'
    },
    {
      profile: require('../../assets/images/img5.jpg'),
      name:"juggu",
      datetime:'1/6/21,05:25'
    },
    {
      profile: require('../../assets/images/img6.jpg'),
      name:"ram",
      datetime:'8/7/21,23:25'
    },
    {
      profile: require('../../assets/images/img7.jpg'),
      name:"raju",
      datetime:'12/6/21,10:25'
    },
    {
      profile: require('../../assets/images/img8.jpg'),
      name:"harsha",
      datetime:'12/21/21,23:25'
    },
    {
      profile: require('../../assets/images/img9.jpg'),
      name:"charan",
      datetime:'11/21/21,23:25'
    },
    {
      profile: require('../../assets/images/img10.jpg'),
      name:"lollu",
      datetime:'09/6/21,13:25'
    }

  ])
 
  const getdata = (item) => {
   
    return (
     
      <View style={{ height: 80,flexDirection:'row',width:"100%",flex:1, }}>
        
        <View style={{ height: 30,width:30,borderRadius:5,marginRight: 30,marginLeft:10 }}>
          <Image source={item.profile} width={5} height={5} resizeMode='cover' style={{marginTop:15, borderRadius:50,overflow:'hidden',height:50,width:50 }}/>
        </View>
        <View style={{ flexDirection:'column',flex:1,justifyContent:'center',alignItems:'flex-start' }}>
          <View style={{ padding:1 }}>
            <Text style={{ fontSize:18,fontWeight:'800',textTransform:'capitalize' }}>{item.name}</Text>
          </View>
          <View style={{ padding:1 }}>
            <Text style={{ fontSize:14 }}>{item.datetime}</Text>
          </View>
        </View>
        <View style={{ justifyContent:'center',marginRight:20 }}>
            <Icon name='call' size={20} color='green'/>
        </View>
      </View>
    )
  }

  return (
  <ScrollView style={{ flex:1 }}>
     <FlatList 
        style={{ flex:1,height:'100%' }}
          data={data}
          keyExtractor={item => item.name}
          renderItem={({item,index}) => getdata(item)}
        />
    </ScrollView>
  );
};

export default Calls;
