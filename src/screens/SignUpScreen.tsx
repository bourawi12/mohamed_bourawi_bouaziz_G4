import React from 'react';
import LoginForm from '../components/organisms/LoginForm';

import Typography from '../components/atoms/Typography';
import Container from '../components/atoms/Container';
import { SignUpFormData } from '../types/SignUpFormData';
import SignUpForm from '../components/organisms/SignUpForm';
import Button from '../components/button';

export default function SignUpScreen({navigation}:any) {
  const [formData, setFormData] = React.useState<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });

  const handleSignUp = () => {
    if (!formData.email || !formData.password || !formData.fullName) {
      console.error('All fields are required');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    console.log('Registering user:', formData);
  };

  return (
    <Container>
      <Typography variant="h2">Login with your email and password</Typography>
      <SignUpForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSignUp}
      />
      <Button title="go to login page" onPress={() => navigation.navigate('Login')} />
    </Container>
  );
}