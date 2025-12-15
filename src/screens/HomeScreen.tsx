import HomeTemplate from "../templates/HomeTemplate";


export default function HomeScreen({ navigation }: any) {
  console.log("HomeScreen rendering");
  return <HomeTemplate />; // No ScreenTemplate wrapper
}