import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

interface CategoryChipProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const CategoryChip: React.FC<CategoryChipProps> = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.chipActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.chipContent}>
        <Ionicons 
          name="cafe-outline" 
          size={16} 
          color={active ? '#FFFFFF' : '#4B5563'} 
        />
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
  },
  chipActive: {
    backgroundColor: '#15803D',
  },
  chipContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
});

export default CategoryChip;
