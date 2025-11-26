import type { PropsWithChildren } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScreenTemplate(props: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: 'red',
        flex: 1,
      }}
    >
      <ScrollView style={{ backgroundColor: 'blue', flex: 1 }}>
        {props.children}
      </ScrollView>
    </View>
  );
}
