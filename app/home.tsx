import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { fetchItems } from "@/services/api";
import ItemCard from "@/components/card";
import { Item, ItemWithReact } from "@/Interface/item";
import UserView from "@/components/user-view";
import commonStyles from "@/common/common-styles";

const HomeScreen: React.FC = () => {
  const [items, setItems] = useState<ItemWithReact[]>([]);
  const [reactCount, setReactCount] = useState<number>(0);

  const handleItemClick = useCallback(
    (item: ItemWithReact) => {
      item.react = !item.react;
      setReactCount((prevCount) =>
        item.react ? prevCount + 1 : prevCount - 1
      );
      setItems((prevItems) => [...prevItems]);
    },
    [setReactCount, setItems]
  );

  const handleFetchItems = useCallback(async () => {
    try {
      const data: Item[] = await fetchItems();
      const updatedItems: ItemWithReact[] = data.map((item) => ({
        ...item,
        react: false,
      }));
      setItems(updatedItems);
    } catch (error) {
      Alert.alert("Error fetching items", "Please try again later.");
      console.error("Error fetching items:", error);
    }
  }, []);

  useEffect(() => {
    handleFetchItems();
  }, [handleFetchItems]);

  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => alert(`Reacted items: ${reactCount}`)}
        >
          <IconButton iconColor="#ff69b4" icon="heart" size={24} />
          <Text style={styles.floatingButtonText}>{reactCount}</Text>
        </TouchableOpacity>

        <IconButton
          icon="logout"
          size={24}
          onPress={() => console.log("Logout pressed")}
        />
      </View>

      <UserView />

      <FlatList
        data={items}
        keyExtractor={(item) => item.nix_item_id.toString()}
        renderItem={({ item }) => (
          <ItemCard item={item} onPress={() => handleItemClick(item)} />
        )}
      />

      <Button
        mode="contained"
        style={styles.reloadButton}
        onPress={handleFetchItems}
      >
        Reload Items
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    justifyContent:"flex-end",
    alignItems: "center",
    position: "relative",
    paddingRight: 16,
    },
  logoutButton: {
    backgroundColor: "#f44336",
  },
  floatingButton: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButtonText: {
    flexDirection: "row",
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  reloadButton: {
    margin: 16,
    backgroundColor: "#4caf50",
  },
});

export default HomeScreen;
