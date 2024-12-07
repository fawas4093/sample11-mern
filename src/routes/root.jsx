import { Outlet } from "react-router-dom";
import { Navbar } from "../pages/NavBar";


export default function Root() {
    return (
      <>
      <header>
        <Navbar />
      </header>
      <section>
      <Outlet />
      </section>
      
      
        </>
    );
  }
