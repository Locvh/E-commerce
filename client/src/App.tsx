import { useState } from "react";
import "./App.css";

const products1 = [
  {
    name: "product1",
    price: 100.0,
  },
  {
    name: "product2",
    price: 200.0,
  },
];
function App() {
  const [products, setProduct] = useState(products1);

  function addProduct() {
    console.log("a");
    setProduct((prestate) => [
      ...products,
      {
        name: "product" + (prestate.length + 1),
        price: prestate.length * 100 + 100,
      },
    ]);
  }
  return (
    <div>
      <h1>Re-store</h1>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>add product</button>
    </div>
  );
}

export default App;
