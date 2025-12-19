import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
/* import SignUpScreen from '../screens/SignUpScreen'; */
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import FavoriteTemplateScreen from '../screens/FavoriteTemplateScreen';
import CartScreen from '../screens/CartScreen';
import { RootStackParamList } from '../types/navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileTemplate from '../templates/ProfileTemplate';
import DeliveryTrackingScreen from '../screens/DeliveryTrackingScreen';
const PublicStack = createNativeStackNavigator<RootStackParamList>();

// Track navigation direction for animations
let navigationDirection: 'forward' | 'backward' = 'forward';
let previousTabScreen: string | null = null;

const tabScreens = ['Home', 'FavoriteTemplate', 'Cart'];
const tabOrder = { 'Home': 0, 'FavoriteTemplate': 1, 'Cart': 2 };

function PublicNavigation() {
  console.log("public navigation rendering");
  
  return (
    <PublicStack.Navigator 
      initialRouteName="Welcome"
      screenOptions={({ route, navigation }) => {
        // Determine animation based on navigation direction
        let animation: 'slide_from_left' | 'slide_from_right' | 'default' = 'slide_from_right';
        
        const state = navigation.getState();
        const routes = state?.routes || [];
        
        if (routes.length >= 2) {
          const currentRoute = routes[routes.length - 1];
          const previousRoute = routes[routes.length - 2];
          
          // Check if both are tab screens
          if (
            tabScreens.includes(currentRoute.name) && 
            tabScreens.includes(previousRoute.name)
          ) {
            const currentIndex = tabOrder[currentRoute.name as keyof typeof tabOrder];
            const previousIndex = tabOrder[previousRoute.name as keyof typeof tabOrder];
            
            // Moving backwards in tab order (right to left)
            if (currentIndex < previousIndex) {
              animation = 'slide_from_left';
            } else {
              animation = 'slide_from_right';
            }
          }
        }

        return {
          headerShown: false,
          animation: animation,
        };
      }}
    >
      <PublicStack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
      />
      <PublicStack.Screen 
        name="Login" 
        component={LoginScreen}
      />
    {/*   <PublicStack.Screen 
        name="SignUp" 
        component={SignUpScreen}
      /> */}
      <PublicStack.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <PublicStack.Screen 
        name="Product" 
        component={ProductScreen}
      />
      <PublicStack.Screen 
        name="FavoriteTemplate" 
        component={FavoriteTemplateScreen}
      />
      <PublicStack.Screen 
        name="Cart" 
        component={CartScreen}
      />
      <PublicStack.Screen
  name="profile"
  component={ProfileTemplate}
/>
<PublicStack.Screen
  name="DeliveryTracking"
  component={DeliveryTrackingScreen}
/>
    </PublicStack.Navigator>
  );
}

export default PublicNavigation;