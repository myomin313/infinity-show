import { Separator } from "@/components/ui/separator";
import AdminConsoleBaseContainer from "@/parts/admin-console/AdminConsoleBaseContainer";
import AdminConsoleSectionCard from "@/parts/admin-console/AdminConsoleSectionCard";
import AdminConsoleTopSection from "@/parts/admin-console/AdminConsoleTopSection";
import BillingAndInvestmentCardItem from "@/parts/admin-console/billing-and-investment/BillingAndInvestmentCardItem";
import { AdminButton } from "@/parts/admin-console/buttons/AdminButton";
import { CircleAlert, CircleX, Cog, TriangleAlert } from "lucide-react";
import { InfoAlertMessage } from "../../../parts/admin-console/alerts/InfoAlertMessage";
import Head from "next/head";
import { BASE_IMAGE_URL } from "@/pages/api/endpoint";

export default function BillingAndInvestmentHouse() {
  return (
    <AdminConsoleBaseContainer>
      <Head>
        <title>
          Billing and Investment | Ost Infinity - ViXa Identity First Platform
        </title>
        <link rel="icon" href={`${BASE_IMAGE_URL}/global/favicon.png`} />
        <meta name="viewport" content="width=1440" />
        <meta
          name="description"
          content="Ost Infinity - ViXa Identity First Platform"
        />
      </Head>
      <AdminConsoleTopSection title={"Billing and Investment Home"}>
        <div className="space-x-2 space-y-2">
          <AdminButton type="outline">Provide Feedback</AdminButton>
          <AdminButton type="outline">Reset to default layout</AdminButton>
        </div>
      </AdminConsoleTopSection>
      <section className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* invesement summary  */}
          <div className="sm:basis-2/3">
            <AdminConsoleSectionCard
              title={"Investment Summary"}
              footerLink={"#"}
              footerLinkName={"View Bill"}
            >
              <div className="space-y-10 px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <BillingAndInvestmentCardItem
                    title={"Month-to-date investment"}
                    description={"Date Unavailable"}
                    icon={<CircleX size={18} />}
                    color={"text-red-600"}
                  />
                  <div className="flex items-center gap-4 sm:ml-10">
                    <Separator
                      orientation="vertical"
                      className={"hidden sm:block"}
                    />
                    <BillingAndInvestmentCardItem
                      title={"Last month's investment for same time period"}
                      description={"Date Unavailable"}
                      icon={<CircleX size={18} />}
                      color={"text-red-600"}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <BillingAndInvestmentCardItem
                    title={"Total forcasted investment for current month"}
                    description={"Date Unavailable"}
                    icon={<CircleX size={18} />}
                    color={"text-red-600"}
                  />
                  <div className="flex items-center gap-4 sm:ml-10">
                    <Separator
                      orientation="vertical"
                      className={"hidden sm:block"}
                    />
                    <BillingAndInvestmentCardItem
                      title={"Last month's total investment"}
                      description={"Date Unavailable"}
                      icon={<CircleX size={18} />}
                      color={"text-red-600"}
                    />
                  </div>
                </div>
              </div>
            </AdminConsoleSectionCard>
          </div>
          {/* investment monitor  */}
          <div className="sm:basis-1/3">
            <AdminConsoleSectionCard title={"Investment Monitor"}>
              <div className="space-y-6">
                <BillingAndInvestmentCardItem
                  title={"Budgets status"}
                  description={"Setup required"}
                  subdescription={"No budget created"}
                  icon={<CircleAlert size={18} />}
                  color={"text-orange-400"}
                />
                <BillingAndInvestmentCardItem
                  title={"Investment anomalies status (MTD)"}
                  description={"Setup required"}
                  subdescription={"No monitor created"}
                  icon={<CircleAlert size={18} />}
                  color={"text-orange-400"}
                />
              </div>
            </AdminConsoleSectionCard>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* investment breakdown  */}
          <div className="sm:basis-3/5">
            <AdminConsoleSectionCard title={"Investment breakdown"}>
              <div className="grid place-items-center max-w-3/4 mx-auto space-y-4">
                <Cog size={70} color={"gray"} />
                <p className="text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate eius qui debitis, animi ullam voluptas odit ipsa.
                  Vitae, laudantium ut. In adipisci expedita voluptatem dolorem.
                  Sint quod repudiandae facilis nulla?
                </p>
              </div>
            </AdminConsoleSectionCard>
          </div>
          {/* recommended actions  */}
          <div className="sm:basis-2/5">
            <AdminConsoleSectionCard title={"Recommended actions (2)"}>
              <div className="space-y-2">
                <InfoAlertMessage
                  type="warn"
                  title={"Free Tier usage"}
                  description={
                    "You have exceeded 85% of the Free Tier usage limit for 3 service."
                  }
                  icon={<TriangleAlert color="#ebe023" />}
                  link={"#"}
                  linkText={"View details"}
                  isClose
                />
                <InfoAlertMessage
                  type="info"
                  title={"Getting Started"}
                  description={
                    "Create a investment Anomaly monitor to automically detect anomalies"
                  }
                  icon={<TriangleAlert color="#4380e0" />}
                  link={"#"}
                  linkText={"Create a monitor"}
                  isClose
                />
              </div>
            </AdminConsoleSectionCard>
          </div>
        </div>
      </section>
    </AdminConsoleBaseContainer>
  );
}
