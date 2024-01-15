"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { FlexBox, LayoutContainer } from "@/components/Layouts";
import { cn } from "@/utils/helpers";

const ThemeSwitcher = () => {
  const { setTheme, themes, theme, resolvedTheme } = useTheme();

  return (
    <LayoutContainer as={FlexBox} className='justify-end px-1648 py-24'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn("text-sm rounded-lg p-8 align-middle theme:bg-gray-400/30")}>
          {resolvedTheme === "dark" ? (
            <MoonIcon width={20} height={20} />
          ) : (
            <SunIcon width={20} height={20} />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align='center'
          onCloseAutoFocus={(e) => {
            window.innerWidth > 1024 && e.preventDefault();
          }}
          className='[&_svg]:theme:fill-gray-300/50'>
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={setTheme}
            className={cn(
              "rounded-md border p-4 shadow-md theme:border-gray-300/50 theme:bg-background-light",
            )}>
            {themes.map((theme) => (
              <DropdownMenuRadioItem
                key={theme}
                value={theme}
                className={cn(
                  "cursor-pointer rounded-md px-8 py-4 capitalize transition-colors theme:text-color-dark",
                  "hover:underline hover:outline-none",
                )}>
                {theme}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </LayoutContainer>
  );
};

export default ThemeSwitcher;
