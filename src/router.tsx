import { createBrowserRouter } from "react-router-dom";
import { mas } from "./pages/allpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <mas.Layout />,
    loader: mas.Loader,
    children: [
      { index: true, element: <mas.Home /> },
      { path: "*", element: <mas.NotFound /> },
      { path: "box", element: <mas.Recipes /> },
      { path: "sneaker/:id", element: <mas.SneakerPage /> },
    ],
  },
]);

export default router;
