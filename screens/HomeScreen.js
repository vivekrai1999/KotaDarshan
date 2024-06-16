import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import CategoryItemTile from "../components/Category/CategoryItemTile";
import PopularTodayTile from "../components/HomeScreen/PopularTodayTile";
import BannerTile from "../components/Banner/bannerTile";
import { FlatList, ScrollView } from "react-native";
import Search from "../components/Search";
import { CATEGORIES } from "../data/CategoryData";
import { PLACES } from "../data/PlacesData";

const Banners = [{ imgUrl: "../../assets/images/banner1.png" }, { imgUrl: "../../assets/images/banner2.png" }];

export default function HomeScreen({ navigation }) {
  function handleViewAll() {
    navigation.navigate("CategoryScreen");
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <Search />
      <View style={styles.categoryItemListContainer}>
        <View style={styles.categoryItemListHeader}>
          <Text style={styles.categoryItemListHeaderText}>Categories</Text>
          <Pressable onPress={handleViewAll}>
            <Text style={[styles.categoryItemListHeaderText, { fontFamily: "poppins-medium", fontSize: 12, color: "#455154" }]}>View All</Text>
          </Pressable>
        </View>
        <View style={styles.categoryItemList}>
          {CATEGORIES.slice(1, 5).map((category) => {
            return <CategoryItemTile itemsPerRow={4} data={category} />;
          })}
        </View>
      </View>
      <View style={styles.PopularListContainer}>
        <Text style={styles.popularListHeaderText}>Popular Today</Text>
        <View style={styles.popularGridList}>
          {PLACES.slice(0, 4).map((place) => (
            <PopularTodayTile data={place} />
          ))}
        </View>
      </View>
      <View style={styles.BannerContainer}>
        <FlatList contentContainerStyle={{ alignItems: "center" }} showsHorizontalScrollIndicator={false} horizontal={true} data={Banners} renderItem={(dataObj) => <BannerTile bannerData={dataObj.item} />} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryItemListContainer: {
    gap: 10,
  },
  categoryItemListHeaderText: {
    fontFamily: "poppins-bold",
    fontSize: 25,
  },
  categoryItemListHeader: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryItemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  PopularListContainer: {
    paddingHorizontal: 20,
    // backgroundColor: "red",
    marginBottom: 30,
  },
  popularListHeaderText: {
    fontFamily: "poppins-bold",
    fontSize: 25,
    marginBottom: 10,
  },
  popularGridList: {
    // backgroundColor: "blue",
    justifyContent: "center",
    // flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    // justifyContent: "space-between",
    // paddingHorizontal: 15,
    gap: 10,
    // marginBottom: 20,
  },
  BannerContainer: {
    paddingLeft: 20,
    marginBottom: 20,
    // height: 150,
    // backgroundColor: "red",
  },
});
