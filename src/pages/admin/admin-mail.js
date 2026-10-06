// import PanelLayout from '@/components/PanelLayout';
// import AdminPanel from '@/components/AdminPanel';
// import AdminHeader from '@/parts/adminHeader';
import ConsoleLayout from '@/components/ConsoleLayout';
import AdminSidebar from '@/components/AdminSidebar';
import AdminMailPanel from '@/components/AdminMailPanel';
export default function AdminMail() {
  return (
    <>
      <ConsoleLayout sidebarComponent={AdminSidebar}>
        {(isCollapsed) => <AdminMailPanel isCollapsed={isCollapsed} />}
      </ConsoleLayout>
    </>
  );
}