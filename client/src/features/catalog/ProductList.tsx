import { Product } from "../../app/models/Product";
import { Grid, List } from "@mui/material";
import ProductCard from "./ProductCard";
interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((product: any) => (
        <Grid item xs={4} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
