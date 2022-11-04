import React,{ useState } from 'react';
import { View,Text,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'

const ChatsTab = ({ navigation }) => {
  const [data,gets] =useState([
    {
      profile: require('../../assets/images/img1.jpg'),
      name:"kumar",
      recentChat:'how are u?'
    },
    {
      profile: require('../../assets/images/img2.jpg'),
      name:"krishna",
      recentChat:'saptiya'
    },
    {
      profile: require('../../assets/images/img3.jpg'),
      name:"balram",
      recentChat:'when holidays will come'
    },
    {
      profile: require('../../assets/images/img4.jpg'),
      name:"chota bheem",
      recentChat:'lets have laddo'
    },
    {
      profile: require('../../assets/images/img5.jpg'),
      name:"juggu",
      recentChat:'lets have fun'
    },
    {
      profile: require('../../assets/images/img6.jpg'),
      name:"ram",
      recentChat:'come we play'
    },
    {
      profile: require('../../assets/images/img7.jpg'),
      name:"raju",
      recentChat:'hi'
    },
    {
      profile: require('../../assets/images/img8.jpg'),
      name:"harsha",
      recentChat:'lets have fun'
    },
    {
      profile: require('../../assets/images/img9.jpg'),
      name:"charan",
      recentChat:'come we play'
    },
    {
      profile: require('../../assets/images/img10.jpg'),
      name:"lollu",
      recentChat:'hi'
    }

  ])
 
  const getdata = (item) => {
   
    return (
     <TouchableOpacity onPress={() => navigation.navigate('singlechat',{ names: item.name,userprofile:item.profile })}>
      <View style={{ height: 80,flexDirection:'row',width:"100%",flex:1, }}>
        
        <View style={{ height: 30,width:30,borderRadius:5,marginRight: 30,marginLeft:10 }}>
          <Image source={item.profile} width={5} height={5} resizeMode='cover' style={{marginTop:15, borderRadius:50,overflow:'hidden',height:50,width:50 }}/>
        </View>
        <View style={{ flexDirection:'column',flex:1,justifyContent:'center',alignItems:'flex-start' }}>
          <View style={{ padding:1 }}>
            <Text style={{ fontSize:18,fontWeight:'800',textTransform:'capitalize' }}>{item.name}</Text>
          </View>
          <View style={{ padding:1 }}>
            <Text style={{ fontSize:14 }}>{item.recentChat}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
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

export default ChatsTab;
