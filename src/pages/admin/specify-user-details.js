import AdminSidebar from "@/components/AdminSidebar";
import ConsoleLayout from "@/components/ConsoleLayout";
import SpecifyUserDetails from "@/components/admin/specify-user-details/SpecifyUserDetails";
export default function Page() {
  return (
    <>
      <ConsoleLayout sidebarComponent={AdminSidebar}>
        {(isCollapsed) => <SpecifyUserDetails isCollapsed={isCollapsed} />}
      </ConsoleLayout>
    </>
  );
}
