import { RiDeleteBin6Fill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";
import { FaPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function ProductDetails({ product, refetch }) {
  // console.log("product", product);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, userOne,] = useUsers();
  const axiosSecureURL = useAxiosSecure();
  const handleDeleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecureURL.delete(`/products/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
          navigate("/AdminDashboard/ProductsManagemment");
        });
      }
    });
  };
  console.log(userOne?.role);
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src={product?.images}
        alt="Article"
      />
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {product?.category}
          </span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
          >
            {product?.name} : {product?.price}$
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {product?.description}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src={user?.photoURL}
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                {user?.displayName}
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              post : {product?.createdAt}
            </span>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              update : {product?.updatedAt}
            </span>
          </div>
        </div>
        {userOne?.role === "admin" && (
          <div className="gap-5">
            {/* product card delete */}
             <button
              onClick={() => handleDeleteButton(product?._id)}
              className="m-2 btn btn-soft btn-error"
            >
              <RiDeleteBin6Fill />
              Delete
            </button>
            <Link
              to={`/AdminDashboard/ProductsManagemment/${product?._id}`}
              className="m-2 btn btn-soft"
            >
              <FaPenToSquare />
              Update
            </Link>
           
          </div>
        )}
      </div>
    </div>
  );
}
