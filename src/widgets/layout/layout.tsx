import { Outlet } from "react-router-dom";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import cls from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={cls.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
