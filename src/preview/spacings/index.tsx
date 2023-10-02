import { FlexBox } from "@/components/Layouts";
import P from "@/components/Typography/P";

const SpacingsPreview = () => {
  const spacings = [4, 8, 12, 16, 24, 32, 40, 48, 64, 80];

  const renderList = [
    "w-[4px]",
    "w-[8px]",
    "w-[12px]",
    "w-[16px]",
    "w-[24px]",
    "w-[32px]",
    "w-[40px]",
    "w-[48px]",
    "w-[64px]",
    "w-[80px]",
  ];

  return (
    <FlexBox className='flex-col gap-1624'>
      {renderList.map((item, index) => (
        <FlexBox key={index} className='items-center gap-16'>
          <div className={`aspect-square bg-secondary-light ${item}`} />
          <P noMargin>{spacings[index]}</P>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default SpacingsPreview;
