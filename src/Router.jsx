import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from './HomePage.jsx';
import ShopPage from './ShopPage.jsx';
import ErrorPage from "./ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;