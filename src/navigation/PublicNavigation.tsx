import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const PublicStack = createNativeStackNavigator();
function PublicNavigation() {
  return (
    <PublicStack.Navigator initialRouteName="SignUp">
      <PublicStack.Screen name="Login" component={LoginScreen} />
      <PublicStack.Screen name="SignUp" component={SignUpScreen} />
    </PublicStack.Navigator>
  );
}

export default PublicNavigation;