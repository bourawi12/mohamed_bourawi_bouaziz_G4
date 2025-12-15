import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onAddPress: () => void;
  onFavoritePress: () => void;
  onPress: () => void;
  horizontal?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  isFavorite,
  onAddPress,
  onFavoritePress,
  onPress,
  horizontal = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, horizontal && styles.cardHorizontal]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Image with shadow */}
      <View style={styles.imageShadow}>
        <Image source={{ uri: image }} style={styles.image} />
        
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={20}
            color="#EF4444"
          />
        </TouchableOpacity>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.footer}>
          <View>
            <Text style={styles.currency}>RP </Text>
            <Text style={styles.price}>{price.toLocaleString('id-ID')}</Text>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={onAddPress}
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingBottom: 12,
  },
  cardHorizontal: {
    width: 150,
    marginRight: 16,
    marginBottom: 0,
  },
  imageShadow: {
    width: '95%',
    height: 105,
    alignSelf: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: '#fff', // needed for shadow on Android
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
   
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 0,
  },
  description: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currency: {
    fontSize: 10,
    color: '#1F2937',
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#00512C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
