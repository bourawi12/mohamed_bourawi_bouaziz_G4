import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Typography from '../components/atoms/Typography';
import LoginForm from '../components/organisms/LoginForm';
import { SPACING, RADIUS, COLORS } from '../constants/theme';
import { FormData } from '../types/FormData';
import { useNavigation } from '@react-navigation/native';
const PRIMARY_GREEN = '#00582F';
const SOFT_GREEN = '#E8F5E9';
export default function LoginTemplate() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('Login submitted:', formData);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.decorativeCircle} />
        <View style={styles.decorativeCircleSmall} />
        
        <View style={styles.card}>
          {/* Header with Icon */}
          <View style={styles.header}>
           
            <Typography style={styles.title}>
              Welcome Back
            </Typography>
            <Typography style={styles.subtitle}>
              Sign in to continue to your account
            </Typography>
          </View>

          {/* Login Form */}
          <LoginForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleLogin}
          />

          {/* Forgot Password */}
          <View style={styles.forgotContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Typography style={styles.forgotText}>
                Forgot Password?
              </Typography>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Typography style={styles.orText}>OR</Typography>
            <View style={styles.divider} />
          </View>

          {/* Sign Up */}
          <View style={styles.signUpContainer}>
            <Typography style={styles.signUpPrompt}>
              Don't have an account?{' '}
            </Typography>
            <TouchableOpacity onPress={handleSignUp}>
              <Typography style={styles.signUpText}>
                Sign Up
              </Typography>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Typography style={styles.footerText}>
            By continuing, you agree to our Terms & Privacy Policy
          </Typography>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: SPACING.lg,
    paddingTop: SPACING.xxl * 2,
    paddingBottom: SPACING.xxl,
    minHeight: '100%',
  },
  decorativeCircle: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: SOFT_GREEN,
    opacity: 0.3,
  },
  decorativeCircleSmall: {
    position: 'absolute',
    bottom: 50,
    left: -30,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: PRIMARY_GREEN,
    opacity: 0.1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: RADIUS.lg * 1.5,
    padding: SPACING.xxl,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl + SPACING.md,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: SOFT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  iconInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PRIMARY_GREEN,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: SPACING.xs,
    marginBottom: SPACING.md,
  },
  forgotText: {
    color: PRIMARY_GREEN,
    fontSize: 14,
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.xl,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  orText: {
    marginHorizontal: SPACING.md,
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '500',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  signUpPrompt: {
    fontSize: 15,
    color: '#6B7280',
  },
  signUpText: {
    color: PRIMARY_GREEN,
    fontWeight: '600',
    fontSize: 15,
  },
  footer: {
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.md,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 18,
  },
});