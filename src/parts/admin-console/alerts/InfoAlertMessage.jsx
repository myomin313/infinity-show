import { X } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export function InfoAlertMessage({
  type = "info",
  title,
  description,
  link = "#",
  linkText,
  icon,
  isClose,
}) {
  return (
    <div className="grid w-full items-start gap-4">
      <Alert
        className={`relative border-2 w-full ${
          type == "info" ? "border-blue-300" : "border-orange-400"
        }`}
      >
        {icon}
        {title && (
          <AlertTitle>
            {title}
            {!description && (
              <span>
                <Link href={link} className="text-orange-400 text-xs underline">
                  {linkText}
                </Link>
              </span>
            )}
          </AlertTitle>
        )}
        {description && (
          <AlertDescription className={" inline text-xs"}>
            {description}{" "}
            <Link href={link} className="text-orange-400 text-xs underline">
              {linkText}
            </Link>
          </AlertDescription>
        )}
        {isClose && <X className="absolute top-2 right-2" />}
      </Alert>
    </div>
  );
}
