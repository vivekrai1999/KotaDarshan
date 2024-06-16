import { View, Text, StyleSheet, Image } from "react-native";
import LikeIcon from "../../assets/svg/LikeIconFill";
import ShareIcon from "../../assets/svg/ShareIcon";
import SaveIcon from "../../assets/svg/SaveIconOutline";
import { Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFavourite, useFavoutite } from "../../contexts/FavouriteContext";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import Location from "../../assets/svg/Location";
import FavouriteIcon from "../../assets/svg/FavouriteIcon";
import LikeIconOutline from "../../assets/svg/LikeIconOutline";
import LikeIconFill from "../../assets/svg/LikeIconFill";

export default function PlaceTile({ placeData, setFavourite }) {
  const [likeData, setLikeData] = useState({ isLiked: false });
  const [shareData, setShareData] = useState({ isShared: false });
  const [saveData, setSaveData] = useState({ isSaved: false });
  const { addFavourite, removeFavourite, favouriteIds } = useFavourite();

  const navigation = useNavigation();

  const isPlaceFavourite = favouriteIds.includes(placeData.place_id);

  function handleLike(id) {
    if (isPlaceFavourite) {
      removeFavourite(id);
    } else {
      addFavourite(id);
    }
  }
  function handleShare() {}
  function handleSave() {
    setSaveData((prevValue) => {
      return { isSaved: !prevValue.isSaved };
    });
  }
  function handlePlaceTilePress() {
    navigation.navigate("CategoryItemDetailsScreen", { data: placeData });
  }
  return (
    <Pressable onPress={handlePlaceTilePress}>
      <View style={styles.placeTileContainer}>
        <View style={styles.actionIconsContainer}>
          <Pressable onPress={() => handleLike(placeData.place_id)}>
            <View style={styles.actionIcon}>{isPlaceFavourite ? <LikeIconFill height={20} color={"red"} /> : <LikeIconOutline height={20} color={"#4c4c4c"} />}</View>
          </Pressable>
          <View style={styles.actionIcon}>
            <SaveIcon height={20} color={"#4c4c4c"} />
          </View>
        </View>
        <View style={styles.placeImageContainer}>
          <ImageBackground source={{ uri: placeData.main_image }} style={{ height: "100%", borderRadius: 20 }}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  placeTileContainer: {
    marginBottom: 20,
  },
  mainImageContainer: {
    backgroundColor: "red",
    width: "100%",
    height: "80%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  placeTileOverview: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  placeActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  placeDetailsContainer: {
    padding: 10,
  },
  placeImageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    height: 300,
  },
  actionIconsContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    zIndex: 5,
    top: 20,
    right: 20,
  },
  actionIcon: {
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: "#fff",

    borderRadius: 25,
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
    fontSize: 22,
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

  location: {
    fontFamily: "poppins-regular",
    color: "#fff",
    fontSize: 12,
  },
});
