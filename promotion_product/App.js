import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Best Seller</Text>
      <Text style={styles.subTitle}>Discover our most popular dishes!</Text>

      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.img}/>
        <Text style={styles.cardTitle}>Pancake Dessert</Text>
        <Text style={styles.price}>₱15.00</Text>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.img}/>
        <Text style={styles.cardTitle}>Pork Sisig with Rice</Text>
        <Text style={styles.price}>₱60.00</Text>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.img}/>
        <Text style={styles.cardTitle}>Tapsilog</Text>
        <Text style={styles.price}>₱60.00</Text>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.img}/>
        <Text style={styles.cardTitle}>Tosilog</Text>
        <Text style={styles.price}>₱60.00</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 5, textAlign: 'center' },
  subTitle: { fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center' },
  card: { marginBottom: 20, backgroundColor: '#f8f8f8', padding: 15, borderRadius: 10 },
  cardTitle: { fontSize: 18, marginTop: 10, fontWeight: '600' },
  price: { fontSize: 16, color: 'orange', fontWeight: '700' },
  img: { width: '100%', height: 150, borderRadius: 10 }
});
