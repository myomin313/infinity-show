// import PanelLayout from '@/components/PanelLayout';
// import AdminPanel from '@/components/AdminPanel';
import AdminUser from '@/components/AdminUser';
import AdminHeader from '@/parts/adminHeader';
// import UserLayout from '@/components/userLayout';
import ConsoleLayout from '@/components/ConsoleLayout';
import AdminSidebar from '@/components/AdminSidebar';
export default function AdminConsole() {
  return (
    <>
    <ConsoleLayout sidebarComponent={AdminSidebar}>
       {(isCollapsed) => <AdminUser isCollapsed={isCollapsed}/>}
    </ConsoleLayout>
    </>
  );
}