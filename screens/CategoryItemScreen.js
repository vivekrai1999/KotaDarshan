import { FlatList, Text, View } from "react-native";
import { PLACES } from "../data/PlacesData";
import PlaceTile from "../components/Category/PlaceTile";
import { useFavourite } from "../contexts/FavouriteContext";

export default function CategoryItemScreen({ route, navigation }) {
  const categoryId = route.params.categoryData.category_id;
  const CategoryItems = PLACES.filter((place) => place.category_ids.includes(categoryId));

  return (
    <View style={{ padding: 20 }}>
      <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} data={CategoryItems} renderItem={(dataObj) => <PlaceTile placeData={dataObj.item} />} />
    </View>
  );
}
