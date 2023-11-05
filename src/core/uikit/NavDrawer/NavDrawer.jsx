import { useMemo } from 'react';
import './NavDrawer.css';
import { MdPerson } from 'react-icons/md'
import { subRouteNames } from '../../navigation/routenames';
import NavDrawerItem from '../NavDrawerItem/NavDrawerItem';
import uuid from 'react-uuid';

export default function NavDrawer() {
  const sidebarMenu = useMemo(() => [
    {
      title: 'Profile',
      icon: <MdPerson />,
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
      icon: <MdPerson />,
      links: [
        {
          title: 'Add Funds',
          path: subRouteNames.profile,
        },
        {
          title: 'Withdraw Funds',
          path: subRouteNames.eventHistory,
        },
        {
          title: 'Manage Subscription',
          path: subRouteNames.profile,
        },
        {
          title: 'Transaction History',
          path: subRouteNames.eventHistory,
        },
      ],
    },
    {
      title: 'Profile',
      icon: <MdPerson />,
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
      icon: <MdPerson />,
      links: [
        {
          title: 'Add Funds',
          path: subRouteNames.profile,
        },
        {
          title: 'Withdraw Funds',
          path: subRouteNames.eventHistory,
        },
        {
          title: 'Manage Subscription',
          path: subRouteNames.profile,
        },
        {
          title: 'Transaction History',
          path: subRouteNames.eventHistory,
        },
      ],
    },
    {
      title: 'Profile',
      icon: <MdPerson />,
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
      icon: <MdPerson />,
      links: [
        {
          title: 'Add Funds',
          path: subRouteNames.profile,
        },
        {
          title: 'Withdraw Funds',
          path: subRouteNames.eventHistory,
        },
        {
          title: 'Manage Subscription',
          path: subRouteNames.profile,
        },
        {
          title: 'Transaction History',
          path: subRouteNames.eventHistory,
        },
      ],
    },
  ], []);

  return (
    <nav className="nav-drawer">
      <div className="logo-box">
        <h3 className="title">Dashboard</h3>
        {
          sidebarMenu.map(({ title, icon, links}) => (
            <NavDrawerItem key={uuid()} title={title} icon={icon} links={links} />
          ))
        }
      </div>
    </nav>
  )
}