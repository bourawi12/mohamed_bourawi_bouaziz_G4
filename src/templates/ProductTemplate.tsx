import { StyleSheet, Text, View } from "react-native";

export default function ProductTemplate() {
  return (
    <View style={styles.container}>
      <Text>Product Template</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});