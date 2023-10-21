import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import CommentsDetails from "../components/CommentsDetails/CommentsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:objectID",
        element: <CommentsDetails></CommentsDetails>,
        loader: async ({ params }) => {
          return fetch(`http://hn.algolia.com/api/v1/items/${params.objectID}`);
        },
      },
    ],
  },
]);

export default router;
