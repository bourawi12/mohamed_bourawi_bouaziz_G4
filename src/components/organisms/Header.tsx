import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getAvatarUrl } from '../../utils/avatar';

interface HeaderProps {
  userName: string;
  location: string;
  profileImage?: string;
  onNotificationPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, location, profileImage, onNotificationPress }) => {
  const navigation = useNavigation<any>();
  const avatarUrl = getAvatarUrl(userName);

  const goToProfile = () => navigation.navigate('profile');

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <TouchableOpacity onPress={goToProfile} activeOpacity={0.7}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </TouchableOpacity>

        <View style={{ justifyContent: 'center' }}>
          <View style={styles.locationContainer}>
  <Ionicons name="location" size={14} color="#00582F" />
  <Text style={styles.location} numberOfLines={1}>
    {location === 'Fetching location...' ? 'Loading location...' : location}
  </Text>
</View>

        </View>
      </View>

      <TouchableOpacity style={styles.notificationButton} onPress={onNotificationPress} activeOpacity={0.7}>
        <Ionicons name="notifications-outline" size={24} color="#00582F" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 },
  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#E5E7EB' },
  locationContainer: { flexDirection: 'row', alignItems: 'center', gap: 4, maxWidth: 200 },
  location: { fontSize: 12, color: '#6B7280' },
  notificationButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
});

export default Header;
