import { Product } from "../../app/models/Product";
import { List } from "@mui/material";
import ProductCard from "./ProductCard";
interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <List>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
}