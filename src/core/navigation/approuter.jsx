import { createBrowserRouter, redirect } from "react-router-dom";
import { routeNames, subRouteNames } from "./routenames";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage/DashboardPage"
import ProfilePage from "../../modules/user/pages/ProfilePage/ProfilePage";
import EventHistoryPage from "../../modules/user/pages/EventHistoryPage/EventHistoryPage";
import RegistrationPage from "../../modules/auth/pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../modules/auth/pages/LoginPage/LoginPage";

const appRouter = createBrowserRouter([
  {
    path: routeNames.home,
    loader: () => redirect(routeNames.register),
  },
  {
    path: routeNames.dashboard,
    element: <DashboardPage />,
    children: [
      {
        path: subRouteNames.profile,
        element: <ProfilePage />,
      },
      {
        path: subRouteNames.eventHistory,
        element: <EventHistoryPage />,
      },
      {
        path: '*',
        element: <div>PAGE IS STILL IN DEVELOPMENT</div>
      }
    ]
  },
  {
    path: routeNames.register,
    element: <RegistrationPage />,
  },
  {
    path: routeNames.login,
    element: <LoginPage />,
  }
]);

export default appRouter;