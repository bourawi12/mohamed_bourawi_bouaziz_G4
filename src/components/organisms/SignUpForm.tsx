import { StyleSheet, View } from 'react-native';
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { SPACING } from '../../constants/theme';
import { Formik } from 'formik';
import { signupValidationSchema } from '../../auth/validations/signupValidation';

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
    <Formik
      initialValues={formData}
      validationSchema={signupValidationSchema}
      onSubmit={(values) => {
        setFormData(values);
        onSubmit();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
      }) => (
        <View style={styles.formContainer}>
          <InputGroup
            label="Full Name:"
            error={touched.fullName ? errors.fullName : undefined}
          >
            <Input
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              placeholder="Your full name"
              autoCapitalize="words"
            />
          </InputGroup>

          <InputGroup
            label="Email:"
            error={touched.email ? errors.email : undefined}
          >
            <EmailInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Your email"
            />
          </InputGroup>

          <InputGroup
            label="Password:"
            error={touched.password ? errors.password : undefined}
          >
            <PasswordInput
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Your password"
            />
          </InputGroup>

          <InputGroup
            label="Confirm Password:"
            error={touched.confirmPassword ? errors.confirmPassword : undefined}
          >
            <PasswordInput
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              placeholder="Confirm your password"
            />
          </InputGroup>

          <Button
            title="Sign Up"
            onPress={handleSubmit as any}
            disabled={!isValid}
            style={styles.button}
          />
        </View>
      )}
    </Formik>
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