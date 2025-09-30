import Lottie from "lottie-react";
import loginLottieData from "../../../public/registerLottie/loginLottee.json.json";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password, photo };
    console.log(userInfo);
    createUser(email, password).then((result) => {
      result.user;
      console.log(result.user);
      updateUserProfile(name, photo).then(() => {
        const userInfo = {
          name,
          photo,
          email,
        };
        console.log(userInfo);
      });
      Swal.fire({
        title: "Create user successfully!",
        icon: "success",
        draggable: true,
      });
      navigate('/')
    });
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="User Name"
                required
              />
              <label className="label">Photo Url</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <button className="mt-4 btn btn-neutral">Login</button>
            </fieldset>
          </form>
         <p className="mb-10 ml-5">Already have an account? please <Link className="text-xl font-bold text-blue-600" to='/Login'>Login</Link> now</p> 
        </div>
      </div>
    </div>
  );
}
