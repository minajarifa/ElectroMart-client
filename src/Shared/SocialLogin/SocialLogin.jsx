import { VscGithub } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
export default function SocialLogin() {
   const navigate = useNavigate();
  const { googleSigning } = useAuth();
  const axiosURL=useAxios();
  const handleGoogleLogin=()=>{
    googleSigning()
    .then(result=>{
      const user= result.user;
        const userInfo={
          email:user?.email,
          name:user?.displayName,
          photo:user?.photoURL,
          role:"user"
        }
        axiosURL.post('/users',userInfo)
        .then(res=>{
         console.log( res.data)
         navigate('/')
        })
        
    })
  }
  return (
    <div className="mx-5 mb-10 ">
      <div className="divider"></div>
      {/* Google */}
      <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] m-1 w-full">
        <FcGoogle />
        Login with Google
      </button>
      {/* GitHub */}
      <button className="w-full m-1 text-white bg-black border-black btn">
        <VscGithub />
        Login with GitHub
      </button>
    </div>
  );
}
