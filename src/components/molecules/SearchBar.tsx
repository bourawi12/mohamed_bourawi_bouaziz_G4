import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color="#8AAE9E" />
<FontAwesome name="search" size={20} color="#8AAE9E" />
      <TextInput
        style={styles.input}
        placeholder="Search Coffee ..."
        placeholderTextColor="#8AAE9E"
      />

      <Ionicons name="options-outline" size={22} color="#1C4E3D" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
  },
});
