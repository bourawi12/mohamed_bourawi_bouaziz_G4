import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export async function getFavorites() {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? JSON.parse(json) : [];
}

export async function addToFavorites(coffee: any) {
  const favorites = await getFavorites();
  const updated = [...favorites, coffee];
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export async function removeFromFavorites(id: string) {
  const favorites = await getFavorites();
  const updated = favorites.filter((c: any) => c.id !== id);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}
