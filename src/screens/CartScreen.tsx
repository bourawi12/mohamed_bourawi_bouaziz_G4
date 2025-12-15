import CartTemplate from "../templates/CartTemplate";

export default function CartScreen({ navigation }: any) {
  console.log("CartScreen rendering");
  return <CartTemplate />; // No ScreenTemplate wrapper
}