// screens/HomeScreen.tsx

import ItemCard from "@/components/card";
import Item from "@/Interface/item";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const HomeScreen: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [reactCount, setReactCount] = useState<number>(0); // Define the type of clickCount as number

  const handleItemClick = () => {
    setReactCount(reactCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.nix_item_id}
        renderItem={({ item }) => (
          <ItemCard item={item} onPress={handleItemClick} />
        )}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => alert("Item clicked count: " + reactCount)}
      >
        <Text style={styles.floatingButtonText}>{reactCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#888",
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#ff6347",
    padding: 20,
    borderRadius: 50,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default HomeScreen;
