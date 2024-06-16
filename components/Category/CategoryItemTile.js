import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function CategoryItemTile({ itemsPerRow, variableWidth = 0, data }) {
  const width = Dimensions.get("window").width - 50;
  const itemWidth = width / itemsPerRow;

  const navigation = useNavigation();

  function handleCategoryPress() {
    navigation.navigate("CategoryItemScreen", { categoryData: data });
  }

  return (
    <View style={[styles.categoryTile, { width: itemWidth - variableWidth, height: itemWidth, elevation: 1 }]}>
      <LinearGradient colors={data.category_color} locations={[0, 0.75]}>
        <View style={[styles.categoryTile, { width: itemWidth - variableWidth, height: itemWidth }]}>
          <Pressable onPress={handleCategoryPress} style={[styles.categoryTileButton, { paddingTop: itemsPerRow === 4 ? 0 : 15 }]}>
            {data?.category_icon}
            <View style={styles.categoryTileInner}>
              <Text style={styles.categoryTileText}>{data.category_name}</Text>
            </View>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTile: {
    // backgroundColor: "green",
    borderRadius: 15,
    // elevation: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    // elevation: 5,
  },
  categoryTileButton: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",

    // gap: 20,
  },
  categoryTileInner: {},
  categoryTileText: {
    marginBottom: 5,
    fontFamily: "poppins-medium",
    fontSize: 11,
    color: "#455154",
  },
});
