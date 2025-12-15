import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const PublicStack = createNativeStackNavigator();
function PublicNavigation() {
  console.log("public navigation rendering"); // Add this
  // return null
  return (
    <PublicStack.Navigator initialRouteName="Product">
     
      <PublicStack.Screen name="SignUp" component={SignUpScreen} />
      <PublicStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <PublicStack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
    </PublicStack.Navigator>
  );
}

export default PublicNavigation;