import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/organisms/Header';
import SearchBar from '../components/molecules/SearchBar';
import CategoryList from '../components/organisms/CategoryList';
import ProductList from '../components/molecules/ProductList';
import ProductGrid, { Product } from '../components/molecules/ProductGrid';
import { TabType } from '../types/TabType';
import BottomNavigation from '../components/organisms/BottomNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ShoppingCard from '../components/molecules/ShoppingCard';
import ShoppingList from '../components/organisms/ShoppingList';
/* import BottomNavigation, { TabType } from '../components/organisms/BottomNavigation'; */

export default function CartTemplate() {
  const [activeCategory, setActiveCategory] = useState('1');
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Cappuccino',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
      category: '1',
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Cappuccino',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400',
      category: '1',
      isFavorite: true,
    },
    /* {
      id: '3',
      name: 'Cappuccino',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      category: '1',
      isFavorite: false,
    },
    {
      id: '4',
      name: 'Cappuccino',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
      category: '1',
      isFavorite: false,
    }, */
  ]);

  const [specialOffers, setSpecialOffers] = useState<Product[]>([
  {
    id: '5',
    name: 'Coffee',
    description: 'With Sugar',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
    category: '2',
    isFavorite: false,
  },
  {
    id: '6',
    name: 'Cappuccino',
    description: 'With Sugar',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400',
    category: '1',
    isFavorite: true,
  },
  {
    id: '7',
    name: 'Latte',
    description: 'Caramel Flavor',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1583267746720-87b5f1b9b2f3?w=400',
    category: '5',
    isFavorite: false,
  },
  {
    id: '8',
    name: 'Espresso',
    description: 'Strong & Hot',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400',
    category: '3',
    isFavorite: false,
  },
  
]);


  const categories = [
    { id: '1', name: 'Cappuccino' },
    { id: '2', name: 'Coffee' },
    { id: '3', name: 'Espresso' },
    { id: '4', name: 'Cortado' },
    { id: '5', name: 'Latte' },
    { id: '6', name: 'Americano' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    setActiveCategory(categoryId);
    console.log('Category selected:', categoryId);
  };

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId);
    // Navigate to product detail screen
  };

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
    // Add to cart logic
  };

  const handleToggleFavorite = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
    setSpecialOffers((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  const handleNotificationPress = () => {
    console.log('Notifications pressed');
  };

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
    console.log('Tab pressed:', tab);
    // Navigate to different screens based on tab
  };

 const insets = useSafeAreaInsets();  // Get safe area values

return (
  <View style={[styles.container, { paddingTop: insets.top }]}>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingBottom: 80 + insets.bottom }  // Adjust '80' to your bottom nav height (measure via debugger or estimate)
      ]}
    >
     
      <Text style={{fontSize:24, fontWeight:'bold', margin:20}}>Your Cart</Text>
      <ShoppingList
      title="Items in your cart"
        products={products}
        onProductPress={handleProductPress}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
      />
     {/*  <ShoppingCard/> */}
    </ScrollView>
    {/* Bottom Navigation - Now absolute */}
    <View style={styles.bottomNavContainer}>
      <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,  
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  bottomNavContainer: { 
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF', 
    
  },
});