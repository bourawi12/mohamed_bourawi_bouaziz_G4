import { useEffect } from 'react';
import PublicNavigation from './PublicNavigation';
import BootSplash from "react-native-bootsplash";
function AppNavigation() {
  useEffect (() => {
   BootSplash.hide({fade: true});
   console.log("BootSplash has been hidden successfully");
  }, []);
  console.log("AppNavigation rendering"); // Add this
  return <PublicNavigation />;
}

export default AppNavigation;