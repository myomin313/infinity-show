import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AdminConsoleSectionCard = ({
  title,
  isCardAction = false,
  children,
  footerLink,
  footerLinkName,
}) => {
  return (
    <Card
      className={`w-full h-full flex flex-col bg-gray ${
        footerLink ? "pb-0" : ""
      }`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {isCardAction && <CardAction>Card Action</CardAction>}
      </CardHeader>
      <CardContent className="flex-1">
        <div>{children}</div>
      </CardContent>
      {footerLink && (
        <CardFooter className="p-2 border-t-2 border-gray-200 w-full grid place-items-center">
          <Link
            href="#"
            className="text-sm text-blue-900 hover:underline flex items-center"
          >
            {footerLinkName}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default AdminConsoleSectionCard;
