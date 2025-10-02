import useProducts from "../../hooks/useProducts";
import ProductDetails from "../../Shared/ProductDetails/ProductDetails";

export default function ProductList() {
  const products = useProducts();
  return (
    <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2">
      {products?.map((product) => (
        <ProductDetails product={product} key={product._id}></ProductDetails>
      ))}
    </div>
  );
}
