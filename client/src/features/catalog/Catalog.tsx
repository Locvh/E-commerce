import { Button } from "@mui/material";
import React from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

interface Prop {
  products: Product[];
  addProduct: () => void;
}
export default function Catalog({ products, addProduct }: Prop) {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        add product
      </Button>
    </>
  );
}
