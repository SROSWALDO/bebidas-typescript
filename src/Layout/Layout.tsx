import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 bg-slate-500">
        <Outlet />
      </main>
    </>
  );
}
