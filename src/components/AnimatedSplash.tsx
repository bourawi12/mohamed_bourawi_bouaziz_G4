import { useRef } from "react";
import { Animated, Easing } from "react-native";
import BootSplash from "react-native-bootsplash";

type Props = {
  onFinish: () => void;
};

export default function AnimatedSplash({ onFinish }: Props) {
  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require("../../assets/bootsplash/manifest.json"),
    logo: require("../../assets/bootsplash/logo.png"),

    animate: () => {
      Animated.sequence([
        // ⬆️ Lift logo up slightly
        Animated.timing(translateY, {
          toValue: -20,
          duration: 220,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        // ⬇️ Drop logo down
        Animated.timing(translateY, {
          toValue: 500,
          duration: 280,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),

        // 🌫 Fade splash away
        Animated.timing(opacity, {
          toValue: 0,
          duration: 450,
          easing: Easing.out(Easing.ease),
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
          {
            transform: [{ translateY }],
          },
        ]}
      />
    </Animated.View>
  );
}
