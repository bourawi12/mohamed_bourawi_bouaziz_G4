import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../atoms/ProductCard';
import { Product } from '../../types/Product';



interface ProductGridProps {
  title?: string;
  products: Product[];
  onProductPress: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onToggleFavorite: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  products,
  onProductPress,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard
              {...item}
              onPress={() => onProductPress(item.id)}
              onAddPress={() => onAddToCart(item.id)}
              onFavoritePress={() => onToggleFavorite(item.id)}
            />
          </View>
        )}
        columnWrapperStyle={styles.row}
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
    width: '48%',
  },
});

export default ProductGrid;