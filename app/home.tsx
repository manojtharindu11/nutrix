import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { IconButton } from "react-native-paper";
import { fetchItems } from "@/services/api";
import ItemCard from "@/components/card";
import Item, { ItemWithReact } from "@/Interface/item";
import UserView from "@/components/user-view";
import commonStyles from "@/common/common-styles";
import { useNavigation } from "expo-router";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<ItemWithReact[]>([]);
  const [reactCount, setReactCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

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
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    console.log("Logout pressed");
    Alert.alert("Logging out", "You will be redirected to the login screen.");
    setTimeout(() => {
      navigation.navigate("login" as never);
    }, 2000);
  };

  useEffect(() => {
    handleFetchItems();
  }, [handleFetchItems]);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => alert(`Reacted items: ${reactCount}`)}
        >
          <IconButton iconColor="#006400" icon="heart" size={24} />
          <Text style={styles.floatingButtonText}>{reactCount}</Text>
        </TouchableOpacity>

        <IconButton icon="logout" size={24} onPress={handleLogout} />
      </View>

      <View style={styles.userCard}>
        <UserView />
      </View>
      <View style={styles.titleContainer}>
        <ImageBackground
          source={require("@/assets/images/fruit-line.png")}
          style={styles.imageBackground}
        >
          <Text style={[commonStyles.title, styles.titleText]}>Nutrix</Text>
        </ImageBackground>
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={[
            commonStyles.heading,
            { textAlign: "center", marginBottom: 16 },
          ]}
        >
          The best nutrition tips and items
        </Text>
        <Text
          style={[
            commonStyles.subHeading,
            { marginBottom: 16, textAlign: "center" },
          ]}
        >
          Here are some of the best nutrition items you can find around the
          world. Click on the heart icon to save your favorite items.
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#006400" style={styles.loader} />
      ) : (
        <FlatList
          style={styles.grid}
          data={items}
          keyExtractor={(item) => item.nix_item_id.toString()}
          renderItem={({ item }) => (
            <ItemCard item={item} onPress={() => handleItemClick(item)} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    paddingRight: 16,
  },
  userCard: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
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
  grid: {
    marginHorizontal: 16,
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  titleContainer: {
    alignItems: "baseline",
    marginVertical: 16,
  },
  titleText: {
    backgroundColor: "none",
    marginBottom: -50,
  },
  infoContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  imageBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    marginTop: 50,
  },
});

export default HomeScreen;
