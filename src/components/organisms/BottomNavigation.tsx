import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type TabType = 'home' | 'favorite' | 'cart' | 'profile';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
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
          onPress={() => onTabPress(tab.id)}
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