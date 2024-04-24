import { useMemo } from 'react';
import './NavDrawer.css';
import {
  FaDollarSign,
  FaUser,
  FaShoppingCart,
  FaShoppingBag,
  FaTruckMoving,
  FaAddressCard,
} from 'react-icons/fa';
import { subRouteNames } from '../../../../core/navigation/routenames';
import NavDrawerItem from '../NavDrawerItem/NavDrawerItem';
import uuid from 'react-uuid';
import logo from '../../../../core/assets/logo.jpeg';

export default function NavDrawer() {
  const sidebarMenu = useMemo(() => [
    {
      title: 'Profile',
      key: 0,
      icon: <FaUser />,
      links: [
        {
          title: 'User Profile',
          path: subRouteNames.profile,
        },
        {
          title: 'Event History',
          path: subRouteNames.eventHistory,
        },
      ],
    },
    {
      title: 'Wallet',
      key: 1,
      icon: <FaDollarSign />,
      links: [
        {
          title: 'Add Funds',
          path: subRouteNames.addFunds,
        },
        {
          title: 'Withdraw Funds',
          path: subRouteNames.withdrawFunds,
        },
        {
          title: 'Manage Subscription',
          path: subRouteNames.manageSubscription,
        },
        {
          title: 'Transaction History',
          path: subRouteNames.transactionHistory,
        },
      ],
    },
    {
      title: 'Procurement',
      key: 2,
      icon: <FaShoppingCart />,
      links: [
        {
          title: 'Orders',
          path: subRouteNames.orders,
        },
        {
          title: 'Pay Supplier',
          path: subRouteNames.paySupplier,
        },
      ],
    },
    {
      title: 'Logistics',
      key: 4,
      icon: <FaTruckMoving />,
      links: [
        {
          title: 'Shipping Address Book',
          path: subRouteNames.shippingAddresses,
        },
        {
          title: 'Request Shipping',
          path: subRouteNames.requestShipping,
        },
        {
          title: 'Express Courier Service',
          path: subRouteNames.requestExpressCourierService,
        },
      ],
    },
    {
      title: 'Support',
      key: 5,
      icon: <FaAddressCard />,
      links: [
        {
          title: 'Whatsapp',
          path: subRouteNames.createTicket,
        },
      ],
    },
  ], []);

  return (
    <nav className="nav-drawer">
      <div className="logo-box">
        <img src={logo} alt="We Shop And Ship Logo" className="logo" />
        <h3 className="title">WeShopAndShip</h3>
      </div>
      {
        sidebarMenu.map(({ title, key, icon, links, }) => (
          <NavDrawerItem key={uuid()} title={title} icon={icon} links={links} itemKey={key} />
        ))
      }
    </nav>
  )
}
