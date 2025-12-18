import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export async function seedFavoritesIfNeeded(initialData: any[]) {
  const existing = await AsyncStorage.getItem(FAVORITES_KEY);

  if (!existing) {
    await AsyncStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(initialData)
    );
  }
}
