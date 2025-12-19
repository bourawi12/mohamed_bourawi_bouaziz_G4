import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Input from '../atoms/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function PasswordInput(props: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Input
        secureTextEntry={!isPasswordVisible}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        {...props}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={styles.eyeButton}
        activeOpacity={0.7}
      >
        {isPasswordVisible ? (
          <Ionicons name="eye" size={24} color="#6B7280" />
        ) : (
          <View style={styles.eyeSlash}>
            <Ionicons name="eye-off" size={24} color="#6B7280" />
         
          </View>
        )}
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    paddingRight: 50,
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: '100%',
  },
  eyeSlash: {
    position: 'relative',
  },
  eyeIcon: {
    fontSize: 22,
    color: '#6B7280',
  },
  slashLine: {
    position: 'absolute',
    top: '50%',
    left: -2,
    right: -2,
    height: 2,
    backgroundColor: '#6B7280',
    transform: [{ rotate: '-45deg' }],
  },
});