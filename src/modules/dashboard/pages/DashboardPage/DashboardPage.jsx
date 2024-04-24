import { Outlet } from 'react-router-dom';
import './DashboardPage.css';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import {Fragment} from "react";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function DashboardPage() {
  return (
      <Fragment>
        <TawkMessengerReact
            propertyId="65aec4360ff6374032c36f9a"
            widgetId="1hkpasu2d"/>
        <div className="dashboard-page">
          <div className="content">
            <aside className="drawer-wrapper">
              <NavDrawer/>
            </aside>
            <main className="main-content">
              <Outlet/>
            </main>
          </div>
        </div>
      </Fragment>
  )
}
