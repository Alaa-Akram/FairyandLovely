import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Ionicons';

const ShopMore = () => {
    const nav = useNavigation()
  return (
    <View style={{ backgroundColor: '#f399cb', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <Image style={{ width: 200, height: 200, alignItems:'center', justifyContent:'center', marginTop:0}} source={require('../assets/logo2.png')} />
    <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>WE HAVE RECIEVED</Text>
    <Text style={{color:'white', fontSize:25, fontWeight:'bold'}}>YOUR ORDER</Text>
    <TouchableOpacity  onPress={()=>nav.navigate("home")} style={{borderRadius:50, width:300, height:45,backgroundColor:'white', marginTop:15, alignSelf:'center', flexDirection:'row'}}>
        <Text style={{color:'#f399cb', fontWeight:'bold',alignSelf:'center', fontSize:15, marginLeft:100, justifyContent:'center'}}>
       ShopMore  </Text>
       <Icon2 name='arrow-forward-outline' size={25}color={'#f399cb'} style={{alignSelf:'center'}}/>
    </TouchableOpacity>
   </View>

  )
}

export default ShopMore