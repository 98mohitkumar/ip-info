import Link from "next/link";
import A from "@/components/Anchor";
import Button from "@/components/Button";
import { LayoutContainer } from "@/components/Layouts";
import H2 from "@/components/Typography/H2";
import P from "@/components/Typography/P";

export default function NotFound() {
  return (
    <LayoutContainer>
      <H2>Not Found</H2>

      <P className='mb-12'>Could not find requested resource</P>

      <A as={Link} href='/'>
        <Button background='secondary'>Return Home</Button>
      </A>
    </LayoutContainer>
  );
}
