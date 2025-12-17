import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  SPACING,
  RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  COLORS,
} from '../../constants/theme';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: Variant;
  textStyle?: any;
  noPadding?: boolean; 
}

export default function Button({
  title,
  variant = 'primary',
  disabled,
  style,
  textStyle,
  noPadding,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], disabled && styles.disabled, style,noPadding && styles.noPadding,]}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    width: '100%',
    paddingVertical: SPACING.md,
    marginVertical: SPACING.sm,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  ghost: {
    backgroundColor: COLORS.primaryLight,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
    fontWeight: FONT_WEIGHT.semibold,
    fontSize: FONT_SIZE.md,
  },
  primaryText: {
    color: COLORS.white,
  },
  ghostText: {
    color: COLORS.primaryDark,
  },
   noPadding: {
    paddingVertical: 0, // 👈 removes extra space
  },
});