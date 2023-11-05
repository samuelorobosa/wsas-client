import { Outlet } from 'react-router-dom';
import './DashboardPage.css';
import NavDrawer from '../NavDrawer/NavDrawer';

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="content">
        <aside className="drawer-wrapper">
          <NavDrawer />
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}