import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AdminConsoleSectionContainer = ({
  title,
  isCardAction = false,
  children,
}) => {
  return (
    <Card className={`w-full h-full bg-gray`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {isCardAction && <CardAction>Card Action</CardAction>}
      </CardHeader>
      <CardContent className="flex-1">
        <div>{children}</div>
      </CardContent>
    </Card>
  );
};

export default AdminConsoleSectionContainer;
