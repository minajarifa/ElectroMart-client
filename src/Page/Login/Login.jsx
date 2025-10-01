import useAuth from "../../hooks/useAuth";
import lotte from "../../../public/registerLottie/lotte.json.json";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

export default function Login() {
   const navigate = useNavigate()
  const { signIn } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      console.log(result.user);
      navigate('/');
    });
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left h-[100]">
          <Lottie animationData={lotte}></Lottie>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
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
          <p className="mb-10 ml-5">
            Already have an account? please   
            <Link className="mx-2 text-xl font-bold text-blue-600" to="/Register">
              Register   
            </Link>
              now
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
}
