export default function Cart({ cart, addToCart, removeFromCart }) {
  const selected = cart.filter((el) => el.cartCount !== 0);

  if (selected.length == 0) {
    return (
      <section>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {selected.map((plant) => (
          <li key={plant.id} className="cart-item">
            <div>
              {plant.image}
              {plant.name}
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => removeFromCart(plant.id)}>-</button>
              <span>{plant.cartCount}</span>
              <button onClick={() => addToCart(plant.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
