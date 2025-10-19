import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import ProductDetails from "../../../Shared/ProductDetails/ProductDetails";
import Title from "../../../Shared/Title/Title";

export default function ProductsManagemment() {
  const [products, refetch] = useProducts();
  return (
    <div>
      <Title subheding={"All Products"} heading={"Products Management"} />
      <div className="flex justify-between my-4">
        <h2> Products : {products?.length}</h2>
        <Link to="/AdminDashboard/Payment">
        <button className="btn btn-primary">Primary</button>
        </Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {products?.map((product) => (
          <ProductDetails
            refetch={refetch}
            product={product}
            key={product._id}
          ></ProductDetails>
        ))}
      </div>
    </div>
  );
}
