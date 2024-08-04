import Layout from "@components/layout";
import Error from "@pages/Error";
import Community from "@pages/community";
import Detail from "@pages/community/Detail";
import List from "@pages/community/List";
import New from "@pages/community/New";
import Login from "@pages/user/Login";
import Signup from "@pages/user/Signup";
import { createBrowserRouter } from "react-router-dom";
import Edit from "@pages/community/Edit";

// React Router v6.4(2022.08.23)
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Community />
      },
      {
        path: ":type",
        element: <List />
      },
      {
        path: ":type/:_id",
        element: <Detail />
      },
      {
        path: ":type/new",
        element: <New />
      },
      {
        path: ":type/:_id/edit",
        element: <Edit />
      },
      {
        path: "user/login",
        element: <Login />
      },
      {
        path: "user/signup",
        element: <Signup />
      },
    ]
  },
]);

export default router;