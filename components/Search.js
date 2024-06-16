import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput } from "react-native";
export default function Search() {
  return (
    <View style={styles.searchInputContainer}>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <View style={{ paddingRight: 20, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", borderTopRightRadius: 15, borderBottomRightRadius: 15, height: "75%" }}>
        <Ionicons name="search-outline" style={{ fontSize: 22 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    height: "75%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 80,
    overflow: "hidden",
    justifyContent: "center",
  },
});
