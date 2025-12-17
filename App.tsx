import { useState } from "react";
import { View } from "react-native";
import BootSplash from "react-native-bootsplash";
import AnimatedSplash from "./src/components/AnimatedSplash";
import AppNavigation from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AppTemplate from "./src/templates/AppTemplate";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AppTemplate>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>

        {showSplash && (
          <AnimatedSplash
            onFinish={async () => {
              setShowSplash(false);
              await BootSplash.hide({ fade: false });
            }}
          />
        )}
      </View>
    </AppTemplate>
  );
}
