import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CategoryChip from '../molecules/CategoryChip';
import CupSizeChip from '../molecules/CupSizeChip';

interface Size {
  id: string;
  name: string;
}

interface CupSizeListProps {
  sizes: Size[];
  activeSize: string;
  sectiontitle : string;
  onSizePress: (sizeId: string) => void;
}

const CupSizeList: React.FC<CupSizeListProps> = ({
  sizes,
  sectiontitle,
  activeSize,
  onSizePress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sectiontitle}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sizes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CupSizeChip
            label={item.name}
            active={activeSize === item.id}
            onPress={() => onSizePress(item.id)}
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

export default CupSizeList;