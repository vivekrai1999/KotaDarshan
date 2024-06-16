import { View, ScrollView, StyleSheet, Text } from "react-native";
import CategoryItemTile from "../components/Category/CategoryItemTile";
import Search from "../components/Search";
import { CATEGORIES } from "../data/CategoryData";

export default function CategoryScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <Search />
      <Text style={styles.categoryItemListHeaderText}>Categories</Text>
      <View style={styles.categoryListContainer}>
        <View style={styles.categoryListContainerInner}>
          {CATEGORIES.map((category) => {
            return <CategoryItemTile key={category.category_id} variableWidth={10} itemsPerRow={3} data={category} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryItemListHeaderText: {
    fontFamily: "poppins-bold",
    fontSize: 25,
    paddingLeft: 15,
    marginBottom: 15,
  },
  categoryListContainerInner: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  categoryListContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    // height: 500,
    // backgroundColor: "red",
  },
});
