import type { PropsWithChildren } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScreenTemplate from './ScreenTemplate';

export default function AppTemplate(props: PropsWithChildren) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#fff' }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  {props.children}
    </SafeAreaProvider>
  );
}