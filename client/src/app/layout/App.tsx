import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prestate) => [
      ...products,
      {
        id: prestate.length + 1,
        name: "product" + (prestate.length + 1),
        price: prestate.length * 100 + 100,
        brand: "some brand",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }
  return (
    <>
      <Typography variant="h5">Re-store</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
}

export default App;
