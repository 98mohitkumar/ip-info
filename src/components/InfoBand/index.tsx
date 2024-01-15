import { ReactNode } from "react";
import { FlexBox } from "@/components/Layouts";
import H6 from "@/components/Typography/H6";
import P from "@/components/Typography/P";
import { cn, matches } from "@/utils/helpers";

type InfoBandProps = {
  title: string;
  copy: string | ReactNode;
};

const InfoBand = ({ title, copy }: InfoBandProps) => {
  return (
    <FlexBox
      className={cn(
        "items-center justify-between gap-16",
        "mb-16 px-1624 py-12 last:mb-0",
        "rounded-lg theme:bg-gray-100/50",
        "text-right",
      )}>
      <H6 noMargin weight='regular' className='theme:text-gray-600'>
        {title}:
      </H6>
      {matches(typeof copy, "object") ? (
        copy
      ) : (
        <P className='font-mono' as='span' noMargin>
          {copy}
        </P>
      )}
    </FlexBox>
  );
};

export default InfoBand;
