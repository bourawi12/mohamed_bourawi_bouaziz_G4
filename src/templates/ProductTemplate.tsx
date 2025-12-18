import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import CupSizeList from "../components/organisms/CupSizeList"; // Assumed path
import Button from "../components/atoms/Button"; // Assumed path
// Assuming you have an icon library like 'react-native-vector-icons'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from "react-native-vector-icons/Ionicons"; // Using Expo's standard icons
import { useNavigation } from "@react-navigation/native";

export default function ProductTemplate() {

  const navigation = useNavigation<any>(); // simple & safe

  const [activeSize, setActiveSize] = useState("1");
  const [activeLevel, setActiveLevel] = useState("1");
  const insets = useSafeAreaInsets();

  const sizes = [
    { id: "1", name: "Small" },
    { id: "2", name: "Medium" },
    { id: "3", name: "Large" },
  ];

  const levels = [
    { id: "1", name: "No Sugar" },
    { id: "2", name: "Low" },
    { id: "3", name: "Medium" },
  ];

  const handleSizePress = (sizeId: string) => {
    setActiveSize(sizeId);
  };

  const handleLevelPress = (levelId: string) => {
    setActiveLevel(levelId);
  };

  // Replace with your actual image URL
  const PRODUCT_IMAGE =
    "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80";

  const descriptionText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....";

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Product Image and Header Icons */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: PRODUCT_IMAGE }} style={styles.productImage} />

        <View style={[styles.headerIcons, { paddingTop: insets.top + 10 }]}>
          <TouchableOpacity style={styles.iconBackground} onPress={() => navigation.goBack()}>
            <Ionicons
                        name='arrow-back'
                        size={20}
                        color="#00512C"
                      />
            {/* Replace with your actual icon component */}
         {/*    <MaterialCommunityIcons name="arrow-left" size={24} color="#FFFFFF" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBackground}>
            {/* Replace with your actual icon component */}
            <Ionicons
                        name='heart-outline'
                        size={20}
                        color="#00512C"
                      />
           {/*  <MaterialCommunityIcons name="heart-outline" size={24} color="#FFFFFF" /> */}
          </TouchableOpacity>
        </View>

        {/* Text Overlay (Cappuccino) */}
        <View style={styles.textOverlay}>
            
          <Text style={styles.productName}>Cappuccino</Text>
          <View style={styles.subInfoRow}>
          <Text style={styles.productSubName}>With Sugar</Text>
          
           
            <View style={styles.ratingBox}>
            {/*   <MaterialCommunityIcons name="star" size={14} color="#FFFFFF" /> */}
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Details Scrollable Card */}
      <View style={styles.detailsCard}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Cup Size */}
        
          <CupSizeList
            sectiontitle="Cup Size"
            sizes={sizes}
            activeSize={activeSize}
            onSizePress={handleSizePress}
           
          />

          {/* Sugar Level */}
         
          <CupSizeList
            sectiontitle="Level Sugar"
            sizes={levels}
            activeSize={activeLevel}
            onSizePress={handleLevelPress}
         
          />

          {/* About */}
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            {descriptionText}
            <Text style={styles.readMore}> Read More</Text>
          </Text>
        </ScrollView>
      </View>

      {/* Bottom Button */}
      <View style={[styles.bottomButtonContainer, { paddingBottom: insets.bottom || 20 }]}>
        <Button
          title="Add to cart | Rp 50.000"
          onPress={() => console.log("Add to Cart pressed")}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  // --- Image Section ---
  imageContainer: {
    width: "100%",
    height: 380, // Adjust height as needed
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  headerIcons: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    zIndex: 10,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  textOverlay: {
    position: "absolute",
    bottom: 30, 
    left: 20,
    right: 20,
  },
  productName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
  },
  productSubName: {
    fontSize: 16,
    color: "#ffffffff",
    opacity: 0.8,
  },
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 50,
    // Add a slight border effect to match the image
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  // --- Details Card Section ---
  detailsCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -50, // Pull the card up over the image
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden", // Important for the ScrollView
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 0,
    marginBottom: 8,
  },
  listContainer: {
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#757575",
    lineHeight: 22,
  },
  readMore: {
    fontWeight: "bold",
    color: "#333333",
  },

  // --- Bottom Button Section ---
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF", // Match the card background
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",

  },
  button: {
    height: 76,
    backgroundColor: "#00582F", // Dark Green
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});