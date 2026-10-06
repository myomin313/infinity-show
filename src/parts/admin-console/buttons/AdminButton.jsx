import { Button } from "@/components/ui/button";

export function AdminButton({ type = "primary", children }) {
  return (
    <Button
      className={` text-xs font-bold rounded ${
        type === "primary"
          ? "bg-[#F98D11] text-white rounded hover:bg-[#F98D11]"
          : type == "outline"
          ? "border-blue-900 border-2 text-blue-800 bg-background hover:border-blue-800  hover:text-blue-900 hover:bg-background"
          : "bg-emerald-800"
      }`}
    >
      {children}
    </Button>
  );
}
