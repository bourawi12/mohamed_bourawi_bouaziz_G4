import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../atoms/ProductCard';
import ShoppingCard from '../molecules/ShoppingCard';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isFavorite: boolean;
}

interface ShoppingListProps {
  title?: string;
  products: Product[];
  onProductPress: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
  title,
  products,
  onProductPress,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <View style={styles.container}>
      
      <FlatList
  data={products}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.cardWrapper}>
      <ShoppingCard
        {...item}
        onPress={() => onProductPress(item.id)}
        onAddPress={() => onAddToCart(item.id)}
        onFavoritePress={() => onToggleFavorite(item.id)}
      />
    </View>
  )}
  scrollEnabled={false}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  row: {
  paddingHorizontal: 20,
  justifyContent: 'space-between',
},
cardWrapper: {
  marginVertical: 0,
  marginHorizontal: 40,
},
});

export default ShoppingList;