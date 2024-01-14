import { Fragment } from "react";
import { LayoutContainer, FlexBox, GridBox, Col, GridCol } from "@/components/Layouts";
import H1 from "@/components/Typography/H1";
import H2 from "@/components/Typography/H2";
import H3 from "@/components/Typography/H3";
import H4 from "@/components/Typography/H4";
import H5 from "@/components/Typography/H5";
import H6 from "@/components/Typography/H6";
import P from "@/components/Typography/P";
import ButtonsPreview from "@/preview/buttons";
import SpacingsPreview from "@/preview/spacings";
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

        <SpacingsPreview />
      </LayoutContainer>

      <LayoutContainer className='py-1632'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>Buttons</H4>
        </div>

        <ButtonsPreview />
      </LayoutContainer>

      <LayoutContainer className='py-1632'>
        <div className='mb-32 border-b pb-24 theme:border-gray-500/50'>
          <H4 noMargin>FlexBox Layout</H4>
        </div>
        <FlexBox className='-mx-16' wrap='xs'>
          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 1</P>
            </FlexBox>
          </Col>

          <Col md={8} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 2</P>
            </FlexBox>
          </Col>
        </FlexBox>

        <FlexBox className='-mx-16 mt-2432' wrap='xs'>
          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 1</P>
            </FlexBox>
          </Col>

          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 2</P>
            </FlexBox>
          </Col>

          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 3</P>
            </FlexBox>
          </Col>
        </FlexBox>

        <FlexBox className='-mx-16 mt-2432' wrap='xs'>
          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 1</P>
            </FlexBox>
          </Col>

          <Col md={2} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 2</P>
            </FlexBox>
          </Col>

          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 3</P>
            </FlexBox>
          </Col>

          <Col md={2} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 4</P>
            </FlexBox>
          </Col>
        </FlexBox>

        <FlexBox className='-mx-16 mt-32' wrap='xs'>
          <Col md={4} className='px-16'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 1</P>
            </FlexBox>
          </Col>

          <Col md={6} className='px-16 md:ms-offset-2'>
            <FlexBox className='flex-center rounded-md p-1640 theme:bg-secondary-light/50'>
              <P size='large'>card 2</P>
            </FlexBox>
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
