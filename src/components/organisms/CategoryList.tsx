import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CategoryChip from '../molecules/CategoryChip';

interface Category {
  id: string;
  name: string;
}

interface CategoryListProps {
  categories: Category[];
  activeCategory: string;
  onCategoryPress: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  onCategoryPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryChip
            label={item.name}
            active={activeCategory === item.id}
            onPress={() => onCategoryPress(item.id)}
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});

export default CategoryList;