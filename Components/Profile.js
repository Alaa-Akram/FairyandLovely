import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons'

const Profile = () => {
  return (
    <ScrollView>
      <Image style={styles.coverphoto} source={require('../assets/depositphotos_429277974-stock-photo-woman-flat-lay-makeup-background.jpg')}/>
      <View style={styles.container}>
      <Image style={styles.profilephoto} source={require('../assets/profile.jpeg')}/>
      <Text style={styles.name}>Alaa Akram</Text>
      <Text style={styles.hint}>Work hard in science</Text>
      </View>
      <View style={styles.firstcollapse}>
        <Icon/>
        <Text>My Adress</Text>
        <Icon/>
      </View>
    </ScrollView>
  )
}

const styles ={
  coverphoto:{
    width:370,
    height:300,
    position:'relative',
    marginLeft: 11,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container:{
    position:'absolute'
  },
  profilephoto:{
    top:80,
    left:150,
    width:100,
    height:100,
    borderRadius: 50,
  },
  name:{
    top:90,
    left:130,
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  hint:{
    top:90,
    left:140,
    fontSize:12,
    color:'white',
  },
  firstcollapse:{
    
  }
}
export default Profile