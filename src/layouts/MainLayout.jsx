import Header from "@/components/Home/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
       <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
