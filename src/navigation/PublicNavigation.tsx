import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import FavoriteTemplateScreen from '../screens/FavoriteTemplateScreen';
import CartScreen from '../screens/CartScreen';
const PublicStack = createNativeStackNavigator();
function PublicNavigation() {
  console.log("public navigation rendering"); // Add this
  // return null
  return (
    <PublicStack.Navigator initialRouteName="Cart">
     
      <PublicStack.Screen name="SignUp" component={SignUpScreen} />
      <PublicStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <PublicStack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
      <PublicStack.Screen name="FavoriteTemplate" component={FavoriteTemplateScreen} options={{ headerShown: false }} />
      <PublicStack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
    </PublicStack.Navigator>
  );
}

export default PublicNavigation;