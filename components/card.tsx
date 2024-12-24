import React from "react";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, StyleSheet, Image } from "react-native";
import { ItemWithReact } from "@/Interface/item";

interface ItemCardProps {
  item: ItemWithReact;
  onPress: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.cardContent}>
        <Image source={{ uri: item.photo.thumb }} style={styles.image} />

        <View style={styles.cardDetails}>
          <Text style={styles.itemTitle}>{item.food_name}</Text>

          <Text style={styles.itemDescription}>{item.brand_name}</Text>

          <Text style={styles.itemServing}>
            {item.serving_qty} {item.serving_unit}
          </Text>

          <Text style={styles.itemCalories}>Calories: {item.nf_calories}</Text>
        </View>

        {item.react === true ? (
          <View style={styles.reactIcon}>
            <Icon name="favorite" size={20} color="#006400" />
          </View>
        ) : (
          <View style={styles.reactIcon}>
            <Icon name="favorite-border" size={20} color="#006400" />
          </View>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 4,
    margin: 10,
    alignItems: "center",
    paddingVertical: 15,
    width: 200,
    height: 300,
  },
  cardContent: {
    alignItems: "center",
    width: 180,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: "#ccc",
    resizeMode: "cover",
  },
  cardDetails: {
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  itemServing: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  itemCalories: {
    fontSize: 14,
    color: "#ff6347",
    fontWeight: "600",
  },
  reactIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default ItemCard;
