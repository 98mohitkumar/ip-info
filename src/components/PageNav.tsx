"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { FlexBox } from "./Layouts";
import H3 from "./Typography/H3";

const PageNav = ({ isQueryPage }: { isQueryPage: boolean }) => {
  const router = useRouter();

  return (
    <FlexBox className='items-center gap-12 max-sm:w-full'>
      {isQueryPage ? (
        <Button
          onClick={() => router.push("/")}
          className='flex items-center gap-8'
          variant='muted'
          background='secondary'>
          <ArrowLeftIcon width={20} height={20} />
        </Button>
      ) : null}

      <H3 as='h1' noMargin weight='medium'>
        IP Info
      </H3>
    </FlexBox>
  );
};

export default PageNav;
