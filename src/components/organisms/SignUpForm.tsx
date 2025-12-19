import { StyleSheet, View } from 'react-native';
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { SPACING } from '../../constants/theme';

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupFormProps {
  formData: SignupFormData;
  setFormData: (data: SignupFormData) => void;
  onSubmit: () => void;
}

export default function SignupForm({
  formData,
  setFormData,
  onSubmit,
}: SignupFormProps) {
  return (
    <View style={styles.formContainer}>
      <InputGroup label="Full Name:">
        <Input
          value={formData.fullName}
          onChangeText={text => setFormData({ ...formData, fullName: text })}
          placeholder="Your full name"
          autoCapitalize="words"
        />
      </InputGroup>
      
      <InputGroup label="Email:">
        <EmailInput
          value={formData.email}
          onChangeText={text => setFormData({ ...formData, email: text })}
          placeholder="Your email"
        />
      </InputGroup>
      
      <InputGroup label="Password:">
        <PasswordInput
          value={formData.password}
          onChangeText={text => setFormData({ ...formData, password: text })}
          placeholder="Your password"
        />
      </InputGroup>
      
      <InputGroup label="Confirm Password:">
        <PasswordInput
          value={formData.confirmPassword}
          onChangeText={text => setFormData({ ...formData, confirmPassword: text })}
          placeholder="Confirm your password"
        />
      </InputGroup>
      
      <Button style={styles.button} title="Sign Up" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    marginTop: SPACING.xl,
  },
  button: {
    height: 60,
    backgroundColor: "#00582F",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});