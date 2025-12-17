import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import BootSplash from "react-native-bootsplash";

type Props = {
  onFinish: () => void;
};

export default function AnimatedSplash({ onFinish }: Props) {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
const translateY = useRef(new Animated.Value(0)).current;
  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require("../../assets/bootsplash/manifest.json"),
    logo: require("../../assets/bootsplash/logo.png"),

    animate: () => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.85,
          duration: 600,
          useNativeDriver: true,
        }),
        
      ]).start(onFinish);
    },
  });

  return (
    <Animated.View
      {...container}
      style={[container.style, { opacity }]}
    >
      <Animated.Image
        {...logo}
        style={[
          logo.style,
          { transform: [{ scale }] },
        ]}
      />
    </Animated.View>
  );
}
