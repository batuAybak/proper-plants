import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../styling/cart.css";
import "../styling/plants.css";
import { PlantProvider } from "./PlantContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlantProvider>
      <App />
    </PlantProvider>
  </StrictMode>
);
