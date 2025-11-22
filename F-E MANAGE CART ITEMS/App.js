import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const API_BASE = 'http://10.0.2.2:4000'; // Android emulator loopback; replace with backend host or use expo tunneling

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API_BASE}/cart`);
      setCart(res.data);
    } catch (err) {
      Alert.alert('Error', 'Could not fetch cart. Make sure backend is running.');
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`${API_BASE}/cart/${id}`);
      setCart(cart.filter(i => i.id !== id));
    } catch (err) {
      Alert.alert('Error', 'Could not remove item.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image ? { uri: item.image } : require('./assets/screenshot.png')} style={styles.thumb} />
      <View style={{flex:1, marginLeft:10}}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.price}>P{item.price}.00</Text>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.remove}>
        <Text style={{color:'#fff'}}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Cart ({cart.length})</Text>
      <FlatList data={cart} keyExtractor={i => String(i.id)} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#fff' },
  header: { fontSize:22, fontWeight:'bold', marginBottom:12 },
  item: { flexDirection:'row', padding:12, backgroundColor:'#fff4e6', borderRadius:12, marginBottom:10, alignItems:'center' },
  thumb: { width:64, height:64, borderRadius:8 },
  title: { fontWeight:'700' },
  price: { marginTop:6, fontWeight:'700' },
  remove: { backgroundColor:'#d9534f', padding:8, borderRadius:8 }
});
