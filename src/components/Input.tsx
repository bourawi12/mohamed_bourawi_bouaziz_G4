import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

export default function Input(props: InputProps) {
  return (
    <TextInput
      {...props}
      style={{
        ...styles.input,
        ...(props.style as any ?? {}),
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
});