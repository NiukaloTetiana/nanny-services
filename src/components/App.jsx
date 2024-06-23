import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../routes";
import { Layout, Loader } from "../components";
import { useCurrentUser } from "../hooks";

const Home = lazy(() => import("../pages/Home"));
const Nannies = lazy(() => import("../pages/Nannies"));
const Favorites = lazy(() => import("../pages/Favorites"));

function App() {
  const { user, isRefreshing } = useCurrentUser();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nannies" element={<Nannies />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute user={user}>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
