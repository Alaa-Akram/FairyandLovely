import { View, Text, ScrollView , TouchableOpacity} from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
  const nav = useNavigation()
  const { control, handleSubmit, formState } = useForm({ mode: 'onSubmit' });
  return (
    <ScrollView>
      <View style={styles.head}>
    <View>
      <Text style={{fontWeight:'bold', fontSize:15}}>Total Price</Text>
      <Text style={{fontSize:17}}>Payment Method</Text>
    </View>
    <View>
      <Text style={{fontWeight:'bold', fontSize:15}}>$ 400.00</Text>
      <Text style={{fontSize:17}}>Cash On Delivery</Text>
    </View>
      </View>
      <Text style={styles.hr}></Text>
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
            name='email'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Email"
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
            name='email'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Phone Number"
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
            name='email'
            render={({ field }) => (
              <TextInput
                onChangeText={field.onChange}
                mode="outlined"
                label="Delivery Address"
                activeOutlineColor="#f399cb"
                outlineColor="#d4aec1"
                style={styles.inputt}
              />
            )}
          />
            <TouchableOpacity onPress={()=>nav.navigate('more')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = {

  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15
  },
  hr:{
    borderColor: "black",
    width:350,
    borderBottomWidth: 1,
    marginLeft: 20,  
    marginBottom:40,
    marginTop: 15,
},
  input: {
    fontSize: 15,
    // marginHorizontal: 55,
    marginVertical: 15,
    marginLeft: 20,  
    width: 350,
    borderRadius: 70,
    
  },
  inputt: {
    fontSize: 15,
    // marginHorizontal: 55,
    marginVertical: 15,
    marginLeft: 20,  
    width: 350,
    // height:120,
    borderRadius: 70,
    paddingBottom: 70,
  },
  loginButton: {
    borderRadius: 10,
    paddingHorizontal: 155,
    paddingVertical: 17,
    backgroundColor: '#f399cb',
    marginTop: 15,
    width:350,
    marginLeft: 20,  
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
};


export default Checkout