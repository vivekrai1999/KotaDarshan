import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";

export default function PopularTodayTile({ data }) {
  const navigation = useNavigation();
  function handlePlaceTilePress() {
    navigation.navigate("CategoryItemDetailsScreen", { data: data });
  }
  return (
    <View style={styles.popularTodayTileContainer}>
      <Pressable onPress={handlePlaceTilePress} style={{ width: "100%", height: "100%" }}>
        <ImageBackground source={{ uri: data.main_image }} style={{ width: "100%", height: "100%" }} resizeMode="cover">
          <LinearGradient colors={["transparent", "#000"]} locations={[0.5, 1]} style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={{ paddingLeft: 15, paddingBottom: 15, height: "30%", width: "90%", justifyContent: "flex-end" }}>
              <Text style={{ color: "#fff", fontFamily: "poppins-medium", fontSize: 13 }}>{data.place_name}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const width = Dimensions.get("window").width;
const itemWidth = width / 2;

const styles = StyleSheet.create({
  popularTodayTileContainer: {
    backgroundColor: "#fff",
    width: itemWidth - 30,
    height: itemWidth + 10,
    borderRadius: 15,
    // elevation: 5,
    overflow: "hidden",
    // alignItems: "center",
    // justifyContent: "center",
  },
  popularTextContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    paddingHorizontal: 4,
  },
  popularText: {
    fontFamily: "poppins-medium",
    fontSize: 11,
    color: "#455154",
  },
});
