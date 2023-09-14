import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const nav = useNavigation()
  return (
    <ScrollView>
      <View style={{flexDirection:'row', gap:90}}>
        <View>
      <Text style={{fontWeight:'bold', fontSize:40, marginLeft:20, marginTop:35}}>Fairy &</Text>
      <Text style={{fontWeight:'bold', fontSize:40, marginLeft:50}}>Lovely</Text>
      </View>
      <Image style={ {width: 80,height: 80, marginTop: 45}} source={require('../assets/logo2.png')} />
      </View>
      {/* <Swiper style={{height:400}} showsButtons={false} paginationStyle={{ top: 185 }} dotStyle={{ backgroundColor: 'rgba(202, 98, 164, 0.3)', width: 10, height: 10, borderRadius: 5 }} activeDotStyle={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5 }}>
        <Image style={{ width: 200, height: 200, }} source={require('../assets/cosmetic.png')} />
        <Image style={{width: 400, height: 150, }} source={require('../assets/logo2.png')} /> 
        <Image style={{ width: 400, height: 150, }} source={require('../assets/logo2.png')} />
        <Image style={{ width: 400, height: 150, }} source={require('../assets/logo2.png')} />
        <Image style={{ width: 400, height: 150,  }} source={require('../assets/logo2.png')} />
        <Image style={{ width: 400, height: 150, }} source={require('../assets/logo2.png')} />
    </Swiper> */}
           <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:240}}>
                    {/* <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={styles.cardsection}/> */}
                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
