export default function Plants({ cart, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {cart.map((plant) => {
          return (
            <li className="plant" key={plant.id}>
              <figure>{plant.image}</figure>
              <h3>{plant.name}</h3>
              <button onClick={() => addToCart(plant.id)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
