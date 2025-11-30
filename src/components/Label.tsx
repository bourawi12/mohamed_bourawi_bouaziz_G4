import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TextProps,
} from 'react-native';

interface LabelProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function Label(props: LabelProps) {
  const { children, style, ...otherProps } = props;
  
  return (
    <Text
      {...otherProps}
      style={{
        ...styles.label,
        ...(style as any ?? {}),
      }}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    marginBottom: 8,
  },
});