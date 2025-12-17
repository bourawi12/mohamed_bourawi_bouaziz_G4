import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ShoppingCard from '../molecules/ShoppingCard';
import { Product } from '../../types/Product';

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
  cardWrapper: {
    marginHorizontal: 20,
  },
});

export default ShoppingList;