import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import Root from "../pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "../pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },

      {
        path: "user",
        element: <User />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
