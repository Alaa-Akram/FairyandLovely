import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Products from './Components/Products'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Favourites from './Components/Favourites'
import Cart from './Components/Cart'
function TAB() {
    const TAB = createBottomTabNavigator();
  return <TAB.Navigator screenOptions={{ tabBarInactiveTintColor: '#39172e', tabBarActiveTintColor: '#f399cb', tabBarStyle: { backgroundColor: 'white' , borderTopLeftRadius:35 ,  borderTopRightRadius:35} }}>
        <TAB.Screen  options={{headerShown: false,
            tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Icon name='home-outline' color={color} size={33} />
                }
                else
                    return <Icon name='home-outline' color={color} size={26} />
            }
        }} name='home' component={Home}/>
         
        <TAB.Screen name='WishList' component={Favourites}  options={{headerShown: false,
            tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Icon name='heart-outline' color={color} size={33} />
                }
                else
                    return <Icon name='heart-outline' color={color} size={26} />
            }
        }}/>
          <TAB.Screen  options={{headerShown: false,
            tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Icon2 name='shopping-basket' color={color} size={33} />
                }
                else
                    return <Icon2 name='shopping-basket' color={color} size={26} />
            }
        }} name='Cart' component={Cart}/>
        <TAB.Screen name='profile' component={Profile}  options={{headerShown: false,
            tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Icon name='person-outline' color={color} size={33} />
                }
                else
                    return <Icon name='person-outline' color={color} size={26} />
            }
        }}/>
    </TAB.Navigator>
}

export default TAB