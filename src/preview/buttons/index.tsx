import Button from "@/components/Button";
import { GridBox } from "@/components/Layouts";

type buttonStateType = {
  background: "primary" | "secondary" | "accent";
  variant: "flat" | "muted" | "outlined";
  size?: "small" | "medium" | "large";
};

const ButtonsPreview = () => {
  const variants: Array<buttonStateType> = [
    { background: "primary", variant: "flat", size: "small" },
    { background: "primary", variant: "flat", size: "medium" },
    { background: "primary", variant: "flat", size: "large" },
    { background: "primary", variant: "outlined", size: "small" },
    { background: "primary", variant: "outlined", size: "medium" },
    { background: "primary", variant: "outlined", size: "large" },
    { background: "primary", variant: "muted", size: "small" },
    { background: "primary", variant: "muted", size: "medium" },
    { background: "primary", variant: "muted", size: "large" },

    { background: "secondary", variant: "flat", size: "small" },
    { background: "secondary", variant: "flat", size: "medium" },
    { background: "secondary", variant: "flat", size: "large" },
    { background: "secondary", variant: "outlined", size: "small" },
    { background: "secondary", variant: "outlined", size: "medium" },
    { background: "secondary", variant: "outlined", size: "large" },
    { background: "secondary", variant: "muted", size: "small" },
    { background: "secondary", variant: "muted", size: "medium" },
    { background: "secondary", variant: "muted", size: "large" },

    { background: "accent", variant: "flat", size: "small" },
    { background: "accent", variant: "flat", size: "medium" },
    { background: "accent", variant: "flat", size: "large" },
    { background: "accent", variant: "outlined", size: "small" },
    { background: "accent", variant: "outlined", size: "medium" },
    { background: "accent", variant: "outlined", size: "large" },
    { background: "accent", variant: "muted", size: "small" },
    { background: "accent", variant: "muted", size: "medium" },
    { background: "accent", variant: "muted", size: "large" },
  ];

  return (
    // <LayoutContainer className='py-1648'>
    <div className='rounded-2xl bg-secondary-light/10 p-1632'>
      <GridBox className='items-center justify-items-center gap-24' xs={2} sm={3} lg={6} xl={9}>
        {variants.map((item, index) => (
          <Button key={index} background={item.background} variant={item.variant} size={item.size}>
            Submit
          </Button>
        ))}

        {variants.splice(0, 9).map((item, index) => (
          <Button
            key={index}
            background={item.background}
            variant={item.variant}
            size={item.size}
            disabled>
            Submit
          </Button>
        ))}
      </GridBox>
    </div>
    // </LayoutContainer>
  );
};

export default ButtonsPreview;
