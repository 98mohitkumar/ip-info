import { Fragment } from "react";
import ButtonPage from "./button/page";
import { SpacingsPage } from "./spacings";
import { LayoutContainer, FlexBox, GridBox, Col, GridCol } from "@/components/Layouts";
import H1 from "@/components/Typography/H1";
import H2 from "@/components/Typography/H2";
import H3 from "@/components/Typography/H3";
import H4 from "@/components/Typography/H4";
import H5 from "@/components/Typography/H5";
import H6 from "@/components/Typography/H6";
import P from "@/components/Typography/P";
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <Fragment>
      <LayoutContainer className='py-1632'>
        <div className='mb-24 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>Typography</H4>
        </div>

        <H1 weight='medium'>Design system that works</H1>
        <H2 weight='medium'>Design system that works</H2>
        <H3 weight='medium'>Design system that works</H3>
        <H4 weight='medium'>Design system that works</H4>
        <H5 weight='medium'>Design system that works</H5>
        <H6 weight='medium'>Design system that works</H6>

        <P size='large'>Design system that works</P>
        <P>Design system that works</P>
        <P size='small'>Design system that works</P>
        <P size='tiny'>Design system that works</P>
        <P size='micro'>Design system that works</P>
      </LayoutContainer>

      <LayoutContainer className='py-1632'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>Colors</H4>
        </div>

        <GridBox className='mt-2448 gap-1624' xs={3} sm={4} md={5} lg={7}>
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-primary-light'
          />
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-secondary-light'
          />
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-accent-light'
          />
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-gray-500'
          />
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-success-light'
          />
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-danger-light'
          />
          <div
            className='aspect-square w-full transition-all 
          duration-1000 ease-in-out theme:bg-warning-light'
          />
        </GridBox>
      </LayoutContainer>

      <LayoutContainer className='py-1632'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>Spacings (paddings, margins, gaps)</H4>
        </div>

        <SpacingsPage />
      </LayoutContainer>

      <LayoutContainer className='py-1632'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>Buttons</H4>
        </div>

        <ButtonPage />
      </LayoutContainer>

      <LayoutContainer className='py-1632'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>FlexBox Layout</H4>
        </div>
        <FlexBox className={"gap-1632"} wrap='max-md'>
          <Col
            as={FlexBox}
            md={7}
            className={cn(
              "flex-center rounded-md p-1640 theme:bg-secondary-light/50",
              "md:me-offset-1",
            )}>
            <P size='large'>card 1 Lorem ipsum dolor sit amet.</P>
          </Col>

          <Col
            as={FlexBox}
            md={4}
            className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
            <P size='large'>card 2</P>
          </Col>
        </FlexBox>

        <FlexBox className={"mt-32 gap-1632 max-md:flex-wrap-reverse"}>
          <Col
            as={FlexBox}
            md={4}
            className={cn("flex-center rounded-md p-1640 theme:bg-secondary-light/50")}>
            <P size='large'>card 1 Lorem ipsum dolor sit amet.</P>
          </Col>

          <Col
            as={FlexBox}
            md={8}
            className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
            <P size='large'>card 2</P>
          </Col>
        </FlexBox>
      </LayoutContainer>

      <LayoutContainer className='py-1640'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>Grid Layout</H4>
        </div>
        <GridBox className={cn("w-full gap-1632")} xs={1} sm={2} md={3}>
          {[...Array(12)].fill("card").map((item, i) => (
            <GridCol
              as={FlexBox}
              key={i}
              xs={1}
              sm={i === 6 ? 2 : 1}
              className={cn("flex-center h-32 rounded-md p-1624 theme:bg-primary-light/60")}>
              <P size='large' className='text-color-dark'>
                {item}
              </P>
            </GridCol>
          ))}
        </GridBox>
      </LayoutContainer>
    </Fragment>
  );
}
