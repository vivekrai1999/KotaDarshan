import { View, Text, Image } from "react-native";
import { useFavourite } from "../contexts/FavouriteContext";
import { PLACES } from "../data/PlacesData";
import { FlatList } from "react-native";
import PlaceTile from "../components/Category/PlaceTile";
import { Pressable } from "react-native";

export default function FavouriteScreen({ route, navigation }) {
  const { favouriteIds } = useFavourite();

  function handleExploreNow() {
    navigation.navigate("CategoryScreen");
  }

  console.log("====================================");
  console.log(useFavourite());
  console.log("====================================");

  const favouritePlaces = PLACES.filter((placeObj) => favouriteIds.includes(placeObj.place_id));

  return (
    <View style={[favouritePlaces.length == 0 && { alignItems: "center", justifyContent: "center", flex: 1 }, { padding: 20 }]}>
      {favouritePlaces.length ? (
        <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} data={favouritePlaces} renderItem={(dataObj) => <PlaceTile placeData={dataObj.item} />} />
      ) : (
        <View style={{ overflow: "hidden", alignItems: "center", justifyContent: "center" }}>
          <Image style={{ width: 350, height: 350, opacity: 0.4 }} resizeMode="cover" source={require("../assets/images/nothing.png")} />
          <Text style={{ fontFamily: "poppins-bold", fontSize: 25, opacity: 0.2, textTransform: "capitalize", letterSpacing: 2 }}>No Favourites yet</Text>
          <View style={{ backgroundColor: "#8DD6F0", height: 50, width: 150, alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: 20 }}>
            <Pressable onPress={handleExploreNow}>
              <View>
                <Text style={{ fontFamily: "poppins-regular", color: "#fff" }}>Explore Now</Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
