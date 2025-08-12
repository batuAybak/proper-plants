import { useState } from "react";
import Cart from "../components/cart";
import Plants from "../components/plants";
import PLANTS from "./data";

export default function App() {
  let plantsArr = PLANTS.map((plant) => ({ ...plant, cartCount: 0 })); //add new key and value to tract count
  const [cart, setCart] = useState(plantsArr);

  //Function to increase the count of a plant in given plant id
  function addToCart(id) {
    setCart((cart) =>
      cart.map((plant) =>
        id === plant.id ? { ...plant, cartCount: plant.cartCount + 1 } : plant
      )
    );
  }

  //Function to decrease the count of a plant in given plant id
  function removeFromCart(id) {
    setCart((cart) =>
      cart.map((plant) =>
        id === plant.id ? { ...plant, cartCount: plant.cartCount - 1 } : plant
      )
    );
  }

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
