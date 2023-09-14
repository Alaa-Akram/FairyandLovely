import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const nav = useNavigation()
  return (
    <Swiper showsButtons={false} paginationStyle={{ bottom: 25 }} dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 10, height: 10, borderRadius: 5 }} activeDotStyle={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5 }}>
      {/* Page 1 */}
      <View style={{ backgroundColor: '#f399cb', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 250, height: 150, marginTop: 70 }} source={require('../assets/logo2.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', marginTop: 50 }}>Get Products by the</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>best</Text>
        <Image style={{ width: 300, height: 300 }} source={require('../assets/bag.png')} />
      </View>

      {/* Page 2 */}
      <View style={{ backgroundColor: '#f399cb', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 250, height: 150, marginTop: 70 }} source={require('../assets/logo2.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', marginTop: 50 }}>Keep calm and buy</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>up</Text>
        <Image style={{ width: 300, height: 300 }} source={require('../assets/brush.png')} />
      </View>

      {/* Page 3 */}
      <View style={{ backgroundColor: '#f399cb', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 250, height: 150, marginTop: 70 }} source={require('../assets/logo2.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', marginTop: 50 }}>The biggest sale is</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>here</Text>
        <Image style={{ width: 250, height: 250 }} source={require('../assets/cosmetic2.png')} />
        <TouchableOpacity  onPress={()=>nav.navigate("login")} style={{borderRadius:50, paddingHorizontal:85, paddingVertical:15, backgroundColor:'white', marginTop:15}}>
            <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:15}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default Welcome;