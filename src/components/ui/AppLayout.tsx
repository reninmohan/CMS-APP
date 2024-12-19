import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

function AppLayout() {
  return (
    <div className="scrollbar-none grid h-screen grid-cols-[24rem_1fr] grid-rows-[auto_1fr] overflow-auto">
      <Header />
      <Sidebar />
      <main className="bg-gray-100 px-5 pb-24 pt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
