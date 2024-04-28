import { createBrowserRouter, redirect } from 'react-router-dom';
import { routeNames, subRouteNames } from './routenames';
import DashboardPage from '../../modules/dashboard/pages/DashboardPage/DashboardPage';
import ProfilePage from '../../modules/user/pages/ProfilePage/ProfilePage';
import EventHistoryPage from '../../modules/user/pages/EventHistoryPage/EventHistoryPage';
import RegistrationPage from '../../modules/auth/pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../modules/auth/pages/LoginPage/LoginPage';
import ResetPasswordPage from '../../modules/auth/pages/ResetPasswordPage/ResetPasswordPage';
import AllOrders from '../../modules/order-management/pages/AllOrders/AllOrders';
import AddFunds from '../../modules/user/pages/AddFunds/AddFunds.jsx';
import WithdrawFunds from '../../modules/user/pages/WithdrawFunds/WithdrawFunds.jsx';
import TransactionHistory from '../../modules/user/pages/TransactionHistory/TransactionHistory.jsx';
import ManageSubscription from '../../modules/user/pages/ManageSubscription/ManageSubscription.jsx';
import PaySupplier from '../../modules/user/pages/PaySupplier/PaySupplier.jsx';
import ShippingAddressBook from '../../modules/user/pages/ShippingAddressBook/ShippingAddressBook.jsx';
import RequestShipping from '../../modules/user/pages/RequestShipping/RequestShipping.jsx';
import RequestExpressCourierService from '../../modules/user/pages/RequestExpressCourierService/RequestExpressCourierService.jsx';
import TermsAndConditionsPage from '../../modules/auth/pages/TermsAndConditionsPage.jsx/TermsAndConditionsPage';
import VerifyEmailPage from '../../modules/auth/pages/VerifyEmailPage/VerifyEmailPage';

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
        path: subRouteNames.eventHistory,
        element: <EventHistoryPage />,
      },
      {
        path: subRouteNames.orders,
        element: <AllOrders />,
      },
      {
        path: subRouteNames.profile,
        element: <ProfilePage />,
      },
      {
        path: subRouteNames.addFunds,
        element: <AddFunds />,
      },
      {
        path: subRouteNames.withdrawFunds,
        element: <WithdrawFunds />,
      },
      {
        path: subRouteNames.transactionHistory,
        element: <TransactionHistory />,
      },
      {
        path: subRouteNames.manageSubscription,
        element: <ManageSubscription />,
      },
      {
        path: subRouteNames.paySupplier,
        element: <PaySupplier />,
      },
      {
        path: subRouteNames.shippingAddresses,
        element: <ShippingAddressBook />,
      },
      {
        path: subRouteNames.requestShipping,
        element: <RequestShipping />,
      },
      {
        path: subRouteNames.requestExpressCourierService,
        element: <RequestExpressCourierService />,
      },
      {
        path: '*',
        element: <div>PAGE IS STILL IN DEVELOPMENT</div>,
      },
    ],
  },
  {
    path: routeNames.login,
    element: <LoginPage />,
  },
  {
    path: routeNames.register,
    element: <RegistrationPage />,
  },
  {
    path: routeNames.verifyEmail,
    element: <VerifyEmailPage />,
  },
  {
    path: routeNames.resetPassword,
    element: <ResetPasswordPage />,
  },
  {
    path: routeNames.termsAndConditions,
    element: <TermsAndConditionsPage />,
  },
]);

export default appRouter;
