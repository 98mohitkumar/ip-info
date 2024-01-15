import Link from "next/link";
import A from "./Anchor";
import Button from "./Button";
import { FlexBox } from "./Layouts";
import H4 from "./Typography/H4";

const Error = ({ errorMessage }: { errorMessage: string }) => (
  <FlexBox className='flex-center min-h-96 flex-col gap-16'>
    <H4 noMargin weight='medium' className='theme:text-gray-600'>
      {errorMessage || "Could not find requested resource"}
    </H4>

    <A as={Link} href='/'>
      <Button background='secondary' variant='muted'>
        Reset
      </Button>
    </A>
  </FlexBox>
);
export default Error;
