import { createBrowserRouter } from "react-router-dom";
import { routeNames, subRouteNames } from "./routenames";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage/DashboardPage"
import ProfilePage from "../../modules/user/pages/ProfilePage/ProfilePage";
import EventHistoryPage from "../../modules/user/pages/EventHistoryPage/EventHistoryPage";

const appRouter = createBrowserRouter([
  {
    path: routeNames.home,
    element: <div>HOME ROUTE</div>
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
  }
]);

export default appRouter;