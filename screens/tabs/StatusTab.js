import React,{ useState } from 'react';
import { View,Text,ScrollView,FlatList,Image,TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const StatusTab = ({ navigation }) => {

  const [recentdata,setrecent] =useState([
    {
      profile: require('../../assets/images/img1.jpg'),
      name:"kumar",
      recentChat:'how are u?',
      timing:"00:08",
    },
    {
      profile: require('../../assets/images/img2.jpg'),
      name:"krishna",
      recentChat:'saptiya',
      timing:"02:48",
    },
    

  ])

  const [vieweddata,setview] =useState([
    {
      profile: require('../../assets/images/img3.jpg'),
      name:"balram",
      recentChat:'when holidays will come',
      timing:"05:08",
    },
    {
      profile: require('../../assets/images/img4.jpg'),
      name:"chota bheem",
      recentChat:'lets have laddo',
      timing:"07:08",
    },
    {
      profile: require('../../assets/images/img5.jpg'),
      name:"juggu",
      recentChat:'lets have fun',
      timing:"13:08",
    },
    {
      profile: require('../../assets/images/img6.jpg'),
      name:"ram",
      recentChat:'come we play',
      timing:"03:08",
    },
    {
      profile: require('../../assets/images/img7.jpg'),
      name:"raju",
      recentChat:'hi',
      timing:"09:08",
    },
    {
      profile: require('../../assets/images/img8.jpg'),
      name:"harsha",
      recentChat:'lets have fun',
      timing:"10:08",
    },
    {
      profile: require('../../assets/images/img9.jpg'),
      name:"charan",
      recentChat:'come we play',
      timing:"11:08",
    },
    {
      profile: require('../../assets/images/img10.jpg'),
      name:"lollu",
      recentChat:'hi',
      timing:"14:08",
    }

  ])
  const getdata = (item) => {
   
    return (
     <TouchableOpacity onPress={(e) => navigation.navigate('redux')}>
      <View style={{ height: 80,flexDirection:'row',width:"100%",flex:1, }}>
        
        <View style={{ height: 30,width:30,borderRadius:5,marginRight: 30,marginLeft:10 }}>
          <View style={{ height: 58,width:58,borderRadius:50,position:'absolute',backgroundColor:'#075e54',top:10,left:-4 }}>

          </View>
          <Image source={item.profile} width={5} height={5} resizeMode='cover' style={{marginTop:15, borderRadius:50,overflow:'hidden',height:50,width:50 }}/>
          
        </View>
        <View style={{ flexDirection:'column',flex:1,justifyContent:'center',alignItems:'flex-start' }}>
          <View style={{ padding:1 }}>
            <Text style={{ fontSize:18,fontWeight:'800',textTransform:'capitalize' }}>{item.name}</Text>
          </View>
          <View style={{ padding:1 }}>
            <Text style={{ fontSize:14, }}>{item.timing}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    )
  }


  return(
    <ScrollView style={{flex:1 }}>
      <TouchableOpacity>
      <View style={{ height: 80,flexDirection:'row',width:"100%",flex:1,position:'relative' }}>
        <View style={{ height: 30,width:30,borderRadius:5,marginRight: 30,marginLeft:10 }}>
          <Image source={recentdata[0].profile} width={5} height={5} resizeMode='cover' style={{marginTop:15, borderRadius:50,overflow:'hidden',height:50,width:50,position:'relative' }}/>
         <Icon name='add-circle' size={20} color="#075e54" style={{ position:'relative',bottom:20,left:30,color:'#fff' }} />
        </View>
        <View style={{ flexDirection:'column',flex:1,justifyContent:'center',alignItems:'flex-start' }}>
          <Text style={{ fontSize:18,fontWeight:'700',marginBottom:3 }}>My status</Text>
          <Text style={{ fontSize:15,marginBottom:3 }}>Tap to add status update</Text>
        </View>
      </View>
      </TouchableOpacity>
    <View style={{ padding:5 }}>
      <Text style={{ marginVertical:10 }}>Recent Updates</Text>
      
      <FlatList 
        style={{ flex:1,height:'100%' }}
          data={recentdata}
          keyExtractor={item => item.name}
          renderItem={({item,index}) => getdata(item)}
        />
    </View>
    <View style={{ paddingLeft:5 }}>
    <Text style={{ marginVertical:10 }}>Viewed Updates</Text>
    <FlatList 
        style={{ flex:1,height:'100%' }}
          data={vieweddata}
          keyExtractor={item => item.name}
          renderItem={({item,index}) => getdata(item)}
        />
    </View>
  </ScrollView>
  );
};

export default StatusTab;
