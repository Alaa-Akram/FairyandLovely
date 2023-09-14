import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useForm, Controller } from 'react-hook-form';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { control, handleSubmit, formState } = useForm({ mode: 'onSubmit' });
  const [activeTab, setActiveTab] = useState('login');
  const nav = useNavigation()
  function onSubmit(values){
    nav.navigate('welsplash')
  }
  // const onSubmit = (data) => {
  //   nav.navigate('welsplash')
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo2.png')} />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab('login')}
          style={[styles.tabButton, activeTab === 'login' && styles.activeTabButton]}
        >
          <Text style={[styles.tabButtonText, activeTab === 'login' && styles.activeTabButtonText]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('signup')}
          style={[styles.tabButton, activeTab === 'signup' && styles.activeTabButton]}
        >
          <Text style={[styles.tabButtonText, activeTab === 'signup' && styles.activeTabButtonText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'login' ? (
        <>
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name='email'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Username or Mobile Number"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.input}
              />
            )}
          />
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name='password'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Password"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.input}
                right={<TextInput.Icon icon="eye"/>}
                secureTextEntry
              />
            )}
          />
        </>
      ) : (
        <>
        <View style={{flexDirection:'row', gap:15}}>
        <TouchableOpacity >
            <Text style={{backgroundColor:'#e8dddb', borderRadius:5, padding:4,}}>
              <Icon name='facebook' size={24} color={'#4260cd'} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity >
          <Text style={{backgroundColor:'#e8dddb', borderRadius:5, padding:4,}}>
              <Icon name='google' size={24} color={'#d44f38'} /> 
            </Text>
          </TouchableOpacity>
          </View>
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name='name'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Full Name"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.input}
              />
            )}
          />
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name='number'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Mobile Number"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.input}
              />
            )}
          />
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name='password'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Password"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.input}
                secureTextEntry
                right={<TextInput.Icon icon="eye"/>}
              />
            )}
          />
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name='password'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Confirm Password"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.input}
                right={<TextInput.Icon icon="eye"/>}
                secureTextEntry
              />
            )}
          />
        </>
      )}

      {activeTab === 'login' && (
        <Text style={{ color: '#f399cb', marginRight: 188 }}>Forgot Password?</Text>
      )}

      <TouchableOpacity onPress={()=>nav.navigate('welsplash')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>{activeTab === 'login' ? 'Login' : 'SignUp'}</Text>
      </TouchableOpacity>

      {activeTab === 'signup' && (
        <>
        <View style={{flexDirection:'row', gap:10, marginTop:15}}>
        <Text style={{ fontSize: 15, fontWeight:'bold' }}>Already a Member?</Text>
          <TouchableOpacity onPress={()=>nav.navigate("login")}>
            <Text style={{color:'#f399cb', fontSize:15, fontWeight:'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          </View>
        </>
      )}

      {activeTab === 'login' && (
        <>
        <Text style={{ fontSize: 15 }}>or</Text>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>
              <Icon name='facebook' size={24} color={'#4260cd'} /> Login with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>
              <Icon name='google' size={24} color={'#d44f38'} /> Login with w Google
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  logo: {
    width: 250,
    height: 150,
    marginTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#d8d3d5',
  },
  activeTabButton: {
    borderBottomColor: '#f399cb',
  },
  tabButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  activeTabButtonText: {
    color: '#f399cb',
  },
  input: {
    fontSize: 15,
    marginHorizontal: 43,
    marginVertical: 15,
    
    width: 300,
    borderRadius: 70,
  },
  loginButton: {
    borderRadius: 15,
    paddingHorizontal: 130,
    paddingVertical: 17,
    backgroundColor: '#f399cb',
    marginTop: 15,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  socialButton: {
    borderRadius: 15,
    paddingHorizontal: 65,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginTop: 15,
    backgroundColor: '#d8d3d5',
  },
  socialButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
};

export default Login;