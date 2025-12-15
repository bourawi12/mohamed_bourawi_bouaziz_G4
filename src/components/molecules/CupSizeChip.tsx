import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

interface CupSizeChipProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const CupSizeChip: React.FC<CupSizeChipProps> = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.chipActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.chipContent}>
       
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginRight: 20,
    
  },
  chipActive: {
    backgroundColor: '#00582F',
  },
  chipContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chipText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4B5563',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
});

export default CupSizeChip;
