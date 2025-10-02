
import useUsers from "../../../hooks/useUsers";

export default function MyProfile() {
  const [,userOne] = useUsers();
//   console.log("users",users)
//   console.log("userOne",userOne)
 
  return (
    <div className="">
      {/*  */}
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover w-full h-56"
          src={userOne.photo}
          alt="avatar"
        />
        <div className="py-5 text-center">
          <a          
            className="block text-xl font-bold text-gray-800 dark:text-white"
            role="link"
          >
            {userOne.name}
          </a>
          <span className="block text-sm text-gray-700 dark:text-gray-200">
           {userOne.email}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-200">
           {userOne.role}
          </span>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
