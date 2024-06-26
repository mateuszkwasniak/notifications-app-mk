import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="w-full flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}
