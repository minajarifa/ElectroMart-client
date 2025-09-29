import Lottie from "lottie-react";
import loginLottieData from "../../../public/registerLottie/loginLottee.json.json"

export default function Register() {
  const handleRegister=(e)=>{
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/* <h1 className="m-5 mt-10 text-3xl text-center">Register Now</h1> */}
            <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <form onClick={handleRegister} className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="mt-4 btn btn-neutral">Login</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
