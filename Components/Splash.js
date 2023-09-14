import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = (props) => {
    useEffect(() => {

        setTimeout(() => {

            props.navigation.navigate('welcome');

        }, 3000)

    }, [])
  return (
    <View >
    <Image style={{ width: 400, height: 400, alignItems:'center', justifyContent:'center', marginTop:190}} source={require('../assets/splash3.gif')} />
</View>
  )
}

export default Splash