import AdminTemplate from "../pages/AdminTemplate";
import AddUserPage from "../pages/AdminTemplate/AddUserPage";
import AuthPage from "../pages/AdminTemplate/AuthPage";
import DashboardPage from "../pages/AdminTemplate/DashboardPage";
import HomeTemplate from "../pages/HomeTemplate";
import About from "../pages/HomeTemplate/About";
import Home from "../pages/HomeTemplate/Home";
import ListMovie from "../pages/HomeTemplate/ListMovie";
import { Route } from "react-router-dom";
import ShoppingPhone from "../pages/HomeTemplate/ShoppingPhone";
import HookPage from "../pages/HomeTemplate/Hookpage";

export const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "",
        element: Home,
      },
      {
        path: "/about",
        element: About,
      },
      {
        path: "/list-movie",
        element: ListMovie,
      },
      {
        path: "/shopping-phone",
        element: ShoppingPhone,
      },
      {
        path: "/hooks",
        element: HookPage,
      },
    ],
  },
  {
    path: "admin",
    element: AdminTemplate,
    children: [
      {
        path: "/admin/dashboard",
        element: DashboardPage,
      },
      {
        path: "/admin/add-user",
        element: AddUserPage,
      },
    ],
  },
  {
    path: "auth",
    element: AuthPage,
  },
];

export const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
