//pages/admin-console.js
import AdminHomeSidebar from '@/components/AdminHomeSidebar';

import ConsoleLayout from '@/components/ConsoleLayout';
import AdminSetupPermissionPanel from '@/components/AdminSetupPermissionPanel';
export default function SetUpPermission() {
  return (
    <>
    <ConsoleLayout sidebarComponent={AdminHomeSidebar} >
      {(isCollapsed) => <AdminSetupPermissionPanel isCollapsed={isCollapsed}/>}
    </ConsoleLayout>
    </>
  );
}