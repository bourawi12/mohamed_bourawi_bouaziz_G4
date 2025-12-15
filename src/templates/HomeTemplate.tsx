import { PropsWithChildren, useState } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  StatusBar,
  ScrollView 
} from "react-native";
import SearchBar from "../components/molecules/SearchBar";
import CategoryList from "../components/organisms/CategoryList";
import ProductCard from "../components/molecules/ProductCard";

export default function HomeTemplate(props: PropsWithChildren) {
  const [activeCategory, setActiveCategory] = useState('1');

  // Sample categories data - replace with your actual data
  const categories = [
    { id: '1', name: 'Cappuccino' },
    { id: '2', name: 'Coffee' },
    { id: '3', name: 'Espresso' },
    { id: '4', name: 'Cortado' },
    { id: '5', name: 'Latte' },
    { id: '6', name: 'Americano' },
    { id: '7', name: 'Mocha' },
    { id: '8', name: 'Macchiato' },
    { id: '9', name: 'Flat White' },
    { id: '10', name: 'Affogato' },
    { id: '11', name: 'Ristretto' },
    { id: '12', name: 'Lungo' },
    { id: '13', name: 'Doppio' },
    { id: '14', name: 'Turkish' },
    { id: '15', name: 'Irish' },
    { id: '16', name: 'Vienna' },
    { id: '17', name: 'Frappe' },
    { id: '18', name: 'Cold Brew' },
    { id: '19', name: 'Nitro' },
    { id: '20', name: 'Pour Over' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    setActiveCategory(categoryId);
    console.log('Selected category:', categoryId);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning, Yudi</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <SearchBar />
        </View>

        {/* Categories */}
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryPress={handleCategoryPress}
        />

        {/* Rest of your content goes here */}
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Selected Category: {categories.find(c => c.id === activeCategory)?.name}
          </Text>
          <ProductCard onPress={() => console.log('Product Card Pressed')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentText: {
    fontSize: 16,
    color: '#6B7280',
  },
});