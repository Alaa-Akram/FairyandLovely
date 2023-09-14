import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Description = () => {
    const nav = useNavigation()
  return (
    <View>
  <Image style={{width:400, height:200}} source={require('../assets/imaagges.jpg')}/>
  <View style={{backgroundColor:'#fbfbfb', borderTopRightRadius:50, borderTopLeftRadius:50, height:900, position:'absolute', top:185}}>
    <View style={{flexDirection:'row' , gap:30}}>
        <View style={{backgroundColor:'white', borderRadius:50, position:'absolute', left:100, width:160, height:30,flexDirection:'row' , justifyContent:'space-around', bottom:20, alignItems:'center'}}>
        <Text>$10.00</Text>
        <Text>50ml</Text>
        </View>
        <Icon name='heart' size={22} color={'red'} style={{backgroundColor:'white', borderRadius:50, left:330, bottom:16, padding:5}}/>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Text style={{color:'#f399cb',fontSize:17, fontWeight:'bold'}}>Face Glow</Text>
        <Text style={{color:'#f399cb', fontSize:17, fontWeight:'bold'}}>22 % Off</Text>
    </View>
    <View style={{height:410, }}>
    <Text style={{width:350, marginLeft:20, marginTop:10, color:'#575556', fontSize:15,}}>Glow is sometimes used in cosmetic products.
         medical procedural that are done for Cosmetics
        purposes the change were purely cosmetic.     Noune Use a cosmetic hide the scar.
    </Text>
    <Text style={{ width:350, marginLeft:20, marginTop:30, color:'#575556', fontSize:15,}}>Glow "cosmetic" is any substance used to clean, improve or change complexion, skin,
    hair, nails or teeth. Cosmetics include beayty preparations make-up. perfume, skin cream, nail po;ish and grooming
    aids soap, shampoo shaving cream, deadorant. This is very good product andmantufacture for your skin care.
    </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-around', width:400, height:65, borderTopLeftRadius:40, borderTopRightRadius:40, backgroundColor:'#f399cb',alignItems:'center'}}>
        <Text style={{color:'white', fontSize:17, fontWeight:'bold'}}>$125</Text>
        <View style={{flexDirection:'row', borderColor:'white', borderWidth:2,borderRadius:20, justifyContent:'space-between', width:100}}>
            <Icon3 name='minus' size={24} color={'white'}/>
            <Text style={{color:'white'}}>1</Text>
            <Icon name='add' size={24} color={'white'}/>
        </View>
        <TouchableOpacity onPress={()=>nav.navigate('Cart')} style={{backgroundColor:'white', borderRadius:50,padding:5}}>
        <Icon2 name='shopping-basket' size={24} color={'black'} />
        </TouchableOpacity>
    </View>
  </View>
    </View>
  )
}

export default Description