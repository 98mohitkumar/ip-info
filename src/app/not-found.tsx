import Link from "next/link";
import A from "@/components/Anchor";
import { LayoutContainer } from "@/components/Layouts";
import H2 from "@/components/Typography/H2";
import P from "@/components/Typography/P";

export default function NotFound() {
  return (
    <LayoutContainer>
      <H2>Not Found</H2>

      <P>Could not find requested resource</P>

      <A as={Link} href='/'>
        Return Home
      </A>
    </LayoutContainer>
  );
}
