import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={22} color="#8AAE9E" />
<TextInput
        style={styles.input}
        placeholder="Search coffee..."
        value={value}
        onChangeText={onChangeText}
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
