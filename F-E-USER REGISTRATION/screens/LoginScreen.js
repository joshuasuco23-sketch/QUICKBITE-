import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://10.0.2.2:4000/api/login', { email, password });
      if (res.data && res.data.success) {
        Alert.alert('Success', 'Logged in');
      } else {
        Alert.alert('Error', res.data.message || 'Login failed');
      }
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput placeholder="Email or Mobile Number" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center' },
  title: { fontSize:28, fontWeight:'600', marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ddd', padding:12, borderRadius:8, marginBottom:12 },
  button: { backgroundColor:'#f2b705', padding:14, borderRadius:10, alignItems:'center', marginTop:8 },
  buttonText: { color:'#fff', fontWeight:'600' },
  link: { textAlign:'center', marginTop:12, color:'#666' }
});
