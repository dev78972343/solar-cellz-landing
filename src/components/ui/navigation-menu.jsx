import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-50 flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      {/* <NavigationMenuViewport /> */}
    </NavigationMenuPrimitive.Root>
  ),
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-8 items-center justify-center rounded-md bg-white p-2 w-max font-medium transition-colors  focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 bg-transparent font-medium text-white hover:!bg-transparent hover:text-white/80 gap-x-2",
);

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      <span className={cn("w-[90%]", className)}>{children}</span>
      {""}

      <ChevronDown
        className="relative top-[1px] ml-auto h-3 w-3 transition duration-300 ease-in-out group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  ),
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "origin-top absolute z-[9999] mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-auto overflow-hidden rounded-md border border-neutral-200 bg-white text-sm text-neutral-950 shadow duration-1000 ease-smooth-in-out data-[motion^=from-]:animate-in data-[state=open]:animate-in data-[motion^=to-]:animate-out data-[state=closed]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 md:absolute md:w-auto",
        className,
      )}
      {...props}
    />
  ),
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuIndicator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800" />
    </NavigationMenuPrimitive.Indicator>
  ),
);
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
};
