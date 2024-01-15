"use client";

import { toast } from "sonner";
import P from "@/components/Typography/P";
import { cn, copyToClipboard } from "@/utils/helpers";

const CopyInfo = ({ text }: { text: string }) => {
  const copyHandler = () => {
    const { success } = copyToClipboard(text);

    if (success) {
      toast.success("Item copied to clipboard");
    } else {
      toast.error("Failed to copy item to clipboard");
    }
  };

  return (
    <P
      className={cn(
        "font-mono tracking-wide",
        "underline decoration-dotted underline-offset-2",
        "cursor-pointer",
      )}
      noMargin
      onClick={copyHandler}>
      {text}
    </P>
  );
};

export default CopyInfo;
