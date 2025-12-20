import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { FormData } from '../../types/FormData';
import EmailInput from '../molecules/EmailInput';
import PasswordInput from '../molecules/PasswordInput';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { SPACING } from '../../constants/theme';
import { loginValidationSchema } from '../../auth/validations/loginValidation';

interface LoginFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: () => void;
}

export default function LoginForm({
  formData,
  setFormData,
  onSubmit,
}: LoginFormProps) {
  return (
    <Formik
      initialValues={formData}
      validationSchema={loginValidationSchema}
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

          <Button
            style={styles.button}
            title="Login"
            onPress={handleSubmit as any}
            disabled={!isValid}
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
    backgroundColor: "#00582F", // Dark Green
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});