import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '../../types/navigation';

export type TabType = 'home' | 'favorite' | 'cart' | 'profile';

interface BottomNavigationProps {
  activeTab?: TabType;
  onTabPress?: (tab: TabType) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab: propActiveTab,
  onTabPress: propOnTabPress,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();

  // Map route names to tab types
  const getActiveTabFromRoute = (): TabType => {
    switch (route.name) {
      case 'Home':
        return 'home';
      case 'FavoriteTemplate':
        return 'favorite';
      case 'Cart':
        return 'cart';
      case 'profile':
        return 'profile';
      default:
        return 'home';
    }
  };

  const activeTab = propActiveTab || getActiveTabFromRoute();

  const handleTabPress = (tab: TabType) => {
    // Call the prop callback if provided
    if (propOnTabPress) {
      propOnTabPress(tab);
    }

    // Navigate to the appropriate screen
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'favorite':
        navigation.navigate('FavoriteTemplate');
        break;
      case 'cart':
        navigation.navigate('Cart');
        break;
      case 'profile':
        // Add profile screen navigation when ready
        navigation.navigate('profile');
        break;
    }
  };

  const tabs: { id: TabType; icon: string }[] = [
    { id: 'home', icon: 'home' },
    { id: 'favorite', icon: 'heart' },
    { id: 'cart', icon: 'cart' },
    { id: 'profile', icon: 'person' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => handleTabPress(tab.id)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={activeTab === tab.id ? (tab.icon as any) : `${tab.icon}-outline` as any}
            size={26}
            color={activeTab === tab.id ? '#15803D' : '#9CA3AF'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 10,
  },
  tab: {
    padding: 8,
  },
});

export default BottomNavigation;