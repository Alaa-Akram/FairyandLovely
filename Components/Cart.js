import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
const Cart = () => {
  const nav = useNavigation()
  return (
    <ScrollView style={{marginTop:45,}}>
      <View style={{flexDirection:'row', marginLeft:15, gap:35, alignItems:'center'}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Your Order</Text>
      <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
      <Icon4 name='shopping-outline' size={20}/>
      <Text>4</Text>
      </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15 , marginTop:15, backgroundColor:'white', paddingVertical:15, borderRadius:10, shadowRadius:58, shadowColor:'red', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <Image style={{width:60, height:40, borderRadius:10}} source={require('../assets/imaagges.jpg')}/>
        <Text>Facial Kit</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <View style={{flexDirection:'row', borderColor:'#f399cb', borderWidth:2,borderRadius:20, justifyContent:'space-between', width:100, alignItems:'center'}}>
            <TouchableOpacity>
            <Icon3 name='minus' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
            <Text style={{color:'#f399cb'}}>1</Text>
            <TouchableOpacity>
            <Icon name='add' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
        </View>  
        <Text style={{color:'#f399cb'}}>$170</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15 , marginTop:15, backgroundColor:'white', paddingVertical:15, borderRadius:10, shadowRadius:58, shadowColor:'red', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <Image style={{width:60, height:40, borderRadius:10}} source={require('../assets/kiko.jpg')}/>
        <Text>KIKO</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <View style={{flexDirection:'row', borderColor:'#f399cb', borderWidth:2,borderRadius:20, justifyContent:'space-between', width:100, alignItems:'center'}}>
            <TouchableOpacity>
            <Icon3 name='minus' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
            <Text style={{color:'#f399cb'}}>3</Text>
            <TouchableOpacity>
            <Icon name='add' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
        </View>  
        <Text style={{color:'#f399cb'}}>$190</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15 , marginTop:15, backgroundColor:'white', paddingVertical:15, borderRadius:10, shadowRadius:58, shadowColor:'red', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <Image style={{width:60, height:40, borderRadius:10}} source={require('../assets/Amanda.jpeg')}/>
        <Text>AMANDA</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <View style={{flexDirection:'row', borderColor:'#f399cb', borderWidth:2,borderRadius:20, justifyContent:'space-between', width:100, alignItems:'center'}}>
            <TouchableOpacity>
            <Icon3 name='minus' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
            <Text style={{color:'#f399cb'}}>1</Text>
            <TouchableOpacity>
            <Icon name='add' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
        </View>  
        <Text style={{color:'#f399cb'}}>$200</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15 , marginTop:15, backgroundColor:'white', paddingVertical:15, borderRadius:10, shadowRadius:58, shadowColor:'red', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <Image style={{width:60, height:40, borderRadius:10}} source={require('../assets/Untitled.jpg')}/>
        <Text>ILIA</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',gap:10 }}>
        <View style={{flexDirection:'row', borderColor:'#f399cb', borderWidth:2,borderRadius:20, justifyContent:'space-between', width:100, alignItems:'center'}}>
            <TouchableOpacity>
            <Icon3 name='minus' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
            <Text style={{color:'#f399cb'}}>1</Text>
            <TouchableOpacity>
            <Icon name='add' size={24} color={'#f399cb'}/>
            </TouchableOpacity>
        </View>  
        <Text style={{color:'#f399cb'}}>$145</Text>
        </View>
      </View>
      
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginLeft:15, marginRight:15, marginTop:320 }}>
        <View>
          <Text style={{fontWeight:'bold'}}>$665</Text>
          <Text style={{color:'#f399cb', fontWeight:'bold'}}>Total Amount</Text>
        </View>
        <TouchableOpacity onPress={()=>nav.navigate('checkout')}>
          <Text style={{borderRadius:50, backgroundColor:'#f399cb', color:'white', paddingVertical:15, paddingHorizontal:50, fontSize:17}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Cart