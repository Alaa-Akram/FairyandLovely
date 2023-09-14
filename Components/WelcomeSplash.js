import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
const WelcomeSplash = (props) => {
    useEffect(() => {

        setTimeout(() => {

            props.navigation.navigate('Home');

        }, 1000)

    }, [])
  return (
    <View style={{ backgroundColor: '#f399cb', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <Image style={{ width: 250, height: 150, marginTop: 0 }} source={require('../assets/logo2.png')} />
    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', marginTop: 15 }}>Welcome,</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Fairy & Lovely!</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: 15 }}>Unlock the world of reguler and</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>rescued cosmetics by setting</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>up your delivery address</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: 45 }}>Select Location</Text>
    <TouchableOpacity  onPress={()=>nav.navigate("login")} style={{borderRadius:50, width:300, height:45,backgroundColor:'white', marginTop:15}}>
        <Text style={{color:'#f399cb', fontWeight:'bold',alignSelf:'center', fontSize:15, marginTop:5, marginRight:95}}>
        <Icon2 name='search-location' size={24}color={'black'}/>  Locate Me</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={()=>nav.navigate("login")} style={{borderRadius:50, width:300, height:45,backgroundColor:'white', marginTop:15}}>
        <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:15, alignSelf:'center',justifyContent:'center', marginTop:5}}>
            <Icon name='location' size={24}color={'black'}/>  Provide Delivery Location</Text>
    </TouchableOpacity>
  </View>
  )
}

export default WelcomeSplash