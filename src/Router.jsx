import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./NavBar";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar /> <HomePage />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: (
        <>
          <NavBar /> <HomePage />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <NavBar /> <ShopPage />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
