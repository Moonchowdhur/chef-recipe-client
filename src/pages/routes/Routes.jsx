import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Eachchef from "../Eachchef/Eachchef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs/:id",
        element: <Eachchef></Eachchef>,
        loader: ({ params }) =>
          fetch(`https://assignment-server-jade.vercel.app/chefs/${params.id}`),
      },
    ],
  },
]);

export default router;
