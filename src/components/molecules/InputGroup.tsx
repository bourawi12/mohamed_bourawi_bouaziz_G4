import { StyleSheet, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import Typography from '../atoms/Typography';
import { SPACING } from '../../constants/theme';

interface InputGroupProps extends PropsWithChildren {
  label?: string;
  error?: string;
}

export default function InputGroup({ label, error, children }: InputGroupProps) {
  return (
    <View style={styles.container}>
      {label && <Typography variant="label">{label}</Typography>}
      {children}
      {error && <Typography variant="caption" style={styles.error}>{error}</Typography>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
});
