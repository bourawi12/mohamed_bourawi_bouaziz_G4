import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

interface HeaderProps {
  userName: string;
  location: string;
  profileImage?: string;
  onNotificationPress: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  location,
  profileImage,
  onNotificationPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : { uri: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yudi' }
          }
          style={styles.avatar}
        />
        <View>
         
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={14} color="#00582F" />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={onNotificationPress}
        activeOpacity={0.7}
      >
        <Ionicons name="notifications-outline" size={24} color="#00582F"  />
      
      </TouchableOpacity>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 70,
    gap: 4,
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default Header;