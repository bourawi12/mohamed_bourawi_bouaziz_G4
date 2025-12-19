// src/types/navigation.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Product: { productId: string };
  FavoriteTemplate: undefined;
  Cart: undefined;
  Welcome: undefined;
  profile: undefined;
  DeliveryTracking : undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;