>
                        <Image style={styles.card} source={require('../assets/sale5.jpg')} />
                        <Text style={{position:'absolute', top:40, left:140, fontWeight:'bold', fontSize:20}}>THE</Text>
                        <Text style={{position:'absolute', top:60, left:140, fontWeight:'bold', fontSize:20}}>SKINCARE</Text>
                        <Text style={{position:'absolute', top:80, left:140, fontWeight:'bold', fontSize:20}}>SALE</Text>
                        <Text style={{position:'absolute', top:120, left:140, fontWeight:'bold'}}>Up to 60% off</Text>
                       
                    </TouchableOpacity>

                    <View  >
                    <Image style={styles.card} source={require('../assets/immages.jpg')}/>
                        <Text style={{position:'absolute', top:40, left:50, fontWeight:'bold', fontSize:20}}>Lakme SALE</Text>
                        <Text style={{position:'absolute', top:60, left:50, fontWeight:'bold', fontSize:20}}>Make up</Text>
                        <Text style={{position:'absolute', top:120, left:50, fontWeight:'bold'}}>Up to 40% off</Text>
                    </View>

                    <View  >
                    <Image style={styles.card} source={require('../assets/sale4.jpg')}/>
                        <Text style={{position:'absolute', top:40, left:50, fontWeight:'bold', fontSize:20}}>THE</Text>
                        <Text style={{position:'absolute', top:60, left:50, fontWeight:'bold', fontSize:20}}>SKINCARE</Text>
                        <Text style={{position:'absolute', top:80, left:50, fontWeight:'bold', fontSize:20}}>SALE</Text>
                        <Text style={{position:'absolute', top:120, left:50, fontWeight:'bold'}}>Up to 60% off</Text>
                    </View>

                    <View >
                    <Image style={styles.card} source={require('../assets/sale5.jpg')} />
                        <Text style={{position:'absolute', top:40, left:140, fontWeight:'bold', fontSize:20}}>L’OREAL</Text>
                        <Text style={{position:'absolute', top:60, left:140, fontWeight:'bold', fontSize:20}}>LINEUP</Text>
                        <Text style={{position:'absolute', top:120, left:140, fontWeight:'bold'}}>Up to 60% off</Text>
                    </View>

                    <View  >
                        <Image style={styles.card} source={require('../assets/sale7.jpg')} />
                    </View>
                </ScrollView>    

                <ScrollView  horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:100}}>
                  <TouchableOpacity onPress={()=> nav.navigate('Products')} style={{flexDirection:'column', gap:5}}>
                    <Image style={{width:60, height:60, marginLeft:20}} source={require('../assets/lipstickk.png')}/>
                    <Text style={{marginLeft:30, fontWeight:'bold', fontSize:13}}>Lipstick</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'column', gap:5}}>
                    <Image style={{width:60, height:60, marginLeft:20}} source={require('../assets/nailpaint.png')}/>
                    <Text style={{marginLeft:30, fontWeight:'bold', fontSize:13}}>Nail Paint</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'column', gap:5}}>
                    <Image style={{width:60, height:60, marginLeft:20}} source={require('../assets/facemask.png')}/>
                    <Text style={{marginLeft:30, fontWeight:'bold', fontSize:13}}>Face Masks</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'column', gap:5}}>
                    <Image style={{width:60, height:60, marginLeft:20}} source={require('../assets/facewash.png')}/>
                    <Text style={{marginLeft:30, fontWeight:'bold', fontSize:13}}>Face Wash Gel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'column', gap:5}}>
                    <Image style={{width:60, height:60, marginLeft:20}} source={require('../assets/shampoo.png')}/>
                    <Text style={{marginLeft:30, fontWeight:'bold', fontSize:13}}>Shampoo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'column', gap:5}}>
                    <Image style={{width:60, height:60, marginLeft:20}} source={require('../assets/compact.png')}/>
                    <Text style={{marginLeft:30, fontWeight:'bold', fontSize:13}}>Compact</Text>
                  </TouchableOpacity>
                  </ScrollView> 

                  <View >
                    <Text style={{fontWeight:'bold', fontSize:25, color:'#f399cb', marginLeft:20}}>Populer Brands</Text>
                    <ScrollView  horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:270, marginTop:20}}>
                      <View style={{marginLeft:20,  flexDirection:'column', gap:7, alignItems:'center', backgroundColor:'#f399cb', height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginLeft:0, marginTop:5,backgroundColor:'white', borderRadius:10}} source={require('../assets/mascara.png')}/>
                      <Text style={{fontSize:18, color:'white'}}>Beauty Care</Text>
                      <Text style={{fontSize:12, color:'white'}}>Mascara</Text>
                      <Icon name='arrow-forward-outline' size={18}/>
                      </View>

                      <View style={{marginLeft:20,  flexDirection:'column', gap:7, alignItems:'center',backgroundColor:'#f399cb',  height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginTop:5, backgroundColor:'white', borderRadius:10}} source={require('../assets/foundation.png')}/>
                      <Text style={{fontSize:18, color:'white'}}>KIKO</Text>
                      <Text style={{fontSize:12, color:'white'}}>Foundation</Text>
                      <Icon name='arrow-forward-outline' size={18}/>
                      </View>

                      <View style={{marginLeft:20, flexDirection:'column', gap:7, alignItems:'center',backgroundColor:'#f399cb',  height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginTop:5, backgroundColor:'white', borderRadius:10}} source={require('../assets/lipstickk.png')}/>
                      <Text style={{fontSize:18, color:'white'}}>LAKME</Text>
                      <Text style={{fontSize:12, color:'white'}}>LipStick</Text>
                      <Icon name='arrow-forward-outline' size={18}/>
                      </View>

                      <View style={{marginLeft:20,  flexDirection:'column', gap:7, alignItems:'center',backgroundColor:'#f399cb',  height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginLeft:10, marginTop:5, backgroundColor:'white', borderRadius:10}} source={require('../assets/nailpaint.png')}/>
                      <Text style={{fontSize:18, color:'white'}}>Nail Paint</Text>
                      <Text style={{fontSize:12, color:'white'}}>Swiss Beauty</Text>
                      <Icon name='arrow-forward-outline' size={18}/>
                      </View>
                    </ScrollView>
                  </View>

                  <View >
                    <Text style={{fontWeight:'bold', fontSize:25, color:'#f399cb', marginLeft:20}}>Featured Brands</Text>
                    <ScrollView  horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:270, marginTop:20}}>
                      <View style={{marginLeft:20,  flexDirection:'column', gap:7, alignItems:'center', backgroundColor:'white', height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginLeft:0, marginTop:5,backgroundColor:'white', borderRadius:5}} source={require('../assets/istockphoto-1390665987-170667a.jpg')}/>
                      <Text style={{fontSize:16, color:'#f399cb', fontWeight:'bold'}}>Maybelline New    York Matte+Poreless Foundation</Text>
                      </View>

                      <View style={{marginLeft:20,  flexDirection:'column', gap:7, alignItems:'center',backgroundColor:'white',  height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginTop:5, backgroundColor:'white', borderRadius:10}} source={require('../assets/imaages.jpg')}/>
                      <Text style={{fontSize:16, color:'#f399cb', fontWeight:'bold'}}>Rose Loose Face Powder with Sunscreen</Text>
                      </View>

                      <View style={{marginLeft:20, flexDirection:'column', gap:7, alignItems:'center',backgroundColor:'white',  height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginTop:5, backgroundColor:'white', borderRadius:10}} source={require('../assets/mattejpg.jpg')}/>
                      <Text style={{fontSize:16, color:'#f399cb', fontWeight:'bold'}}>Myy Cosmetics Matte Tattoo Lip Colour - Rose</Text>
                      </View>

                      <View style={{marginLeft:20,flexDirection:'column', gap:7, alignItems:'center',backgroundColor:'white',  height:250,width:160 ,borderRadius:10 }}>
                      <Image style={{width:150, height:150, marginLeft:10, marginTop:5, backgroundColor:'white', borderRadius:10}} source={require('../assets/7fb019aafab4a956d6e290ca3304ab2a.jpg')}/>
                      <Text style={{fontSize:16, color:'#f399cb', fontWeight:'bold'}}>Eyes On Me! 10-in-1 EyeShadow Palette - sundowner Stuner </Text>
                      </View>
                    </ScrollView>
                  </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

  card:{
    position:'relative',
    height:170, 
    marginLeft:20,
    width:360,
    borderRadius:30,
    marginTop:20
  },

})
export default Home