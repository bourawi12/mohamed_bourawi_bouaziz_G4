// src/utils/navigationHelper.ts
import { NavigationProp } from '../types/navigation';

type TabRoute = 'Home' | 'FavoriteTemplate' | 'Cart';

const tabOrder: TabRoute[] = ['Home', 'FavoriteTemplate', 'Cart'];

export const navigateWithDirection = (
  navigation: NavigationProp,
  currentRoute: string,
  targetRoute: TabRoute,
  params?: any
) => {
  const currentIndex = tabOrder.indexOf(currentRoute as TabRoute);
  const targetIndex = tabOrder.indexOf(targetRoute);

  // Determine animation based on direction
  let animation: 'slide_from_left' | 'slide_from_right' = 'slide_from_right';
  
  if (currentIndex !== -1 && targetIndex !== -1) {
    // Moving left (backwards in tab order)
    if (targetIndex < currentIndex) {
      animation = 'slide_from_left';
    }
  }

  // Navigate with the appropriate animation
  navigation.navigate(targetRoute as any, params);
};