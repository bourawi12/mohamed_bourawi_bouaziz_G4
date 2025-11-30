import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import Input from './Input';
import Label from './Label';
import Message from './message';

interface FormFieldProps extends TextInputProps {
  label?: string;
  message?: string;
  messageType?: 'error' | 'success' | 'warning' | 'info';
  containerStyle?: StyleProp<ViewStyle>;
  required?: boolean;
}

export default function FormField(props: FormFieldProps) {
  const {
    label,
    message,
    messageType = 'error',
    containerStyle,
    required = false,
    ...inputProps
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Label style={styles.label}>
          {label}
          {required && <Label style={styles.required}> *</Label>}
        </Label>
      )}
      
      <Input {...inputProps} />
      
      {message && (
        <Message type={messageType}>
          {message}
        </Message>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  label: {
    marginBottom: 8,
  },
  required: {
    color: "#DC2626",
  },
});