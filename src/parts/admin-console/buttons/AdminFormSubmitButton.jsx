"use client";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

const AdminFormSubmitButton = ({ isPending, fullWidth, text }) => {
  return (
    <Button
      type="submit"
      //   disabled={isPending}
      className={`bg-[#F98D11] text-white rounded hover:bg-[#F98D11]" ${
        fullWidth && "w-full"
      }`}
    >
      {isPending ? (
        <span className="flex items-center gap-4">
          <LoaderCircle className="animate-spin" /> Submitting
        </span>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
};

export default AdminFormSubmitButton;
