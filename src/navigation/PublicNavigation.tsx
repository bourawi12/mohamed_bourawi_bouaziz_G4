import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import FavoriteTemplateScreen from '../screens/FavoriteTemplateScreen';
import CartScreen from '../screens/CartScreen';
import { RootStackParamList } from '../types/navigation';

const PublicStack = createNativeStackNavigator<RootStackParamList>();

function PublicNavigation() {
  console.log("public navigation rendering");
  
  return (
    <PublicStack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <PublicStack.Screen 
        name="Login" 
        component={LoginScreen}
      />
      <PublicStack.Screen 
        name="SignUp" 
        component={SignUpScreen}
      />
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
    </PublicStack.Navigator>
  );
}

export default PublicNavigation;