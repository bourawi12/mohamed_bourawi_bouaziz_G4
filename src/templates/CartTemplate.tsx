import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ShoppingList from '../components/organisms/ShoppingList';
import Button from '../components/atoms/Button';
import BottomNavigation from '../components/organisms/BottomNavigation';
import { Product } from '../types/Product';
import { NavigationProp } from '../types/navigation';

export default function CartTemplate() {
  const navigation = useNavigation<NavigationProp>();
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Coffee',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
      category: '1',
      isFavorite: false,
      capsize: 'Small',
      sugarLevel: 'No Sugar',
      quantity: 2,
    },
    {
      id: '2',
      name: 'Coffee',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400',
      category: '1',
      isFavorite: true,
      capsize: 'Small',
      sugarLevel: 'No Sugar',
      quantity: 2,
    },
  ]);

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId);
    // Navigate to product detail screen
    navigation.navigate('Product', { productId });
  };

  const handleAddToCart = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newQuantity = Math.max((p.quantity || 1) - 1, 0);
          return { ...p, quantity: newQuantity };
        }
        return p;
      }).filter(p => (p.quantity || 0) > 0)
    );
  };

  const handleToggleFavorite = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  const handleBuyPress = () => {
    console.log('Proceeding to checkout');
    // Navigate to checkout or payment screen
    // navigation.navigate('Checkout');
  };

  // Calculate totals
  const subtotal = products.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0);
  const discount = 2500;
  const total = subtotal - discount;

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: 80 + insets.bottom }
        ]}
      >
        <Text style={styles.headerTitle}>Your Cart</Text>
        
        <ShoppingList
          title="Items in your cart"
          products={products}
          onProductPress={handleProductPress}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />

        <View style={styles.numberRow}>
          <Text style={styles.rowLabel}>Subtotal</Text>
          <Text style={styles.rowValue}>Rp {subtotal.toLocaleString('id-ID')}</Text>
        </View>

        <View style={styles.numberRow}>
          <Text style={styles.rowLabel}>Discount</Text>
          <Text style={styles.rowValue}>Rp {discount.toLocaleString('id-ID')}</Text>
        </View>

        <View style={styles.separator}></View>

        <View style={styles.numberRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>Rp {total.toLocaleString('id-ID')}</Text>
        </View>

        <View style={styles.separator}></View>

        <View style={styles.paymentSection}>
          <Text style={styles.paymentLabel}>Payment</Text>
          <View style={styles.separator3}></View>
          <View style={styles.paymentIcons}>
            <Image source={require('../../assets/Vector.png')} />
            <Image source={require('../../assets/Vector (1).png')} />
            <Image source={require('../../assets/Vector (2).png')} />
          </View>
        </View>

        <View>
          <Button 
            title="Buy" 
            style={styles.buyButton} 
            textStyle={styles.buyButtonText} 
            noPadding
            onPress={handleBuyPress}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNavContainer}>
        <BottomNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
    marginVertical: 8,
  },
  rowLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  rowValue: {
    fontSize: 16,
    color: '#1F2937',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
    marginHorizontal: 45,
  },
  separator3: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },
  paymentSection: {
    marginHorizontal: 45,
    marginBottom: 20,
  },
  paymentLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  paymentIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  buyButton: {
    marginTop: 30,
    backgroundColor: '#00582F',
    borderRadius: 30,
    width: 330,
    height: 38,
    marginHorizontal: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});