import Cart from "../components/cart";
import Plants from "../components/plants";
import { usePlantContext } from "./PlantContext";

export default function App() {
  const { cart, addToCart, removeFromCart } = usePlantContext();

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants cart={cart} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
