import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ShoppingCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onAddPress: () => void;
  onFavoritePress: () => void;
  onPress: () => void;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({
  name,
  description,
  price,
  image,
  isFavorite,
  onAddPress,
  onFavoritePress,
  onPress,
}) => {
  return (
    <TouchableOpacity >
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      {/* LEFT: Product Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* RIGHT: Product Info */}
      <View style={styles.info}>
        {/* Name + Heart */}
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          <TouchableOpacity onPress={onFavoritePress}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color="#EF4444"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{description}</Text>

        {/* Price + Add */}
        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.currency}>RP</Text>
            <Text style={styles.price}>
              {price.toLocaleString('id-ID')}
            </Text>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
            <Ionicons name="add" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
     
    </TouchableOpacity>
    <Text>ssss</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    resizeMode: 'cover',
    marginRight: 12,
  },

  info: {
    flex: 1,
    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    marginRight: 8,
  },

  description: {
    fontSize: 12,
    color: '#9CA3AF',
    marginVertical: 4,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  currency: {
    fontSize: 10,
    color: '#1F2937',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00512C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingCard;
