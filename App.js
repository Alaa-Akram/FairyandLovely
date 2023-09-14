import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import Splash from './Components/Splash';
import TAB from './TAB';
import Welcome from './Components/Welcome';
import Profile from './Components/Profile';
import Products from './Components/Products';
import Login from './Components/Login';
import WelcomeSplash from './Components/WelcomeSplash';
import LipstickProducts from './Components/LipstickProducts';
import Description from './Components/Description';
import Cart from './Components/Cart';
import Favourites from './Components/Favourites';
import Checkout from './Components/Checkout';
import ShopMore from './Components/ShopMore';


const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f399cb' } }}>
        <stack.Screen options={{ headerShown: false }} name='splash' component={Splash}/>
        <stack.Screen options={{ headerShown: false }} name='Home' component={TAB}/>
        <stack.Screen options={{ headerShown: false }} name='welcome' component={Welcome}/>
        <stack.Screen options={{ headerShown: false }} name='profile' component={Profile}/>
        <stack.Screen options={{ headerShown: true }} name='Wishlist' component={Favourites} />
        <stack.Screen options={{ headerShown: false }} name='products' component={Products}/>
        <stack.Screen options={{ headerShown: false }} name='login' component={Login}/>
        <stack.Screen options={{ headerShown: false }} name='welsplash' component={WelcomeSplash}/>
        <stack.Screen options={{ headerShown: true }} name='Products' component={LipstickProducts}/>
        <stack.Screen name='Description' component={Description}/>
        <stack.Screen options={{ headerShown: false }} name='Cart' component={Cart}/>
        <stack.Screen name='checkout' component={Checkout}/>
        <stack.Screen options={{ headerShown: false }} name='more' component={ShopMore}/>
      </stack.Navigator>  
       <StatusBar style='dark' />  
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
