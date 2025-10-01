import useAuth from "../../hooks/useAuth";

export default function ProductDetails({ product }) {
  const { user } = useAuth();
  const {
    category,
    createdAt,
    description,
    images,
    name,
    price,
    // quantity,
    // rating,
    // reviewsCount,
    // slug,
    // sold,
    updatedAt,
    _id,
  } = product;
  // console.log(product);
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img className="object-cover w-full h-64" src={images} alt="Article" />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {category}
          </span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
          >
            {name} : {price}$
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
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
              post : {createdAt}
            </span>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              update : {updatedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
