import FavoriteTemplate from "../templates/FavoriteTemplate";


export default function FavoriteTemplateScreen({ navigation }: any) {
  console.log("FavoriteTemplateScreen rendering");
  return <FavoriteTemplate />; // No ScreenTemplate wrapper
}