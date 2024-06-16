import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function BannerTile({ bannerData }) {
  console.log("====================================");
  console.log(bannerData);
  console.log("====================================");
  return (
    <View style={styles.bannerListContainer}>
      <Pressable>
        <View style={styles.bannerListContainerInner}>
          <Image source={require("../../assets/images/banner2.png")} style={{ width: 250, height: 150 }} resizeMode="cover" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerListContainer: {
    height: 150,
    width: 250,
    backgroundColor: "pink",
    marginRight: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bannerListContainerInner: {
    overflow: "hidden",
  },
});
