import { createBrowserRouter } from "react-router-dom";
import Home from './../Components/Layout/Home/Home';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Root from './../Components/Layout/Root/Root';
import NewsDetailsPage from "../Components/Layout/NewsDetails/NewsDetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:category",
        element: <Home />,
      },
      {
        path: "/news_details/:id",
        element: <NewsDetailsPage />,
      },
     
    ],
  },
]);

export default router;