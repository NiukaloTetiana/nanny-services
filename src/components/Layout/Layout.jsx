import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Loader } from "../../components";

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
