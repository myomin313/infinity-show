//pages/admin-console.js
import PanelLayout from '@/components/ConsoleLayout';
import AdminPanel from '@/components/AdminPanel';
import AdminHeader from '@/parts/adminHeader';
import AdminHomeSidebar from '@/components/AdminHomeSidebar';

import ConsoleLayout from '@/components/ConsoleLayout';
export default function AdminConsole() {
  return (
    <>
    <ConsoleLayout sidebarComponent={AdminHomeSidebar} >
      {(isCollapsed) => <AdminPanel isCollapsed={isCollapsed}/>}
    </ConsoleLayout>
    </>
  );
}