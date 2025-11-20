import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';

export default function SignUpScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');

  const handleSignUp = async () => {
    try {
      const res = await axios.post('http://10.0.2.2:4000/api/register', {
        fullName, email, password, mobile, dob
      });
      if (res.data && res.data.success) {
        Alert.alert('Success', 'Account created. Please log in.');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', res.data.message || 'Sign up failed');
      }
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>New Account</Text>
      <TextInput placeholder="Full name" value={fullName} onChangeText={setFullName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TextInput placeholder="Mobile Number" value={mobile} onChangeText={setMobile} style={styles.input} />
      <TextInput placeholder="Date of birth (DD / MM / YYYY)" value={dob} onChangeText={setDob} style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding:20, justifyContent:'center' },
  title: { fontSize:26, fontWeight:'600', marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ddd', padding:12, borderRadius:8, marginBottom:12 },
  button: { backgroundColor:'#f2b705', padding:14, borderRadius:10, alignItems:'center', marginTop:8 },
  buttonText: { color:'#fff', fontWeight:'600' }
});
