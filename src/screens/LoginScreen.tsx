import LoginTemplate from '../templates/LoginTemplate';

export default function LoginScreen({ navigation }: any) {
  console.log("LoginScreen rendering");
  return <LoginTemplate />; // No ScreenTemplate wrapper
}