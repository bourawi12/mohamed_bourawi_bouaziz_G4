import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../atoms/ProductCard';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isFavorite: boolean;
}

interface ProductListProps {
  products: Product[];
  onProductPress: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductPress,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            horizontal
            onPress={() => onProductPress(item.id)}
            onAddPress={() => onAddToCart(item.id)}
            onFavoritePress={() => onToggleFavorite(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  listContent: {
    paddingHorizontal: 20,
  },
});

export default ProductList;