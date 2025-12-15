import type { PropsWithChildren } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScreenTemplate(props: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex:1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        styles.container,
      ]}
    >
      <ScrollView style={styles.scrollView}>{props.children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});