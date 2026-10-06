import { CardDescription, CardTitle } from "@/components/ui/card";
import { DoorClosedIcon } from "lucide-react";

const BillingAndInvestmentCardItem = ({
  title,
  description,
  icon,
  color,
  subdescription,
}) => {
  return (
    <div className="space-y-2">
      <CardTitle className={"text-sm"}>{title}</CardTitle>
      <div className={`flex items-center gap-2 ${color}`}>
        {icon}
        <CardDescription className={`${color}`}>{description}</CardDescription>
      </div>
      <div>
        <CardDescription className={"text-xs font-semibold"}>
          {subdescription}
        </CardDescription>
      </div>
    </div>
  );
};

export default BillingAndInvestmentCardItem;
