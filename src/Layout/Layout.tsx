import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../Store/useAppStore";

export default function Layout() {

   const { loadFromStorage } = useAppStore()

  useEffect(() => {
    loadFromStorage()
  },[])

  return (
    <>
      <Header />
      <main className="container mx-auto py-16 2xl:w-[1350px] ">
        <Outlet />
      </main>
      <Modal/>
    </>
  );
}
