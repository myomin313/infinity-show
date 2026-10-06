"use client";
import { Form } from "@/components/ui/form";
import { BASE_IMAGE_URL } from "@/pages/api/endpoint";
import AdminConsoleBaseContainer from "@/parts/admin-console/AdminConsoleBaseContainer";
import { AdminConsoleBreadCrumb } from "@/parts/admin-console/AdminConsoleBreadCrumb";
import AdminConsoleSectionContainer from "@/parts/admin-console/AdminConsoleSectionContainer";
import AdminConsoleTopSection from "@/parts/admin-console/AdminConsoleTopSection";
import { InfoAlertMessage } from "@/parts/admin-console/alerts/InfoAlertMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert } from "lucide-react";
import Head from "next/head";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";

import { SpecifyUserDetailsRenderArea } from "./SpecifyUserDetailsRenderArea.jsx";
import AdminFormButtonsWrapper from "@/parts/admin-console/buttons/AdminFormButtonsWrapper.jsx";
import AdminFormCancelButton from "@/parts/admin-console/buttons/AdminFormCancelButton.jsx";
import AdminFormSubmitButton from "@/parts/admin-console/buttons/AdminFormSubmitButton.jsx";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(64, {
      message: "Username must be at most 64 characters.",
    }),
  userAccess: z.boolean().default(false).optional(),
});
export default function SpecifyUserDetails() {
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      userAccess: false,
    },
  });

  function onSubmit(data) {
    // toast("You submitted the following values", {
    //   description: (
    //     <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log("data", data);
  }

  return (
    <AdminConsoleBaseContainer>
      <Head>
        <title>
          Specify User Details | Ost Infinity - ViXa Identity First Platform
        </title>
        <link rel="icon" href={`${BASE_IMAGE_URL}/global/favicon.png`} />
        <meta name="viewport" content="width=1440" />
        <meta
          name="description"
          content="Ost Infinity - ViXa Identity First Platform"
        />
      </Head>
      <AdminConsoleBreadCrumb />
      <AdminConsoleTopSection title={"Specify user details"} />
      <section className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <AdminConsoleSectionContainer title={"User Details"}>
              <div className="w-full space-y-6">
                <SpecifyUserDetailsRenderArea form={form} />
                <InfoAlertMessage
                  type="warn"
                  title={
                    "If your are creating programmatic access through access keys or service sepcific credentials for Ost Infinity, you can generate after you create this IAM user."
                  }
                  icon={<CircleAlert color="#ebe023" />}
                  link={"#"}
                  linkText={"Learn more"}
                />
              </div>
            </AdminConsoleSectionContainer>
            <AdminFormButtonsWrapper>
              <AdminFormCancelButton />
              <AdminFormSubmitButton text={"Next"} />
            </AdminFormButtonsWrapper>
          </form>
        </Form>
      </section>
    </AdminConsoleBaseContainer>
  );
}
