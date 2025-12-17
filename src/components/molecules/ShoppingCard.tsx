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
  capsize?: string;
  sugarLevel?: string;
  quantity?: number;
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
  capsize,
  sugarLevel = 'No Sugar',
  quantity = 1,
  onAddPress,
  onFavoritePress,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      {/* LEFT SECTION: Image + Details */}
      <View style={styles.leftSection}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.detailsBelow}>
          <Text style={styles.detailText}>
            Cap Size: <Text style={styles.detailValue}>{capsize || 'Small'}</Text>
          </Text>
          <Text style={styles.detailText}>
            Level Sugar: <Text style={styles.detailValue}>{sugarLevel}</Text>
          </Text>
        </View>
      </View>

      {/* MIDDLE SECTION: Product Info */}
      <View style={styles.middleSection}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.currency}>RP</Text>
          <Text style={styles.price}>{price.toLocaleString('id-ID')}</Text>
        </View>
      </View>

      {/* RIGHT SECTION: Favorite + Quantity */}
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={onFavoritePress}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color="#EF4444"
          />
        </TouchableOpacity>

        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
            <Ionicons name="add" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  leftSection: {
    marginRight: 16,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  detailsBelow: {
    marginTop: 8,
  },

  detailText: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 2,
  },

  detailValue: {
    fontWeight: '600',
    color: '#1F2937',
  },

  middleSection: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 4,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  currency: {
    fontSize: 11,
    color: '#1F2937',
    marginRight: 2,
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  rightSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },

  quantityContainer: {
    alignItems: 'center',
    gap: 8,
  },

  quantity: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
  },

  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#00582F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingCard;