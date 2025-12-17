import WelcomeTemplate from "../templates/WelcomeTemplate";


export default function WelcomeScreen({ navigation }: any) {
  console.log("WelcomeScreen rendering");
  return <WelcomeTemplate />; // No ScreenTemplate wrapper
}