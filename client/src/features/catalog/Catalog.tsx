import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

// interface Prop {
//   products: Product[];
//   addProduct: () => void;
// }
export default function Catalog() {
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
      <ProductList products={products} />
      {/* <Button variant="contained" onClick={addProduct}>
        add product
      </Button> */}
    </>
  );
}
