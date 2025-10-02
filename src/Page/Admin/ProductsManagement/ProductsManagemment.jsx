import useProducts from "../../../hooks/useProducts";
import ProductDetails from "../../../Shared/ProductDetails/ProductDetails";

export default function ProductsManagemment() {
  const [products] = useProducts();
  // console.log(products);
  return (
    <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      {products?.map((product) => (
        <ProductDetails product={product} key={product._id}></ProductDetails>
      ))}
    </div>
  );
}
