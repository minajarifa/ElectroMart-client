import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../../Shared/ProductDetails/ProductDetails";

export default function ProductList() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios("/products.json").then((res) => {
      setProducts(res.data);
    });
  }, []);
  // console.log(products);
  return (
    <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2">
      {products?.map((product) => (
        <ProductDetails product={product} key={product._id}></ProductDetails>
      ))}
    </div>
  );
}
