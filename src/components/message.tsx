import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TextProps,
} from 'react-native';

interface MessageProps extends TextProps {
  children: React.ReactNode;
  type?: 'error' | 'success' | 'warning' | 'info';
  style?: StyleProp<TextStyle>;
}

export default function Message(props: MessageProps) {
  const { children, type = 'error', style, ...otherProps } = props;
  
  const getTypeStyle = () => {
    switch (type) {
      case 'error':
        return styles.errorMessage;
      case 'success':
        return styles.successMessage;
      case 'warning':
        return styles.warningMessage;
      case 'info':
        return styles.infoMessage;
      default:
        return styles.errorMessage;
    }
  };

  return (
    <Text
      {...otherProps}
      style={[
        styles.message,
        getTypeStyle(),
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  errorMessage: {
    color: "#DC2626",
  },
  successMessage: {
    color: "#16A34A",
  },
  warningMessage: {
    color: "#D97706",
  },
  infoMessage: {
    color: "#2563EB",
  },
});