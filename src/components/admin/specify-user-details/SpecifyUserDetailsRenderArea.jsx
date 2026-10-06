"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function SpecifyUserDetailsRenderArea({ form }) {
  return (
    <div className="space-y-6 w-full sm:max-w-2/3">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>User name</FormLabel>
            <FormControl>
              <Input placeholder="Enter user name..." {...field} />
            </FormControl>
            <FormDescription>
              User name can have up to 64 characters. Valid characters: A-Z,
              a-z, 0-9, and _.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <FormField
          control={form.control}
          name="userAccess"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="rounded"
                  />
                </FormControl>
                <div className=" leading-none">
                  <FormLabel>
                    Provide user access to the Ost Infinity Management Console -
                    optional
                  </FormLabel>
                </div>
              </div>
              <FormDescription className={"ml-6"}>
                If you are providing access to a person, it is a best practice
                to manage their access in IAM identity Center.
              </FormDescription>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
