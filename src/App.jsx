import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";

function App() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/Login") ||
    location.pathname.includes("/Register");

  return (
     <>
      {noHeaderFooter || <Header />}
     <div className="mb-10 pt-36">
       <Outlet></Outlet>
     </div>
      {noHeaderFooter || <Footer />}
    </>
  );
}

export default App;
