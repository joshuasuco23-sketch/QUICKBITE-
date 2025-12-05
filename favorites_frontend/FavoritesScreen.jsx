import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FavoritesScreen() {
  const data = [
    { id: "1", name: "Ampalaya", desc: "Lorem ipsum dolor sit amet.", img: "https://i.imgur.com/lW0GH4X.jpeg" },
    { id: "2", name: "Pork Sisig with Rice", desc: "Lorem ipsum dolor sit amet.", img: "https://i.imgur.com/PUjgJ1p.jpeg" },
    { id: "3", name: "Ham With Rice", desc: "Lorem ipsum dolor sit amet.", img: "https://i.imgur.com/N5nXH9J.jpeg" },
    { id: "4", name: "Longganisa With Rice Egg", desc: "Lorem ipsum dolor sit amet.", img: "https://i.imgur.com/gEccgRE.jpeg" },
    { id: "5", name: "Vegetable Mix", desc: "Lorem ipsum dolor sit amet.", img: "https://i.imgur.com/lFv2N0k.jpeg" },
    { id: "6", name: "Corned Beef w/ Egg", desc: "Lorem ipsum dolor sit amet.", img: "https://i.imgur.com/FF6nFqM.jpeg" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <TouchableOpacity style={styles.heart}>
        <Ionicons name="heart" size={18} color="#f4b400" />
      </TouchableOpacity>

      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.subtitle}>It’s time to buy your favorite dish.</Text>

        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 120 }}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={26} color="#fff" />
        <Ionicons name="fast-food-outline" size={26} color="#fff" />
        <Ionicons name="heart" size={26} color="#fff" />
        <Ionicons name="receipt-outline" size={26} color="#fff" />
        <Ionicons name="person-outline" size={26} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c63b6",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 25,
    alignItems: "center",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    left: 20,
    top: 50,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#e8b800",
    marginBottom: 20,
  },
  card: {
    width: "48%",
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 16,
  },
  heart: {
    position: "absolute",
    right: 8,
    top: 8,
    backgroundColor: "#fff",
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  foodName: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    textAlign: "center",
    color: "#777",
    paddingHorizontal: 5,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#f5c400",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});