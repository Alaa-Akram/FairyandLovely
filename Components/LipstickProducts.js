import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const LipstickProducts = () => {
  const nav = useNavigation()
  const [isPressed, setIsPressed] = useState(false);
  return (
    <ScrollView numColumns={2} >
      <View style={{flexDirection:'row', }}>
      <View  style={{marginLeft:10,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/imaagges.jpg')}/>
     <TouchableOpacity
  style={{ position: 'absolute', right: 0 }}
  onPress={() => setIsPressed(!isPressed)}
>
  <Icon
    name='heart'
    size={24}
    color={isPressed ? 'red' : '#9c999d'}
  />
</TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>Face Glow</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <TouchableOpacity onPress={()=>nav.navigate('Description')}>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
      </TouchableOpacity>
     </View>
     </View>
     <View  style={{marginLeft:20,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/kiko.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>KIKO</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <TouchableOpacity>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
      </TouchableOpacity>
     </View>
     </View>
     </View>
     
     <View style={{flexDirection:'row', }}>
      <View  style={{marginLeft:10,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/Untitled.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>ILIA</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     <View  style={{marginLeft:20,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:150, height:150}} source={require('../assets/mattejpg.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>KISS</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     </View>

     <View style={{flexDirection:'row', }}>
      <View  style={{marginLeft:10,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/Amanda.jpeg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>AMANDA</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     <View  style={{marginLeft:20,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/timeless.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>TIMELESS MATTE</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     </View>

     <View style={{flexDirection:'row'}}>
      <View  style={{marginLeft:10,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:160, height:150}} source={require('../assets/tnwjpg.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>TNW</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     <View  style={{marginLeft:20,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/lotusjpg.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>LOTUS</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     </View>

     <View style={{flexDirection:'row', }}>
      <View  style={{marginLeft:10,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/in.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>IN</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     <View  style={{marginLeft:20,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/checkbone.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>Face Glow</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     </View>

     <View style={{flexDirection:'row', }}>
      <View  style={{marginLeft:10,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:175, height:150}} source={require('../assets/yre.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>YREDO</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     <View  style={{marginLeft:20,  flexDirection:'column', gap:7, backgroundColor:'white',  alignItems:'center',height:275,width:175 ,borderBottomRightRadius:10,borderBottomLeftRadius:10, marginTop:15 }}>
     <Image style={{width:150, height:150}} source={require('../assets/mattejpg.jpg')}/>
     <TouchableOpacity style={{position:'absolute', right:0,}}>
      <Icon name='heart' size={24} color={'#9c999d'}/>
     </TouchableOpacity>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>Face Glow</Text>
     <Text style={{fontWeight:'bold', fontSize:15}}>Lipstick</Text>
     <View style={{flexDirection:'row', gap:2}}>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Icon name='star' size={24} color={'#efef0cff'}/>
     <Text style={{color:'#f399cb', fontWeight:'bold', fontSize:17}}>(4.9)</Text>
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', width:175}}>
      <Text>$10.0</Text>
      <Icon name='add' size={27} color={'white'} style={{backgroundColor:'#f399cb', borderTopLeftRadius:10, borderBottomRightRadius:10}} />
     </View>
     </View>
     </View>
    </ScrollView>
  )
}

export default LipstickProducts