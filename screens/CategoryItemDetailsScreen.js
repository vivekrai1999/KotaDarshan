import { Text, View, Image, StyleSheet } from "react-native";
import SaveIcon from "../assets/svg/SaveIconOutline";
import FavouriteIcon from "../assets/svg/FavouriteIcon";
import LikeIcon from "../assets/svg/LikeIconFill";
import ShareIcon from "../assets/svg/ShareIcon";
import Location from "../assets/svg/Location";
import StarIcon from "../assets/svg/StarIcon";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width / 5;
const itemWidth = width - 15;

export default function CategoryItemDetailsScreen({ route, navigation }) {
  const placeData = route.params.data;
  const [isTextOpen, setIsTextOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(placeData.main_image);
  const detail = placeData.place_description;

  function handleSeeMore() {
    setIsTextOpen((prev) => !prev);
  }

  function handleThumbClick(item) {
    setActiveImage(item);
  }

  return (
    <ScrollView style={styles.placeDetailsContainer}>
      <View>
        <View style={styles.actionIconsContainer}>
          <SaveIcon height={20} color={"#4c4c4c"} />
        </View>
        <View style={styles.placeImageContainer}>
          <ImageBackground source={{ uri: activeImage }} style={{ height: "100%", borderRadius: 20 }}>
            <LinearGradient colors={["transparent", "#000"]} locations={[0.5, 1]} style={{ flex: 1, justifyContent: "flex-end" }}>
              <View style={styles.placeHeadingContainer}>
                <Text style={styles.placeHeadingContainerText}>{placeData.place_name}</Text>
                <View style={styles.placeOverviewContainerLeft}>
                  <View style={{ height: 20, width: 20, justifyContent: "center" }}>
                    <Location height={15} color={"red"} />
                  </View>
                  <Text style={styles.location}>Kunhadi, Kota</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.thumbsContainer}>
        {placeData.gallery_images.map((item, index) => (
          <Pressable onPress={() => handleThumbClick(item)}>
            <View key={index} style={{ margin: 5, height: 60, width: itemWidth, backgroundColor: "pink", borderRadius: 12, overflow: "hidden" }}>
              <Image source={{ uri: item }} style={{ height: "100%" }} />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  placeDetailsContainer: {
    padding: 10,
  },
  placeImageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    height: 300,
  },
  actionIconsContainer: {
    justifyContent: "center",
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 25,
    zIndex: 5,
    height: 50,
    width: 50,
    top: 20,
    right: 20,
  },
  tagPill: {
    backgroundColor: "red",
    height: 35,
    width: 65,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  tagPillText: {
    color: "white",
    fontFamily: "poppins-medium",
    fontSize: 12,
  },
  placeHeadingContainer: {
    paddingLeft: 20,
    paddingBottom: 15,
  },
  placeHeadingContainerText: {
    fontFamily: "poppins-medium",
    fontSize: 25,
    color: "#fff",
  },
  placeOverviewContainer: {
    // backgroundColor: "blue",
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeOverviewContainerLeft: {
    flexDirection: "row",
    gap: 6,
  },
  placeOverviewContainerRight: {
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 5,
    // alignItems: "center",
  },
  ratings: {
    fontFamily: "poppins-medium",
    color: "#455154",
  },
  location: {
    fontFamily: "poppins-regular",
    color: "#fff",
  },
  thumbsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
