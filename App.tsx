import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import AppTemplate from './src/templates/AppTemplate';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';

function App() {
  return (
    <AppTemplate>
      <NavigationContainer>
       <AppNavigation />
      </NavigationContainer>
    </AppTemplate>
  );
}

export default App;