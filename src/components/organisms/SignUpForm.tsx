import { View } from 'react-native';
import InputGroup from '../molecules/InputGroup';
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import Button from '../atoms/Button';
import { SignUpFormData } from '../../types/SignUpFormData';
import { SPACING } from '../../constants/theme';

interface Props {
  formData: SignUpFormData;
  setFormData: (data: SignUpFormData) => void;
  onSubmit: () => void;
}

export default function SignUpForm({ formData, setFormData, onSubmit }: Props) {
  return (
    <View style={{ width: '100%', marginTop: SPACING.xl }}>
      <InputGroup label="Full Name:">
        <EmailInput
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        />
      </InputGroup>
      <InputGroup label="Email:">
        <EmailInput
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </InputGroup>
      <InputGroup label="Password:">
        <PasswordInput
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
      </InputGroup>
      <InputGroup label="Confirm Password:">
        <PasswordInput
          value={formData.confirmPassword}
          onChangeText={(text) =>
            setFormData({ ...formData, confirmPassword: text })
          }
        />
      </InputGroup>

      <Button title="Sign Up" onPress={onSubmit} />
      
    </View>
  );
}
