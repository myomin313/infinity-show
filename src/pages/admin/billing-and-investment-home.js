import AdminSidebar from "@/components/AdminSidebar";
import ConsoleLayout from "@/components/ConsoleLayout";
import BillingAndInvestmentHouse from "@/components/admin/billing-and-investment-house/BillingAndInvestmentHouse";
export default function Page() {
  return (
    <>
      <ConsoleLayout sidebarComponent={AdminSidebar}>
        {(isCollapsed) => (
          <BillingAndInvestmentHouse isCollapsed={isCollapsed} />
        )}
      </ConsoleLayout>
    </>
  );
}
