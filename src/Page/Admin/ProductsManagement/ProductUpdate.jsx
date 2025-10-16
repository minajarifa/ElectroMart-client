import { useLoaderData } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

export default function ProductUpdate() {
  const axiosURL = useAxios();
  const {
    category,
    description,
    images,
    name,
    price,
    quantity,
    rating,
    slug,
    _id,
    // reviewsCount,
    // soldupdatedAt,
    // createdAt,
  } = useLoaderData();

  const handleUpdateButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slug = form.slug.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const solid = form.solid.value;
    const rating = form.rating.value;
    const products = {
      name,
      slug,
      description,
      price,
      category,
      image,
      quantity,
      solid,
      rating,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You update this post!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(products);
        axiosURL.put(`/products/${_id}`, products).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount>0) {
            Swal.fire({
              title: "Updated!",
              text: "Your file has been Updated.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="">
      <section className="w-full p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-center text-gray-700 dark:text-white">
          Update Product
        </h2>
        <form onSubmit={handleUpdateButton} className="w-full">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Product name"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Slug</label>
              <input
                type="text"
                name="slug"
                defaultValue={slug}
                placeholder="Product name"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                description
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="description"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="price"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="category"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">Images</label>
              <input
                type="text"
                name="image"
                defaultValue={images}
                placeholder="product image"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                quantity
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="quantity"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">sold</label>
              <input
                type="text"
                name="solid"
                // defaultChecked={solid}
                placeholder="solid"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">rating</label>
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="rating"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex justify-end w-full mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 w-full">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
