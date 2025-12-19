
import React, { useState, useMemo, useEffect } from 'react';
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
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import { Product } from '../types/Product';
import { TabType } from '../types/TabType';
import BottomNavigation from '../components/organisms/BottomNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProductGrid from '../components/molecules/ProductGrid';
import { useNavigation } from '@react-navigation/native';

export default function HomeTemplate() {
  const navigation = useNavigation<any>();
const [location, setLocation] = useState('Fetching location...');
  const [activeCategory, setActiveCategory] = useState<string>('');
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
      category: '2',
      isFavorite: true,
    },
    {
      id: '3',
      name: 'Cappuccino',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      category: '3',
      isFavorite: false,
    },
    {
      id: '4',
      name: 'Cappuccino',
      description: 'With Sugar',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
      category: '4',
      isFavorite: false,
    },
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
    {
      id: '9',
      name: 'Americano',
      description: 'Classic Black Coffee',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1565679594661-ec7c57e9d6e8?w=400',
      category: '6',
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
  Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'whenInUse',
  });

  const getAddressFromCoords = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`,
      {
        headers: {
          'User-Agent': 'CoffeeApp/1.0 (contact@coffeeapp.com)',
          'Accept': 'application/json',
        },
      }
    );

    const data = await response.json();
    setLocation(data.display_name || 'Address not found');
  } catch (error) {
    console.log('Reverse geocoding error:', error);
    setLocation('Error fetching address');
  }
};



  // Get current location and fetch address
  const getLocation = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        setLocation('Permission denied');
        return;
      }
    } else {
      Geolocation.requestAuthorization();
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`); // temporary
        getAddressFromCoords(latitude, longitude); // fetch human-readable address
      },
      (error) => {
        console.log('Location error:', error);
        setLocation('Location unavailable');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);


  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (!activeCategory || activeCategory === '') return products; // Show all if no category selected
    return products.filter(product => product.category === activeCategory);
  }, [products, activeCategory]);

  const handleCategoryPress = (categoryId: string) => {
    // Toggle category: if clicking the active category, deactivate it
    if (activeCategory === categoryId) {
      setActiveCategory('');
      console.log('Category deselected');
    } else {
      setActiveCategory(categoryId);
      console.log('Category selected:', categoryId);
    }
  };

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId);
    navigation.navigate('Product', { productId });
  };

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
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
  };

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
        {/* Header */}
        <Header
          userName="Yudi"
          location={location}
          onNotificationPress={handleNotificationPress}
        />
        {/* Search Bar */}
        <View style={styles.section}>
          <SearchBar />
        </View>
        {/* Categories */}
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryPress={handleCategoryPress}
        />
        {/* Products List - HORIZONTAL SCROLL - FILTERED */}
        <ProductList
          products={filteredProducts}
          onProductPress={handleProductPress}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
        {/* Special Offers - VERTICAL 2 COLUMNS - ALWAYS SHOW ALL */}
        <ProductGrid
          title="Special Offer"
          products={specialOffers}
          onProductPress={handleProductPress}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
      </ScrollView>
      {/* Bottom Navigation */}
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