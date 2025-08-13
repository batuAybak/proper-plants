import { createContext, useContext, useState } from "react";
import PLANTS from "./data";

const PlantContext = createContext();

export function PlantProvider({ children }) {
  let plantsArr = PLANTS.map((plant) => ({ ...plant, cartCount: 0 })); //add new key and value to track count
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

  const value = { cart, addToCart, removeFromCart };
  return (
    <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
  );
}

export function usePlantContext() {
  const context = useContext(PlantContext);
  if (!context)
    throw Error("usePlantContext must be used within a ThemeProvider");
  return context;
}
